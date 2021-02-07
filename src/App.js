import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from 'component/Container';
import AppBar from 'component/AppBar';
import Loader from 'component/Loader';
import PrivateRoute from 'component/PrivateRoute';
import PublicRoute from 'component/PublicRoute';
// import RegisterView from 'views/RegisterView';
// import HomeView from 'views/HomeView';
// import NotFoundView from 'views/NotFoundView';
// import PhonebookView from 'views/PhonebookView';
// import SignInView from 'views/LoginView';
// import SignUpView from 'views/RegisterView';

const HomeView = lazy(() =>
  import('views/HomeView' /* webpackChunkName: "HomeView" */),
);
const PhonebookView = lazy(() =>
  import('views/PhonebookView' /* webpackChunkName: "PhonebookView" */),
);
const RegisterView = lazy(() =>
  import('views/RegisterView' /* webpackChunkName: "RegisterView" */),
);
const LoginView = lazy(() =>
  import('views/LoginView' /* webpackChunkName: "LoginView" */),
);
const NotFoundView = lazy(() =>
  import('views/NotFoundView' /* webpackChunkName: "NotFoundView" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          <PrivateRoute path="/contact" exact>
            <PhonebookView />
          </PrivateRoute>

          <PublicRoute path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted>
            <LoginView />
          </PublicRoute>

          <PublicRoute>
            <NotFoundView />
          </PublicRoute>
        </Switch>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}

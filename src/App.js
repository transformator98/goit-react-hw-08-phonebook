import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from 'component/Container';
import AppBar from 'component/AppBar';
import Loader from 'component/Loader';
import HomeView from 'views/HomeView';
import NotFoundView from 'views/NotFoundView';
import PhonebookView from 'views/PhonebookView';
import SignInView from 'views/SignInView';
import SignUpView from 'views/SignUpView';

// const HomeView = lazy(() =>
//   import('views/HomeView' /* webpackChunkName: "HomeView" */),
// );
// const PhonebookView = lazy(() =>
//   import('views/PhonebookView' /* webpackChunkName: "PhonebookView" */),
// );
// const SignUpView = lazy(() =>
//   import('views/SignUpView' /* webpackChunkName: "SignUpView" */),
// );
// const SignInView = lazy(() =>
//   import('views/SignInView' /* webpackChunkName: "SignInView" */),
// );
// const NotFoundView = lazy(() =>
//   import('views/NotFoundView' /* webpackChunkName: "NotFoundView" */),
// );

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/contact" exact>
            <PhonebookView />
          </Route>

          <Route path="/register">
            <SignUpView />
          </Route>

          <Route path="/login">
            <SignInView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
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

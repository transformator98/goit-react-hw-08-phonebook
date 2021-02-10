import { useSelector } from 'react-redux';
import ContactsForm from 'component/ContactForm';
import Filter from 'component/Filter';
import ContactList from 'component/ContactList';
import Loader from 'component/Loader';
import Container from 'component/Wrapper';

import { getLoading, getError } from 'redux/phonebook';
// import { getLoading, getError, getVisible } from 'redux/phonebook';

const PhonebookView = () => {
  const loading = useSelector(getLoading);

  const error = useSelector(getError);
  // const visibleFilter = useSelector(getVisible);

  return (
    <div>
      {error ? (
        <h1 className="error">{error.message}</h1>
      ) : (
        <Container>
          <h1>Phonebook</h1>
          <ContactsForm />
        </Container>
      )}
      <Filter />
      {loading && <Loader />}

      <ContactList />
    </div>
  );
};
export default PhonebookView;

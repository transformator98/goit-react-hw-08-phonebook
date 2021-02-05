import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './phonebook-actions';
import * as phonebookShelfAPI from '../../services/phonebookShelf-api';
import { toast } from 'react-toastify';

export const fetchContact = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const data = await phonebookShelfAPI.fetchContact();
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

export const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(addContactRequest());

  phonebookShelfAPI
    .addContact(contact)
    .then(({ data }) => {
      toast.success(`Контакт ${name} добавлен`);
      dispatch(addContactSuccess(data));
    })
    .catch(error => dispatch(addContactError(error)));
};
export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  phonebookShelfAPI
    .deleteContact(contactId)
    .then(() => {
      toast.success('Контакт удален');
      dispatch(deleteContactSuccess(contactId));
    })
    .catch(error => dispatch(deleteContactError(error)));
};

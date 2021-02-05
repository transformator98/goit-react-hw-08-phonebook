// import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

//pending
export const fetchContactRequest = createAction(
  'phonebook/fetchPhonebookRequest',
);
//fulfilled
export const fetchContactSuccess = createAction(
  'phonebook/fetchPhonebookSuccess',
);
//rejected
export const fetchContactError = createAction('phonebook/fetchPhonebookError');

export const addContactRequest = createAction('contact/addContactRequest');
export const addContactSuccess = createAction('contact/addContactSuccess');
export const addContactError = createAction('contact/addContactError');

export const deleteContactRequest = createAction(
  'contact/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contact/deleteContactSuccess',
);
export const deleteContactError = createAction('contact/deleteContactError');

export const changeFilter = createAction('phonebook/ChangeFilter');

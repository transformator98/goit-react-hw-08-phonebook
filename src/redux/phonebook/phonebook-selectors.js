import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getVisible = state => state.contacts.items.length;
export const getLoading = state => state.contacts.loading;
export const getError = state => state.contacts.error;

export const getVisibleContact = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  },
);
// без мемоизации
// export const getVisibleContact = state => {
//   const contacts = getItems(state);
//   const filter = getFilter(state);

//   const normalizeFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizeFilter),
//   );
// };

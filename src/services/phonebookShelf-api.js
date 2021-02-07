import axios from 'axios';

export async function fetchContact() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  return await axios.post('/contacts', contact);
}
export async function deleteContact(contactId) {
  return await axios.delete(`/contacts/${contactId}`);
}

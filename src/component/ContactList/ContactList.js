import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import s from './ContactList.module.css';
import ContactListItem from './ContactListItem';

import {
  getVisibleContact,
  deleteContact,
  fetchContact,
} from 'redux/phonebook';

export default function ContactList() {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  useEffect(() => {
    dispatch(fetchContact());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <h2>Contact</h2>

      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            id={id}
            key={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </section>
  );
}

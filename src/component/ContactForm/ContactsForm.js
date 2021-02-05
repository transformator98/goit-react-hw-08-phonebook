import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getItems, addContact } from 'redux/phonebook';

import s from './ContactsForm.module.css';

export default function ContactsForm() {
  const items = useSelector(getItems);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const repeatContact = name => {
    const repeatName = name.toLowerCase();
    return items.find(contact => contact.name === repeatName);
  };
  const formAddContact = () => dispatch(addContact(name, number));

  const handleSubmit = event => {
    event.preventDefault();
    const repeat = repeatContact(name);
    if (name.length < 2) {
      toast.warn(
        `Текст должен быть не меньше 2 символов, сейчас ${name.length}`,
      );
      return;
    }

    if (number.length < 5) {
      toast.warn(
        `Номер должен быть не меньше 5 символов, сейчас ${number.length}`,
      );
      return;
    }

    repeat ? toast.error(`${name} уже существует!`) : formAddContact();

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          placeholder="Name contact"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="number"
          name="number"
          placeholder="Number contact"
          value={number}
          onChange={handleInputChange}
        />
      </label>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

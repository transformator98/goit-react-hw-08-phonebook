import PropTypes from 'prop-types';
import s from './ContactList.module.scss';

export default function ContactListItem({ id, name, number, onDeleteContact }) {
  return (
    <li className={s.item} key={id}>
      <p className={s.name}>Name: {name}</p>

      <p className={s.number}>Number: {number}</p>
      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

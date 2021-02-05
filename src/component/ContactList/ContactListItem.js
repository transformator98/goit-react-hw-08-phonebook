import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactListItem({ id, name, number, onDeleteContact }) {
  return (
    <li className={s.item} key={id}>
      <p className={s.name}>{name}:</p>

      <p className={s.number}>+38 {number}</p>
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
  id: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.string,
};

import PropTypes from 'prop-types';
import './ContactList.scss';

export default function ContactListItem({ id, name, number, onDeleteContact }) {
  return (
    <li className="item" key={id}>
      <p className="name">Name: {name}</p>

      <p className="number">Number: {number}</p>
      <button
        className="button"
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

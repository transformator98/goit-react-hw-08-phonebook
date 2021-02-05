import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { getFilter, changeFilter } from 'redux/phonebook/';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => dispatch(changeFilter(event.target.value));
  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

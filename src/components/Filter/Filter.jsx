import { useSelector, useDispatch } from 'react-redux';
import { getFiltered } from '../../redux/filterSlice/filterSlice';
import { getFilter } from '../../redux/filterSlice/filterSelector';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleChange = event => {
    const value = event.target.value;
    dispatch(getFiltered(value));
  };
  return (
    <div>
      <p>Find contats by name</p>
      <input onChange={handleChange} type="text" value={filter} required />
    </div>
  );
};

export default Filter;

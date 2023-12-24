import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={evt => dispatch(updateFilter(evt.target.value))}
      />
    </>
  );
};

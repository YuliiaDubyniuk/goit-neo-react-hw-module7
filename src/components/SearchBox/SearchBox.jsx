import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';
import { selectFilter } from '../../redux/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();

  const filterValue = useSelector(selectFilter);

  return (
    <div className={css.searchWrap}>
      <label htmlFor="keyword">Find contacts by name</label>
      <input
        id="keyword"
        type="text"
        className={css.search}
        value={filterValue}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
};

export default SearchBox;

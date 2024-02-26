import PropTypes from 'prop-types';
import style from './SearchFilter.module.css';

export const SearchFilter = ({ filter, changeFilterInput }) => (
  <label className={style.label}>
    <input
      className={style.searchInput}
      type="text"
      name={filter}
      onChange={changeFilterInput}
      placeholder="Find contacts by name"
    />
  </label>
);

SearchFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};

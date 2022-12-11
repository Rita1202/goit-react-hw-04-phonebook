import PropTypes from 'prop-types';
// import {  } from 'react';
import css from './Filter.module.css';

export const Filter = ({ handleChange, filter }) => {
  return (
    <>
      <input
        className={css.input}
        name="filter"
        placeholder="Find contacts by name"
        onChange={handleChange}
        value={filter}
        type="text"
      />
    </>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};

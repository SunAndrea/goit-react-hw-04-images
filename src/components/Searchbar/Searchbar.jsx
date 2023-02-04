import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = evt => {
    setInputValue(evt.target.value);
  };

  const onFormSubmit = evt => {
    evt.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header className="Searchbar">
      <form onSubmit={onFormSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <AiOutlineSearch color="purple" size="30px" />

          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          value={inputValue}
          onChange={onInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

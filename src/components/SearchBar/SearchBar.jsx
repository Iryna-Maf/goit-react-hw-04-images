import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import s from '../SearchBar/SearchBar.module.css';

class SearchBar extends Component {
  state = {
    imageName: '',
  };
  hendleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  hanedleSubmit = event => {
    event.preventDefault();

    if (this.state.imageName.trim() === '') {
      toast('Input image name');
      return;
    }

    this.props.onSubmit(this.state.imageName);

    this.setState({ imageName: '' });
  };
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.hanedleSubmit}>
          <button type="submit" className={s.button}>
            <ImSearch />
          </button>

          <input
            className={s.input}
            type="text"
            name="imageName"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.hendleNameChange}
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

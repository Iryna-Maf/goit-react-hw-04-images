import React from 'react';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    imageName: '',
    page: 1,
  };

  hendleFormSearchSubmit = imageName => {
    this.setState({ imageName, page: 1 });
  };

  onClickLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log('st');
  };

  render() {
    const { imageName, page } = this.state;
    return (
      <>
        <ToastContainer position="top-left" autoClose={2000} />
        <SearchBar onSubmit={this.hendleFormSearchSubmit} />
        <ImageGallery
          imageName={imageName}
          page={page}
          onClickLoadMore={this.onClickLoadMore}
        />
      </>
    );
  }
}
export default App;

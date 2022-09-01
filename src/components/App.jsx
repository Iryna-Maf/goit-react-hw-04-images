import React from 'react';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';

function App() {
  const [imageName, setName] = useState('');
  const [page, setPage] = useState(1);

  const hendleFormSearchSubmit = imageName => {
    setName(imageName);
    setPage(1);
  };

  const onClickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <ToastContainer position="top-left" autoClose={2000} />
      <SearchBar onSubmit={hendleFormSearchSubmit} />
      <ImageGallery
        imageName={imageName}
        page={page}
        onClickLoadMore={onClickLoadMore}
      />
    </>
  );
}
export default App;

// import React from 'react';
// import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import SearchBar from './SearchBar/SearchBar';
// import ImageGallery from './ImageGallery/ImageGallery';

// class App extends Component {
//   state = {
//     imageName: '',
//     page: 1,
//   };

//   hendleFormSearchSubmit = imageName => {
//     this.setState({ imageName, page: 1 });
//   };

//   onClickLoadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     const { imageName, page } = this.state;
//     return (
//       <>
//         <ToastContainer position="top-left" autoClose={2000} />
//         <SearchBar onSubmit={this.hendleFormSearchSubmit} />
//         <ImageGallery
//           imageName={imageName}
//           page={page}
//           onClickLoadMore={this.onClickLoadMore}
//         />
//       </>
//     );
//   }
// }
// export default App;

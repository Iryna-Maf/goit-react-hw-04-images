import { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import fetchImages from 'components/Api/Api';

import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    images: null,
    showModal: false,
    error: null,
    // page: 1,
    largeImage: '',
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImageName = prevProps.imageName;
    const nextImageName = this.props.imageName;
    const page = this.props.page;

    if (prevImageName !== nextImageName) {
      this.setState({ status: 'pending' });

      fetchImages(nextImageName, page)
        .then(data => data.hits)
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
    if (page !== prevProps.page && page !== 1) {
      fetchImages(nextImageName, page)
        .then(data => data.hits)
        .then(images =>
          this.setState({
            images: [...prevState.images, ...images],
            status: 'resolved',
          })
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  onClickImage = event => {
    const { images } = this.state;
    const findImage = images.find(
      image => image.id.toString() === event.currentTarget.id
    );
    this.setState({
      largeImage: findImage.largeImageURL,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, error, status, showModal, largeImage } = this.state;

    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h2>{error.message}</h2>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className={s.gallery}>
            {images?.map(image => (
              <ImageGalleryItem
                image={image}
                key={image.id}
                onClick={this.onClickImage}
              />
            ))}
          </ul>
          <Button onClick={this.props.onClickLoadMore} />
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={largeImage} alt="largeImage" width={1100} />
              <button
                type="button"
                className={s.buttonCloseModal}
                onClick={this.toggleModal}
              >
                X
              </button>
            </Modal>
          )}
        </>
      );
    }
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired,
};

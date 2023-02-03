import { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      <>
        {' '}
        <ul className="ImageGallery">
          {this.props.images &&
            this.props.images.map(
              ({ id, webformatURL, largeImageURL, tags }) => {
                return (
                  <ImageGalleryItem
                    key={id}
                    img={webformatURL}
                    largeImg={largeImageURL}
                    tags={tags}
                  />
                );
              }
            )}
        </ul>
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;

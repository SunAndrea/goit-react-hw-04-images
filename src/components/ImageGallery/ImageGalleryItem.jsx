import { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal/Modal';
class ImageGalleryItem extends Component {
  state = {
    largeImgShow: false,
  };

  onItemClick = () => {
    this.setState(({ largeImgShow }) => ({ largeImgShow: !largeImgShow }));
  };

  render() {
    const { img, tags, largeImg } = this.props;

    return (
      <li onClick={this.onItemClick} className="ImageGalleryItem-image">
        <img src={img} alt={tags} />
        {this.state.largeImgShow && (
          <Modal largeImg={largeImg} tags={tags} onClose={this.onItemClick} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
};

export default ImageGalleryItem;

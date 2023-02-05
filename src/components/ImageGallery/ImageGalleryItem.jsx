import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
const ImageGalleryItem = ({ img, tags, largeImg }) => {
  const [largeImgShow, setLargeImgShow] = useState(false);

  const onItemClick = () => {
    setLargeImgShow(!largeImgShow);
  };

  return (
    <li onClick={onItemClick} className="ImageGalleryItem-image">
      <img src={img} alt={tags} />
      {largeImgShow && (
        <Modal
          largeImgShow={largeImgShow}
          largeImg={largeImg}
          tags={tags}
          onClose={onItemClick}
        />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
};

export default ImageGalleryItem;

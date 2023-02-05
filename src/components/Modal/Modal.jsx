import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ largeImg, tags, onClose, largeImgShow }) => {
  const [isShow, setIsShow] = useState(largeImgShow);

  function handleKeyDown(evt) {
    if (evt.code === 'Escape') {
      onClose();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    handleKeyDown();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  return createPortal(
    <div className="Overlay">
      <div className="Modal">
        <img src={largeImg} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
  largeImgShow: PropTypes.bool.isRequired,
};

export default Modal;

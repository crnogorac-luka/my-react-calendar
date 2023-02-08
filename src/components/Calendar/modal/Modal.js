import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ isOpen, onClose }) => {

    if (!isOpen) {
        return null;
      }

  return (
      <ReactModal 
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2>Modal Title</h2>
        <p>Modal Content</p>
      </ReactModal>
  );
}

export default Modal;
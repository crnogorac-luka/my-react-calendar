import React, { useState } from 'react';
import ReactModal from 'react-modal';

const Modal = (props) => {
    const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <ReactModal 
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        style={props.style}
        contentLabel="Example Modal"
      >
        <h2>Modal Title</h2>
        <p>Modal Content</p>
        <button onClick={handleCloseModal}>Close Modal</button>
      </ReactModal>
    </div>
  );
}

export default Modal;
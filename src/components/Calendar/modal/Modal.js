import React from "react";
import ReactModal from "react-modal";
import "./Modal.scss";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Modal = ({ isOpen, onClose, event }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      ariaHideApp={false}
      className="modal"
    >
      <label>EVENT INFO</label>
      <h2>{event.title}</h2>
      <p>
        Date: {" "}
        {new Date(event.start).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <p>Committer: {event.committer}</p>
      <p>
        Commit URL: <a rel="noopener noreferrer" target="_blank" href={event.commitUrl}>{event.commitUrl}</a>
      </p>
      <CloseRoundedIcon className="close-icon" fontSize="large" onClick={onClose}/>
    </ReactModal>
  );
};

export default Modal;

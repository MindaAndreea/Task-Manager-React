import { useState, useEffect } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <div className={`${isOpen ? "modal-wrapper" : "modal-hidden"}`}>
      <div className="modal-content">
        <div className="card">
          <div className="close-button" onClick={closeModal}>
            <div className="icon">
              <FontAwesomeIcon icon={faXmark} className="closeIcon" />
            </div>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

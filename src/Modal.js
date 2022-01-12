import React from "react";
import PropTypes from "prop-types";

const Modal = ({ modal, setModal }) => {
    return (
        <div className={modal ? "modal-container" : "remove-modal"}>
            <div className="message-container">
                <p>Thank you, form Submitted !</p>
                <button onClick={() => setModal(false)}>close</button>
            </div>
        </div>
    );
};

Modal.propTypes = {
    modal: PropTypes.bool.isRequired,
    setModal: PropTypes.func.isRequired,
};

export default Modal;

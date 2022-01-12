import React from "react";

const Modal = ({ modal, setModal }) => {
    return (
        <div className={modal ? "modal-container" : "remove-modal"}>
            <p>Your form has been submitted</p>
            <button onClick={() => setModal(false)}>close</button>
        </div>
    );
};

export default Modal;

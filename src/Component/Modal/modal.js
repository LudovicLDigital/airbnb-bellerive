import React from "react";
import './modal.css';

function Modal({ handleClose, children}) {

    return (
        <div className={"modal display-block"}>
            <section className="modal-main">
                {children}
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>
    )
}

export default Modal;

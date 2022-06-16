import React from "react";
import './modal.css';

interface Props {
    /** Function with no return to handle the modal close's action */
    handleClose: () => void
    /** standard children prop: accepts any valid React Node */
    children?: React.ReactNode
}
function Modal({ handleClose, children} : Props): JSX.Element {

    return (
        <div className={"modal display-block"}>
            <div className="modal-main">
                {children}
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal;

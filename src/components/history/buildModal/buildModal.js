import Modal from 'react-modal';
import clear from "../../../icons/clear.svg";
import { useState } from "react";
import './build-modal.css';
import Button from '../../button/button';

function BuildModal({ isOpen, toggleOpen }) {
    const [commitHash, setCommitHash] = useState("");

    const closeModal = () => {
        toggleOpen(false);
        setCommitHash("");
    }

    const clearCommitHash = (e) => {
        e.preventDefault();
        setCommitHash("");
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            portalClassName="popup"
            className="popup__content"
            overlayClassName="popup__overlay"
        >
            <h3 className="modal__title">New build</h3>
            <p className="modal__subtitle">Enter the commit hash which you want to build.</p>
            <div className="modal__input-block">
                <input
                    name="commitHash"
                    className="modal__input-field"
                    placeholder="Commit hash"
                    type="text"
                    value={commitHash}
                    onChange={e => setCommitHash(e.target.value)}
                />
                {!!commitHash ?
                    <button onClick={clearCommitHash} type="reset" className="modal__button-clear">
                        <img src={clear} className="modal__input-clear" alt="clear" />
                    </button> : null
                }
            </div>
            <div className="modal__buttons">
                <Button type="submit" onClick={closeModal} className="modal-button__yellow">
                    <p className="modal-text__button">
                        Run build
                    </p>
                </Button>
                <Button onClick={closeModal} className="modal-button__cancel">
                    <p className="modal-text__button">
                        Cancel
                    </p>
                </Button>
            </div>
        </Modal>
    )
}

export default BuildModal;
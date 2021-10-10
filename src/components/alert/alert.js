import Modal from 'react-modal';
import { useState } from "react";
import './alert.css';

function Alert({ title, subtitle, duration = 3000 }) {
    const [modalIsOpen, setIsOpen] = useState(true);

    const closeModal = () => setIsOpen(false);

    setTimeout(() => {
        closeModal();
    }, duration);

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            portalClassName="alert"
            className="alert__content"
            overlayClassName="alert__overlay"
        >
            <h3 className="alert__title">{title}</h3>
            <p className="alert__subtitle">{subtitle}</p>
        </Modal>
    );
}

export default Alert;
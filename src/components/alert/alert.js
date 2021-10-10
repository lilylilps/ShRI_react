import Modal from 'react-modal';
import { useEffect, useState } from "react";
import './alert.css';

function Alert({ title, subtitle, onClose, duration = 3000 }) {
    const [modalIsOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        onClose();
        setIsOpen(false);
    }

    useEffect(() => {
        let isMounted = true;
        setTimeout(() => {
            if (isMounted) {
                onClose();
                setIsOpen(false);
            }
        }, duration);
        return () => {
            isMounted = false;
        };
    }, [duration, onClose]);



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
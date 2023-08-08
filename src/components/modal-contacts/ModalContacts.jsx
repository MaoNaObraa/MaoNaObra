import './ModalContacts.css'
import { motion } from 'framer-motion';

const ModalContacts = ({ isOpen, onClose }) => {
    return (
        <div>
            {isOpen && (
                <motion.div
                    className="modal"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="modal-content">
                        <button onClick={onClose}>Ok</button>
                    </div>
                </motion.div>
            )

            }
        </div>


    );
}

export default ModalContacts;
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import './ImageProfile.css'
import { Context } from '../../../context/userContext';

const ImageProfile = ({ image }) => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const {  logout } = useContext(Context)

    const handleClick = () => {
        setTooltipVisible(!tooltipVisible);
    };
    return (
        <div>
            <div
                className="profile-image-container"
                onClick={handleClick}
            >
                <div
                    id="image-profile"
                    className="profile-image"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
                {tooltipVisible && (
                    <motion.div
                        className="tooltip"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                        <button id='to-profile'>Perfil</button>
                        <button id='logout' onClick={logout}>Sair</button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ImageProfile;
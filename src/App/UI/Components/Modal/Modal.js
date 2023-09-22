import React, { useState } from 'react';
import './Modal.css'

function Modal({ isOpen, onClose, children }) {
    return isOpen ? (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div className='content'>
                    {children}
                </div>

            </div>
        </div>
    ) : null;
}

export default Modal;

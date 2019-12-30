import React from 'react';
import CloseIcon from './icons/CloseIcon';

const Lightbox = ({
    className = "lightbox",
    overlay = {
        background: 'rgba(0, 0, 0, 0.5)'
    },
    content = "This is a lightbox",
    closeButton = true
}) => (
    <section className={className}>
        <div className="lightbox__overlay" style={ overlay }></div>
        <div className="lightbox__content">
            { content }
            { closeButton ? <button className="lightbox__close"><CloseIcon /></button> : '' }
        </div>
    </section>
)

export default Lightbox;

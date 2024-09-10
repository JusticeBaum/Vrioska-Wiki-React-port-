import React, { useState} from 'react';

const Slideshow = ({ images }) => {
    const [curIndex, setCurIndex] = useState(0);

    const nextImage = () => {
        setCurIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurIndex((prevIndex) => (prevIndex - 1) % images.length);
    };

    return (
        <div className="image-gallery">
            <div className="image-container">
                {images[curIndex]}
            </div>
            <div className="navigation-buttons">
                <button
                    className="backward"
                    onClick={prevImage}
                    disabled={images.length <= 1}
                    aria-label="Previous image"
                />
                <button
                    className="forward"
                    onClick={nextImage}
                    disabled={images.length <= 1}
                    aria-label="Next image"
                />
            </div>
        </div>
    );
};

export default Slideshow;
import React, { useState, useEffect, useRef } from 'react';

const ZoomImage = ({ src, alt, className }) => {
    const [isMagnified, setIsMagnified] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const imgRef = useRef(null);

  const handleClick = (event) => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      setPosition({
        top: offsetY,
        left: offsetX,
      });

      setIsMagnified(!isMagnified);
    }
  };

  return (
    <div 
      className={`magnifier-container ${isMagnified ? 'magnified' : ''}`} 
      onClick={handleClick}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`magnifier-image ${isMagnified ? 'magnified' : ''}`}
      />
      {isMagnified && (
        <div
          className="magnifier-overlay"
          style={{
            top: `-${position.top}px`,
            left: `-${position.left}px`,
            width: `${imgRef.current?.offsetWidth * 2}px`,
            height: `${imgRef.current?.offsetHeight * 2}px`,
            backgroundImage: `url(${src})`,
            backgroundSize: `${imgRef.current?.offsetWidth * 2}px ${imgRef.current?.offsetHeight * 2}px`,
            backgroundPosition: `-${position.left * 2}px -${position.top * 2}px`,
          }}
        />
      )}
    </div>
  );
};

export default ZoomImage;
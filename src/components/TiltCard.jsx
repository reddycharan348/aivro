import React, { useRef, useState } from 'react';

const TiltCard = ({ children, className = "", innerClassName = "" }) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    
    // Mouse coordinates relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Center point calculations
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    // Normalized rotation values (tilt range: -8 to 8 degrees)
    const rotateX = -(y - yc) / (rect.height / 16); 
    const rotateY = (x - xc) / (rect.width / 16);
    
    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        transformStyle: 'preserve-3d',
      }}
      className={`transition-all duration-300 ${className}`}
    >
      <div style={{ transform: 'translateZ(25px)', transformStyle: 'preserve-3d' }} className={`h-full ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default TiltCard;

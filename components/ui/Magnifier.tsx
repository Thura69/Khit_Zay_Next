'use client'
import Image, { StaticImageData } from 'next/image';
import React, { FC, useState } from 'react';
// Define the MagnifierProps interface
interface MagnifierProps {
  imgUrl: StaticImageData;
}

export const Magnifier: FC<MagnifierProps> = ({ imgUrl }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPointer, setCursorPointer] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
    

    setCursorPointer({ x: e.pageX - left, y: e.pageY - top });
  };

  const dynamicStyles = {
    backgroundImage: `url(${imgUrl.src})`,
    backgroundPosition: `${position.x}% ${position.y}%`,
    width:'100%',
    height:'100%',
    zIndex:99,
  };

  return (
    <div
      className='relative hidden lg:block overflow-hidden cursor-cell  bg-white h-full '
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <Image src={imgUrl} alt="dkd" />

      {showMagnifier && (
        <div
          id="dde"
          style={{
            position:'absolute',
            width:'300px',
            height:'300px',
            border:'1px solid #A8A8A8',
            pointerEvents: 'none',
            zIndex:99,
            left:`${cursorPointer.x - 100}px`,
            top:`${cursorPointer.y - 100}px`
          }}
        >
          <div  style={dynamicStyles} />
        </div>
      )}
    </div>
  );
};

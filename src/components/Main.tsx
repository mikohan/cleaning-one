import React from 'react';
import vidBg from '../assets/bmw_v3.mp4';

export const Main = () => {
  return (
    <div className='main'>
      <video src={vidBg} autoPlay loop muted />
    </div>
  );
};

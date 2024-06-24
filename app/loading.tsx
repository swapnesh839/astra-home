'use client'
import React from 'react';
import { ClipLoader } from 'react-spinners';

interface LoadingSpinnerProps {
  color?: string; // Optional prop for color, defaults to #9333ea
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ color = '#9333ea' }) => {
  const spinnerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    minHeight: '100vh', // Ensures spinner is centered vertically on the screen
  };

  return (
    <div className='py-8 flex-col' style={spinnerStyle}>
      <ClipLoader color={color} size={150} />
      {/* <h2 className='p-2 mt-4'>Loading ...</h2> */}
    </div>
  );
};

export default LoadingSpinner;

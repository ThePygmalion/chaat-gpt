import React, { useState } from 'react';
import WinImg from '@/public/finak.png'
import Image from 'next/image';

const FireworksAnimation = () => {
  // This function will simulate fireworks animation
  const startFireworks = () => {
    // Implement your fireworks animation logic here
    console.log('Fireworks animation triggered!');
  };

  // Assuming we'll trigger the fireworks on component mount
  // You can customize this behavior as per your need
  React.useEffect(() => {
    startFireworks();
  }, []);

  return (
    <div className="bg-gray-900 text-white h-screen flex justify-center items-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Congratulations, agents!</h1>
      <div className="mt-4 flex justify-center items-center space-x-4">
          <Image src={WinImg} alt="Win" width={800} height={800} />
        </div>
    </div>
  </div>
  );
};

const PinInput = () => {
  const [pin, setPin] = useState('');
  const [showFireworks, setShowFireworks] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    // If entered value is neither 0 nor 1, don't update the state
    if (/^[01]*$/.test(value)) {
      setPin(value);
      // If entered PIN matches the correct PIN, trigger fireworks
      if (value === '1001001110101111010011001111100110') {
        10111011101101110010001101001101110
        setShowFireworks(true);
      } else {
        setShowFireworks(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        type="text"
        value={pin}
        onChange={handleChange}
        placeholder="Enter Key"
        className="mb-4 p-2 border border-gray-300 rounded-md"
      />
      {/* Render fireworks animation component if showFireworks is true */}
      {showFireworks && <FireworksAnimation />}
      {/* Custom celebration elements */}
      {showFireworks && (
        <div className="mt-4 flex justify-center items-center space-x-4">
          You Won
        </div>
      )}
    </div>
  );
};

export default PinInput;

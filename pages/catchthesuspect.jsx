import Link from 'next/link';
import React, { useState } from 'react';

const CatchTheSuspect = () => {
  const [keyInput, setKeyInput] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const handleInputChange = (event) => {
    setKeyInput(event.target.value);
    setShowWarning(false); // Hide warning when user starts typing
  };

  const handleSubmit = () => {
    if (keyInput.toLowerCase() === 'correctkey') {
      // Handle successful key submission (e.g., disable access)
      alert('Access granted. Suspect stopped.');
    } else {
      // Show warning if the key is incorrect
      setShowWarning(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md relative">
        <h1 className="text-3xl font-bold mb-4 text-center">Stop the Suspect</h1>
        <p className="text-lg text-gray-700 mb-4">
          A suspect is attempting to infiltrate the network. Your mission is to find and stop them.
        </p>
        <p className="text-lg text-gray-700 mb-4">
            In order to stop the suspect, you need to find the correct key to disable the infiltrators access.
        </p>
        <Link href={"/"} className="text-xs text-blue-700 mb-4">
            Want a hint ?????
        </Link>



        <div className="relative">
            <input
              type='text'
              placeholder='Enter Key'
              value={keyInput}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
            {showWarning && (
              <div className="absolute top-0 right-0 mt-2 mr-2 text-red-500 text-sm">
                Incorrect key. Please try again.
              </div>
            )}
        </div>
        
        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Submit
        </button>
        
      </div>
    </div>
  );
};

export default CatchTheSuspect;

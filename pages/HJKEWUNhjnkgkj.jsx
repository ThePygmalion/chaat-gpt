import Link from "next/link";
import React, { useState } from "react";

const SecretComponent = () => {
  const [password, setPassword] = useState("");
  const [isCorrectPassword, setIsCorrectPassword] = useState(false);
  const [shakeBox, setShakeBox] = useState(false); // State to control shaking animation

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the password is correct
    if (password === "3299") {
      setIsCorrectPassword(true);
    } else {
      // If the password is incorrect, tease the user via an alert and shake the box
      setShakeBox(true); // Triggering the shaking animation
      setTimeout(() => {
        setShakeBox(false); // Resetting the shaking animation after a short delay
      }, 500);
    }
  };

  return (
    <div className={`bg-black h-screen text-[#00FF00] flex justify-center items-center ${shakeBox ? 'shake-animation' : ''}`}>
      <div className="w-1/2 h-1/2 flex justify-center items-center">
        <span className="font-mono text-xl text-white border border-green-500 p-4 rounded-md">
          <div className="flex flex-col text-center">
            <span> {` Level 5  `} </span>
            <span> {` ===============================  `} </span>
            <span> {`  You Need Pin to Access  `} </span>
            <span> {` ===============================  `} </span>
          </div>

          <br />
          <div className="flex flex-col gap-3">

            <input
              type="text"
              placeholder="Enter Pin"
              value={password}
              onChange={handlePasswordChange}
              className="border border-gray-300 bg-black rounded-lg px-3 py-2 w-full"
            />
            <button
              onClick={handleSubmit}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300"
            >Enter</button>
          </div>
        </span>
      </div>

      {
        isCorrectPassword && (
          <div className="fixed top-5 left-0 w-full h-full z-0 text-center">
            Hello there! You have successfully cleared Level 5. Now, proceed to the next level.
            <Link target="_blank" href={'https://docs.google.com/document/d/1ugZ6ziw7joMj-2G-e5PQ6KtR6l1m0L7oziYCguCpF2I/edit?usp=sharing'} className="text-white"> Click Here</Link>
          </div>
        )
      }
    </div>
  );
};

export default SecretComponent;

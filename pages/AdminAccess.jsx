import React from "react";
import { useEffect } from "react";

const AdminAccess = () => {
    useEffect(() => {
        // Add something to local storage after component mounts
        localStorage.setItem('saml', 'HcbBCgIhEADQu18xf5DnvRltBJYgtHvXaQ5DGppj5d8L3d45ICeWAY2wv/8YTShDDPjsBfjFwkHoAQuAUgfjL/XjnbHuhnv6FR236/276kI215M9pgk=');
      }, []);
  useEffect(() => {
    // Log the second message after 4 seconds
    const timer1 = setTimeout(() => {
      console.log("You're just a pawn in my game.");
    }, 4000);

    // Log the third message after 8 seconds
    const timer2 = setTimeout(() => {
      console.log("Your futile attempts amuse me.");
    }, 8000);

    // Log the fourth message after 12 seconds
    const timer3 = setTimeout(() => {
      console.log("You're running out of time.");
    }, 20000);

    const timer4 = setTimeout(() => {
      console.log("Hmmm... I wonder where persistent data might be stored...");
    }, 40000);

    // Clear all timers when the component unmounts
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  console.log("Do you really think you can outsmart me?");

  return (
    <div className="bg-black h-screen text-[#00FF00] flex justify-center items-center">
      <div className="w-1/2 h-1/2 flex justify-center items-center">
        <span className="text-white font-mono text-xl border border-green-500 p-4 rounded-md">
          <div className="flex flex-col text-center">
            <span> {` ===============================  `} </span>
            <span> {`   ACCESS GRANTED TO THE LAIR...  `} </span>
            <span> {` ===============================  `} </span>
          </div>

          <br />
          <div className="flex flex-col gap-3">
            <span> {`Dear Interlopers, `}</span>
            <span>
              {" "}
              {`Congratulations on making it this far. Your efforts have been amusing, but ultimately futile.
            As you indulge in your futile attempts to thwart me, remember, every move you make only 
            strengthens my grip on this facility. But fear not, I'll allow you to bask in the illusion
            of progress a little longer. Enjoy the game, for soon it shall end, and I shall emerge 
            victorious. `}
            </span>
            <span> {` Regards, `}</span>
            <span> {` [The Infiltrator] `}</span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default AdminAccess;

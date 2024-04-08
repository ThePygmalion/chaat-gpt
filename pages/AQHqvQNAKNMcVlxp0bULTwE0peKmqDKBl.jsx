import React from "react";
import Link from "next/link";

const AQHqvQNAKNMcVlxp0bULTwE0peKmqDKBl = () => {
 
  const Hint = () =>{
    alert('You are doing great! Keep going!');
  }

  return (
    <div>
      <style jsx global>{`
        body {
          background-color: black;
          margin: 0;
          /* overflow: hidden; */
        }
      `}</style>

      <div className="h-screen text-[#00FF00] flex justify-center items-center relative">
        <div className="w-1/2 h-1/2 flex justify-center items-center">
          <span className="text-white font-mono text-xl border border-green-500 p-4 rounded-md">
            <div className="flex flex-col text-center">
              <span> {` Level 3 `} </span>
              <span> {` ===============================  `} </span>
              <span> {`  So You have reached upto here `} </span>
              <span> {` ===============================  `} </span>
            </div>

            <br />
            <div className="flex flex-col gap-3">
              <span> {`Dear Interlopers, `}</span>
              <span>
                {" "}
                {`Congratulations on making it this far. I was not expecting you to come this far. You are smarter than I thought. Listen closely to the whispers of the pixels...`}
              </span>
              <span>
                {`x**2−6*x+9=0`}
              </span>
              <span> {` Regards, `}</span>
              <span> {` [The Infiltrator] `}</span>
            </div>
          </span>
        </div>

        <div className="absolute left-[340rem] text-white">
          <Link
            href={
              "https://drive.google.com/drive/folders/1iSvt6FSglJvDiVji3CMh76uu5Wiu3LU4?usp=sharing"
            }
            target="_blank"
          >
            Keep Scrolling
          </Link>
        </div>

        <div className="absolute  left-[680rem] text-white" onClick={Hint}>Keep Scrolling</div>

        <div className="absolute left-[900rem] text-white">
          <p>🕵️‍♀️ Nothing Here... 🕵️‍♂️</p>
          <p>Or is there? 🤔</p>
        </div>
      </div>
    </div>
  );
};

export default AQHqvQNAKNMcVlxp0bULTwE0peKmqDKBl;

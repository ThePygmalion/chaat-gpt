import React, { useEffect } from "react";

const CrypticHunt = () => {
  useEffect(() => {
    const popUpTimer = setTimeout(() => {
      alert("Congratulations, you just cleared Level 1! Looks easy? It's not actually.");
      alert("Try something better.");
      alert("You're doing great! Keep going!");
      alert("Almost there! Don't give up!");
      alert("Success is just around the corner!");
    }, 3000);

    const consoleTimer1 = setTimeout(() => {
      console.log("Common, it's not that easy!😉");
      console.log("Just wait and watch!");
    }, 5000);

    const consoleTimer2 = setTimeout(() => {
      console.log("Go, look somewhere else!");
      console.log("Every moment invested brings you closer to your goals.");
    }, 10000);

    const redirectTimer = setTimeout(() => {
      console.log("Go to: /AQHqvQNAKNMcVlxp0bULTwE0peKmqDKBl");
    }, 40000);

    // Clean up timeouts to prevent memory leaks
    return () => {
      clearTimeout(popUpTimer);
      clearTimeout(consoleTimer1);
      clearTimeout(consoleTimer2);
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <img
        src="https://digitaldaze.io/wp-content/uploads/2023/06/Cicada_3301.webp"
        alt="err"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default CrypticHunt;

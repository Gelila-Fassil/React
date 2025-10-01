// import { useState } from "react"

// export const Example = () => {
//     const [number , setNumber] = useState(0)
//     const handleClick = () =>{
//          setNumber(prevNum => prevNum+1)
//     }
//     const RestClick = () => setNumber(0) 
//     const [color , setColor] = useState("")
   
//   return (
//     <>
//     <button onClick={handleClick}>Click Me</button>
//     <p>You have clicked {number} of times</p>
//     <button onClick={RestClick}>Reset</button>

//     {/* Toggle Background Color */}

//     <div>
//        <button {onclick() = > }>Blue</button>
//        <button>Red</button>
//     </div>

//     </>
//   )
// }




import React, { useState } from "react";

export default function ToggleBackground() {
  // State to track whether the div is blue or white
  const [isBlue, setIsBlue] = useState(false);

  // Toggle the background color by flipping the boolean
  const toggleColor = () => {
    setIsBlue(prev => !prev); // if true -> false, if false -> true
  };

  return (
    <div
      style={{
        height: "200px",
        width: "300px",
        margin: "20px auto",
        textAlign: "center",
        lineHeight: "200px",
        borderRadius: "12px",
        backgroundColor: isBlue ? "blue" : "white", // conditional rendering
        color: isBlue ? "white" : "black", // text color adjusts for readability
        border: "2px solid black"
      }}
    >
      <button
        onClick={toggleColor}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Toggle Background
      </button>
    </div>
  );
}












// "use client";

// import React, { useEffect, useState } from "react";

// export default function LoginPage() {
//   const [isCtrlPressed, setIsCtrlPressed] = useState(false);
//   const [buttonPosition, setButtonPosition] = useState({ top: "50%", left: "50%" });

//   // Detect Ctrl press
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.ctrlKey) setIsCtrlPressed(true);
//     };

//     const handleKeyUp = (e) => {
//       if (!e.ctrlKey) setIsCtrlPressed(false);
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   // Move button randomly
//   const moveButton = () => {
//     if (!isCtrlPressed) {
//       const randomTop = Math.floor(Math.random() * 80) + 10; // 10% to 90%
//       const randomLeft = Math.floor(Math.random() * 80) + 10;
//       setButtonPosition({
//         top: `${randomTop}%`,
//         left: `${randomLeft}%`
//       });
//     }
//   };

//   const handleLogin = (e) => {
//     if (!isCtrlPressed) {
//       e.preventDefault();
//       alert("Press CTRL + Click to login! 🤓");
//     } else {
//       alert("Login Successful 🚀");
//       // Here you can redirect or do real login logic
//     }
//   };

//   return (
//     <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100 relative overflow-hidden">
//       <h1 className="text-3xl font-bold mb-8">Login Page</h1>
//       <form className="flex flex-col gap-4 items-center">
//         <input type="text" placeholder="Username" className="border p-2 rounded-md" />
//         <input type="password" placeholder="Password" className="border p-2 rounded-md" />
//       </form>

//       {/* Moving Button */}
//       <button
//         style={{
//           position: "absolute",
//           top: buttonPosition.top,
//           left: buttonPosition.left,
//           transform: "translate(-50%, -50%)",
//           transition: "all 0.2s ease"
//         }}
//         onMouseEnter={moveButton}
//         onClick={handleLogin}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md"
//       >
//         Login
//       </button>
//     </div>
//   );
// }




// "use client";

// import React, { useEffect, useState } from "react";

// export default function LoginPage() {
//   const [isShiftPressed, setIsShiftPressed] = useState(false);
//   const [buttonPosition, setButtonPosition] = useState({ top: "50%", left: "50%" });
//   const [popupMessage, setPopupMessage] = useState("");

//   const funnyMessages = [
//     "You think it's that easy? Try harder! 😆",
//     "Nope! Use your other hand... maybe. 🖐️",
//     "Access denied! Keyboard says no. ⛔",
//     "Nice try, hacker! 💻🕵️‍♂️",
//     "Shift happens. 😜"
//   ];

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.shiftKey) setIsShiftPressed(true);
//     };

//     const handleKeyUp = (e) => {
//       if (!e.shiftKey) setIsShiftPressed(false);
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   const moveButton = () => {
//     if (!isShiftPressed) {
//       const randomTop = Math.floor(Math.random() * 80) + 10;
//       const randomLeft = Math.floor(Math.random() * 80) + 10;
//       setButtonPosition({
//         top: `${randomTop}%`,
//         left: `${randomLeft}%`
//       });

//       const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
//       setPopupMessage(randomMessage);
//     } else {
//       setPopupMessage(""); // hide message when shift is pressed
//     }
//   };

//   return (
//     <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100 relative overflow-hidden">
//     {/* Popup Message on Hover */}
//     {popupMessage && !isShiftPressed && (
//         <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-3 rounded-lg shadow-lg border border-gray-300 z-50">
//           {popupMessage}
//         </div>
//       )}
//       <h1 className="text-3xl font-bold mb-8">Login Page</h1>
//       <div className="flex flex-col gap-4 items-center">
//         <input type="text" placeholder="Username" className="border p-2 rounded-md" />
//         <input type="password" placeholder="Password" className="border p-2 rounded-md" />
//       </div>

//       {/* Moving Button */}
//       <button
//         type="button"
//         style={{
//           position: "absolute",
//           top: buttonPosition.top,
//           left: buttonPosition.left,
//           transform: "translate(-50%, -50%)",
//           transition: "all 0.2s ease"
//         }}
//         onMouseEnter={moveButton}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md"
//       >
//         Login
//       </button>

  
//     </div>
//   );
// }



"use client";

import React, { useEffect, useState } from "react";

export default function LoginPage() {
  const [isShiftPressed, setIsShiftPressed] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: "80%", left: "50%" });
  const [popupImage, setPopupImage] = useState("");

  const funnyImages = [
    "https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif",
    "https://media.giphy.com/media/l0Exk8EUzSLsrErEQ/giphy.gif",
    "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
    "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif",
    "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif"
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.shiftKey) setIsShiftPressed(true);
    };

    const handleKeyUp = (e) => {
      if (!e.shiftKey) setIsShiftPressed(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const moveButton = () => {
    if (!isShiftPressed) {
      const randomTop = Math.floor(Math.random() * 60) + 30;
      const randomLeft = Math.floor(Math.random() * 60) + 20;
      setButtonPosition({
        top: `${randomTop}%`,
        left: `${randomLeft}%`
      });

      const randomImg = funnyImages[Math.floor(Math.random() * funnyImages.length)];
      setPopupImage(randomImg);
    } else {
      setPopupImage("");
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 relative overflow-hidden flex items-center justify-center px-4">
      {/* Funny Image Popup */}
      {popupImage && !isShiftPressed && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-xl shadow-xl z-50 border border-gray-300">
          <img src={popupImage} alt="funny" className="w-40 h-40 object-contain rounded-md" />
        </div>
      )}

      <div className="bg-white/70 backdrop-blur-lg border border-gray-200 p-8 rounded-2xl shadow-2xl max-w-md w-full flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Login </h1>

        <div className="w-full flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/90"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/90"
          />
        </div>

        {/* Moving Button */}
        <button
          type="button"
          onMouseEnter={moveButton}
          style={{
            position: "absolute",
            top: buttonPosition.top,
            left: buttonPosition.left,
            transform: "translate(-50%, -50%)",
            transition: "all 0.25s ease-in-out"
          }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          Login
        </button>
      </div>
    </div>
  );
}

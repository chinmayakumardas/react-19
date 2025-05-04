

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

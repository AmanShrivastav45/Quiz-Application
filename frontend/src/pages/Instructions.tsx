import React from "react";
import "../fonts/stylesheet.css";

function Instructions() {
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center px-16 py-4">
        <div className="h-full w-[75%] overflow-hidden bg-green-200">
          <div className="w-full overflow-hidden pl-2  text-right flex flex-col justify-center items-start">
            <h1 className="Apercu-Bold text-2xl">
              Paper 1: Online Assesment Test
            </h1>
            <h3 className="mt-4 text-xl Apercu-light">General Instructions</h3>
          </div>
          <div className="h-[70%] mt-4 border-black border w-full mb-4 pb-2 px-4 rounded Apercu-Regular text-xl list-disc">
            <ul className="list-disc">
              <li>Register on the competition website.</li>
              <li>Log in using provided credentials.</li>
              <li>Update profile information.</li>
              <li>Read and understand competition rules.</li>
              <li>Check technical requirements and practice tests.</li>
              <li>Manage time effectively during the competition.</li>
              <li>Adhere to security measures, avoid cheating.</li>
              <li>Monitor communication channels for updates.</li>
              <li>Stay focused on your progress, not just the leaderboard.</li>
              <li>Provide feedback after the competition.</li>
              <li>Reflect on performance for self-improvement.</li>
              <li>Check for certificates or prizes for top performers.</li>
              <li>Ensure privacy and data security.</li>
              <li>Enjoy the learning experience.</li>
            </ul>
          </div>
          <input type="checkbox" />I have read the instructions
          <div className="h-15 w-full  flex justify-center items-center">
            <button className="h-12 w-[220px] Apercu-Medium overflow-hidden border-solid border transition duration-200 ease-in-out border-[#1e1b4b] text-white bg-[#1e1b4b] hover:bg-[#172554] focus:bg-[#172554] rounded text-base px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none">
              Start Test
            </button>
          </div>
        </div>
        <div className="h-full w-[25%] ml-4 overflow-hidden bg-green-400"></div>
      </div>
    </div>
  );
}

export default Instructions;

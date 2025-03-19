// import { useEffect, useState } from "react";

function Timer({ active, time, startTime, setStartTime }) {
  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };
  return (
    // crear campos para los vertidos e indicadores de tiempo para cada vertido
    <div className="text-center">
      {active ? (
        <>
          <span className="block text-5xl mb-7 text-gray-900">
            {formatTime(time)}
          </span>
          <button
            className={`${startTime ? "group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-pink-200 dark:focus:ring-pink-800" : "group bg-gradient-to-br from-green-500 to-blue-400 group-hover:from-pink-500 group-hover:to-green-400 hover:text-white focus:ring-green-200 dark:focus:ring-green-800"} relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg  dark:text-white focus:ring-4 focus:outline-none`}
          >
            <span
              className={`text-xl font-extrabold ${startTime ? "text-red-500" : "text-green-500"} relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-white cursor-pointer`}
              onClick={() => setStartTime(!startTime)}
            >
              {startTime ? "Stop" : "Start"}
            </span>
          </button>
          {!startTime && time !== 0 ? (
            <span className="block font-bold">
              Brew time: {formatTime(time)}
            </span>
          ) : (
            ""
          )}
        </>
      ) : (
        <>
          <span className="block text-5xl mb-7 text-gray-400">00:00</span>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-200 to-blue-200 dark:text-white">
            <span className="text-xl font-extrabold text-green-300 relative px-5 py-2.5 transition-all bg-white dark:bg-gray-900 rounded-md">
              Start
            </span>
          </button>
        </>
      )}
    </div>
  );
}

export default Timer;

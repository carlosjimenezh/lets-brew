import { useEffect, useState, useRef } from "react";
import "./App.css";
import Timer from "./components/Timer";
import CoffeeMethodSelector from "./components/CoffeeMethodSelector";
import { methods } from "./data/methods";
import BrewInfo from "./components/BrewInfo";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);
  const [selectMethod, setSelectMethod] = useState("");

  const selectMethodInfo =
    selectMethod && methods.find((method) => method.id === selectMethod);
  const { name, brewInfo } = selectMethodInfo;

  useEffect(() => {

    if (isRunning) {

      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current)
      }, 10)

      return () => {
        clearInterval(intervalIdRef.current)
      }

    }

  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setElapsedTime(0);
  }
  return (
    <div className="container max-w-2xl mx-auto p-4 mt-10">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Lets Brew
      </h1>
      <h2 className="relative mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
        {selectMethod ? name : "Select filter"}
        {brewInfo && (
          <span
            className="text-xl absolute left-0 top-12 cursor-pointer text-gray-500"
            onClick={() => setSelectMethod("")}
          >
            Back
          </span>
        )}
      </h2>
      <div className="grid grid-cols-2 gap-4 my-20 relative">
        {!brewInfo ? (
          <CoffeeMethodSelector methods={methods} setSelectMethod={setSelectMethod} />
        ) : (
          <BrewInfo
            isRunning={isRunning}
            brewInfo={brewInfo}
            elapsedTime={elapsedTime}
          />
        )}
        <Timer
          start={start}
          stop={stop}
          reset={reset}
          active={brewInfo}
          elapsedTime={elapsedTime}
          setIsRunning={setIsRunning}
          isRunning={isRunning}
        />
      </div>
    </div>
  );
}

export default App;

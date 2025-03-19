import { useEffect, useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import CoffeeMethodSelector from "./components/CoffeeMethodSelector";
import { methods } from "./data/methods";

function App() {
  const [selectMethod, setSelectMethod] = useState("");
  const selectMethodInfo =
    selectMethod && methods.find((method) => method.id === selectMethod);
  const { name, brewInfo } = selectMethodInfo;

  const [startTime, setStartTime] = useState(false);
  const [time, setTime] = useState(0);
  const getTime = () => {
    setTime(time => time + 1)
  }
  useEffect(() => {
    if (startTime) {
      const interval = setInterval(() => {getTime()}, 1000)
      // console.log(time)
      return () => clearInterval(interval)
    } //else {console.log(time)}
  }, [startTime, time])
  useEffect(() => {
    if (!brewInfo) {
      setTime(0)
      setStartTime(false)
    }
  }, [brewInfo])
  return (
    <div className="container max-w-2xl mx-auto p-4 mt-10">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Lets Brew
      </h1>
      <h2 className="relative mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
        {selectMethod ? name : "Select filter"}
        {brewInfo && <span className="text-xl absolute left-0 top-12 cursor-pointer text-gray-500" onClick={() => setSelectMethod('')}>Back</span>}
      </h2>
      <div className="grid grid-cols-2 gap-4 my-20 relative">
        <CoffeeMethodSelector
          startTime={startTime}
          time={time}
          brewInfo={brewInfo}
          setSelectMethod={setSelectMethod}
        />
        <Timer active={brewInfo} time={time} setStartTime={setStartTime} startTime={startTime} />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import CoffeeMethodSelector from "./components/CoffeeMethodSelector";
import { methods } from "./data/methods";

function App() {
  const [selectMethod, setSelectMethod] = useState("");
  const selectMethodInfo =
    selectMethod && methods.find((method) => method.id === selectMethod);
  const { name, brewInfo } = selectMethodInfo;

  return (
    <div className="md:container mx-auto p-4 mt-10">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Lets Brew
      </h1>
      <h2 className="relative mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
        {selectMethod ? name : "Select filter"}
        {brewInfo && <span className="absolute right-0 underline underline-offset-3 decoration-8 decoration-blue-400 cursor-pointer" onClick={() => setSelectMethod('')}>Atras</span>}
      </h2>
      <div className="grid grid-cols-2 gap-4 my-20 relative">
        <CoffeeMethodSelector
          brewInfo={brewInfo}
          setSelectMethod={setSelectMethod}
        />
        <Timer active={selectMethod} />
      </div>
    </div>
  );
}

export default App;


function BrewInfo( {brewInfo, elapsedTime }) {
  const { pouringIntervals } = brewInfo;

  return (
    <div className="relative">
      <Overview brewInfo={brewInfo} />
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th colSpan="3" className="text-center">Pour</th>
          </tr>
          <tr>
            <th className="text-center">Time</th>
            <th className="text-center">Water</th>
            <th className="text-center">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {pouringIntervals.map(({ weight }, index) => (
            <tr key={index}>
              <th className="text-center font-medium">{elapsedTime}</th>
              <th className="text-center font-medium">{weight}</th>
              <th className="text-center font-medium">
                <span className="animate-pulse">
                  🌀
                </span>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Overview({ brewInfo }) {
  const { temperature, grinder, grind, coffee, water, extractionTime } = brewInfo;
  return (
    <details>
      <summary className="relative cursor-pointer font-bold text-gray-900 list-none">
        Recipe overview
        <svg className="absolute top-1 rotate-[90deg] right-4 fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
      </summary>
      <div className="my-2">
        <div className="py-2">
          <h3 className=" font-bold">Coffee:</h3>
          <div className="flex gap-4 flex-wrap">
            <span className="px-2 border border-gray-200 rounded-lg shadow-sm">
              ⚖️ {coffee}
            </span>
            <span className="px-2 border border-gray-200 rounded-lg shadow-sm">
              🫘 {grind}
            </span>
            <span className="px-2 border border-gray-200 rounded-lg shadow-sm">
              ⚙️ {grinder}
            </span>
          </div>
        </div>
        <h3 className=" font-bold">Water:</h3>
        <div className="py-2">
          <div className="flex gap-4">
            <span className="px-2 border border-gray-200 rounded-lg shadow-sm">
              🌡 {temperature}
            </span>
            <span className="px-2 border border-gray-200 rounded-lg shadow-sm">
              💧 {water}
            </span>
          </div>
        </div>
        <h3 className=" font-bold">Brew elapsedTime:</h3>
        <div className="py-2">
          <div className="flex gap-4">
            <span className="px-2 border border-gray-200 rounded-lg shadow-sm">
              ⏱ {extractionTime}
            </span>
          </div>
        </div>
      </div>
    </details>
  );
}

export default BrewInfo;

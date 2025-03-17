function BrewInfo({ brewInfo }) {
  const { pouringIntervals } = brewInfo;
  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0') 
    const secs = String(seconds % 60).padStart(2, '0') 
    return `${mins}:${secs}`
  }
  return (
    <div className="relative">
      <Overview brewInfo={brewInfo} />
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-center">Time</th>
            <th className="text-center">weight</th>
            <th className="text-center">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {pouringIntervals.map(({ time, weight }, index) => (
            <tr key={index}>
              <th className="text-center">{formatTime(time)}</th>
              <th className="text-center">{weight}</th>
              <th className="text-center"></th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Overview({ brewInfo }) {
  const { temperature, grind, coffee, water, extractionTime } = brewInfo;
  return (
    <details>
      <summary className="mb-4">Recipe overview</summary>
      <div className="my-2">
        <div className="py-2">
          <h3>Coffee:</h3>
          <div className="flex gap-4">
            <span className="px-2 border border-gray-200 rounded-lg shadow-sm">
              {coffee}
            </span>
            <span className="px-2 border border-gray-200 rounded-lg shadow-sm">
              {grind}
            </span>
          </div>
        </div>
        <h3>Water:</h3>
        <div className="py-2">
          <div className="flex gap-4">
            <span className="px-2 border border-gray-200 rounded-lg shadow-sm">
              {temperature}
            </span>
            <span className="px-2 border border-gray-200 rounded-lg shadow-sm">
              {water}
            </span>
          </div>
        </div>
        <h3>Brew time:</h3>
        <div className="py-2">
          <div className="flex gap-4">
            <span className="px-2 border border-gray-200 rounded-lg shadow-sm">
              {extractionTime}
            </span>
          </div>
        </div>
      </div>
    </details>
  );
}

export default BrewInfo;

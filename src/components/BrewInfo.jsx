function BrewInfo({ brewInfo}) {
  const { grind, ratio, extractionTime, temperature } = brewInfo;
  const {lightRoast, mediumRoast, darkRoast} = temperature
  return (
    <div className="relative">
      <ul>
        <li key={brewInfo.temperature}>
          Water temperature:
            <span className="block ml-2">{lightRoast}</span>
            <span className="block ml-2">{mediumRoast}</span>
            <span className="block ml-2">{darkRoast}</span>
        </li>
        <li key={brewInfo.grind}>Grind size: {grind}</li>
        <li key={brewInfo.ratio}>Brew ratio: {ratio}</li>
        <li key={brewInfo.extractionTime}>End time: {extractionTime}</li>
      </ul>
    </div>
  );
}

export default BrewInfo;

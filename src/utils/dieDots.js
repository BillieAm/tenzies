export default function dieDots(value) {
  let dotsLocationArr;
  switch (value) {
    case 1:
      dotsLocationArr = ["five"];
      break;
    case 2:
      dotsLocationArr = ["one", "nine"];
      break;
    case 3:
      dotsLocationArr = ["one", "five", "nine"];
      break;
    case 4:
      dotsLocationArr = ["one", "three", "seven", "nine"];
      break;
    case 5:
      dotsLocationArr = ["one", "three", "five", "seven", "nine"];
      break;
    default:
      dotsLocationArr = ["one", "three", "four", "six", "seven", "nine"];
      break;
  }

  return dotsLocationArr;

  /*   const dotElements = dotsLocationArr.map((dotLocation, index) => (
    <div key={index} className={`dot ${dotLocation}`}></div>
  ));

  return <div className="dots-container">{dotElements}</div>; */
}

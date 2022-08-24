import { useEffect, useState } from "react";
import CounterStyled from "./CounterStyled";
import limitDate from "../../../src/data/limitDate";
interface counter {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Counter = (): JSX.Element => {
  const initialState: counter = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const [timeLeft, setTimeLeft] = useState(initialState);

  const calculateTimeLeft = () => {
    const difference = +new Date(limitDate) - +new Date();

    const timeCalculated: counter = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };

    setTimeLeft(timeCalculated);
  };

  useEffect(() => {
    setTimeout(() => {
      calculateTimeLeft();
    }, 1000);
  });

  return (
    <CounterStyled>
      <li>
        <span className="counter__number">{timeLeft.days}</span>
        <span className="counter__name">days</span>
      </li>
      <li>
        <span className="counter__number">{timeLeft.hours}</span>
        <span className="counter__name">hours</span>
      </li>
      <li>
        <span className="counter__number">{timeLeft.minutes}</span>
        <span className="counter__name">minutes</span>
      </li>
      <li>
        <span className="counter__number">{timeLeft.seconds}</span>
        <span className="counter__name">seconds</span>
      </li>
    </CounterStyled>
  );
};

export default Counter;

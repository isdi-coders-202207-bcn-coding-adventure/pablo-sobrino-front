const Counter = (): JSX.Element => {
  return (
    <div className="counter-container">
      <ul>
        <li>
          <span className="counter__number">02</span>days
        </li>
        <li>
          <span className="counter__number">20</span>Hours
        </li>
        <li>
          <span className="counter__number">34</span>Minutes
        </li>
        <li>
          <span className="counter__number">09</span>Seconds
        </li>
      </ul>
    </div>
  );
};

export default Counter;

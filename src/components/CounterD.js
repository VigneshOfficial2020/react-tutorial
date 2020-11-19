import React, { useContext } from "react";
import { CounterContext } from "../App";

function CounterD() {
  const CounterContextCommon = useContext(CounterContext);

  return (
    <div>
      CounterD - {CounterContextCommon.counterState}
      <button onClick={() => CounterContextCommon.counterDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => CounterContextCommon.counterDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => CounterContextCommon.counterDispatch("reset")}>
        Reset
      </button>
    </div>
  );
}

export default CounterD;

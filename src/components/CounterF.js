import React, { useContext } from "react";
import { CounterContext } from "../App";

function CounterF() {
  const CounterContextCommon = useContext(CounterContext);

  return (
    <div>
      CounterF - {CounterContextCommon.counterState}
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

export default CounterF;

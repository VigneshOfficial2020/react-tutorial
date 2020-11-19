import React, { useContext } from 'react'
import {CounterContext} from '../App'

function CounterA() {

    const CounterContextCommon = useContext(CounterContext);

    return (
      <div>
        CounterA - {CounterContextCommon.counterState}
        <button
          onClick={() => CounterContextCommon.counterDispatch("increment")}
        >
          Increment
        </button>
        <button
          onClick={() => CounterContextCommon.counterDispatch("decrement")}
        >
          Decrement
        </button>
        <button onClick={() => CounterContextCommon.counterDispatch("reset")}>
          Reset
        </button>
      </div>
    );
}

export default CounterA

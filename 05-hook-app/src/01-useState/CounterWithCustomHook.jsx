import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter(0);

  return (
    <>
    
        <h2>Counet With Hook: {counter}</h2>
        <button className='btn btn-primary' onClick={increment}>+1</button>
        <button className='btn btn-primary' onClick={reset}>Reset</button>
        <button className='btn btn-primary' onClick={decrement}>-1</button>
    </>
  )
}



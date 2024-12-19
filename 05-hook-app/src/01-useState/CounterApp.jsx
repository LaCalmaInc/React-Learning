import React from 'react'
import { useState } from 'react'

export const CounterApp = () => {

    const [{counter1,counter2,counter3}, setcounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
    });

    const handleAdd = () =>{
        setcounter((previo) => ({...previo, counter1:counter1+1}));
    }
    const handleSubstract = () =>{
        setcounter(counter1 -1);
    }
  return (
    <>
        <h2>CounterApp</h2>
        <h5>Count: {counter1}</h5>
        <h5>Count: {counter2}</h5>
        <h5>Count: {counter3}</h5>
        <button className='btn btn-primary' onClick={handleAdd}>+1</button>
        <button className='btn btn-primary' onClick={handleSubstract}>-1</button>
    </>
  )
}



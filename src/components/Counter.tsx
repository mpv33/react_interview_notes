import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { increment, decrement, incrementByAmount } from '../store/features/counter/counterSlice';

export function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div className='w-full flex justify-center'>
      <div className='w-[20%] bg-gray-100 p-8 m-8 shadow-xl'>
        <h1 className='text-2xl text-bold mb-4'>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())} className='px-2 py-1 bg-blue-300 border rounded-sm mr-2'>+</button>
        <button onClick={() => dispatch(decrement())} className='px-2 py-1 bg-blue-300 border rounded-sm mr-2'>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))} className='px-2 py-1 bg-blue-300 border rounded-sm'>+5</button>
      </div>

    </div>
  );
}

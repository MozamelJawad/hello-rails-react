import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetingSlice';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div className='greeting_div'>
      <h2>Random Greeting:</h2>
      <p className='greeting'>{greeting}</p>
    </div>
  );
};

export default Greeting;

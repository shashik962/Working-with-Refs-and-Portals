import React from 'react';
 
export default function Workout({ title, description, time, onComplete }) {
  const timer = React.useRef();
 
  function handleStartWorkout() {
    timer.current = setTimeout(handleStopWorkout, time);
  }
 
  function handleStopWorkout() {
    clearTimeout(timer.current);
    onComplete();
  }
 
  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}
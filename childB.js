import { memo } from 'react';

const ChildB = ({ count, increment }) => {
  console.log("Child B rendered");
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default memo(ChildB);

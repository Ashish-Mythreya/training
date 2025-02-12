import { useState } from "react";
import ChildA from "./childA";
import ChildB from "./childB";

const Parent = () => {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(c => c + 1);
  };

  return (
    <div>
      <ChildA />
      <ChildB count={count} increment={increment} />
    </div>
  );
};

export default Parent;

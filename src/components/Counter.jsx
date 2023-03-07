import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Current count: {count}</p>
      <button
        type="button"
        className="rounded bg-green-500 px-2 py-4 text-white"
        onClick={() => {
          // avoid directly accessing the state variable inside dispatch function
          // use a callback instead
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Update Count
      </button>
    </>
  );
}

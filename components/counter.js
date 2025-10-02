"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="my-4">
      <h2>Counter: {count}</h2>
      <button
        className="bg-green-500 text-white px-3 py-1 mr-2"
        onClick={() => setCount(count + 1)} // Increase the count by 1
      >
        Increase
      </button>
      <button
        className="bg-red-500 text-white px-3 py-1"
        onClick={() => setCount(count - 1)} // Decrease the count by 1
      >
        Decrease
      </button>
    </div>
  );
}

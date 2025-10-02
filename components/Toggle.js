"use client";
import { useState } from "react";

export default function Toggle() {
  const [show, setShow] = useState(false);

  return (
    <div className="my-4">
      <button
        className="bg-purple-500 text-white px-4 py-2"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide Message" : "Show Message"}
      </button>
      {show && <p className="mt-2">It works!!!!</p>}
    </div>
  );
}

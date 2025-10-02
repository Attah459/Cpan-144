"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar"

export default function Contact() {
  const [name, setName] = useState("");

  return (
    <div className="p-6">
      <Navbar />
      <h1>Contact Page</h1>
      <form
        onSubmit={(e) => {
         // e.preventDefault();
          alert(`Thanks, ${name}!`);
        }}
      >
        <input // Input field for name
          className="border p-2 mr-2"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>

      {name ? <p>Hi {name}, nice to meet you!</p> : <p>Please enter your name</p>}
    </div>
  );
}

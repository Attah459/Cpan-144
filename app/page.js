import Counter from "../components/counter";
import Toggle from "../components/Toggle.js";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="p-6">
      <Navbar />
      <h1>Welcome to My Front-End Assignment!</h1>
      <p>This is my first major home page</p>
      <hr />
      <Counter />
      <Toggle />
    </div>
  );
}

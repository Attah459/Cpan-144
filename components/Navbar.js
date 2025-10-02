import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mb-4">
      <Link className="mr-4 text-blue-600" href="/">Home</Link> {/* Home link */}
      <Link className="mr-4 text-blue-600" href="/about">About</Link> {/* About link */}
      <Link className="text-blue-600" href="/contact">Contact</Link> {/* Contact link */}
    </nav>
  );
}

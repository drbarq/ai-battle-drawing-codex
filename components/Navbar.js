import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/add">Add Plant</Link>
    </>
  );
}

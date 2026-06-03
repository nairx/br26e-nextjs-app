import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div>My Application</div>
      <div>
        <li className="inline-block m-1">
          <Link href="/">Home</Link>
        </li>
        <li className="inline-block m-1">
          <Link href="/about">About</Link>
        </li>
        <li className="inline-block m-1">
          <Link href="/services">Services</Link>
        </li>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-10 bg-emerald-300 text-black p-3">
      <h1>Home</h1>
      <Link className="hover:underline" href="/user">
        Users
      </Link>
      <div>
        <Link className="hover:underline" href="/about">
          Login
        </Link>
      </div>
    </div>
  );
}

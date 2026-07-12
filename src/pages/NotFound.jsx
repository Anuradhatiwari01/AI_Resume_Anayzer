import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="text-zinc-400">
        Page not found
      </p>

      <Link
        to="/"
        className="rounded-lg bg-violet-600 px-5 py-3 hover:bg-violet-500 transition"
      >
        Back Home
      </Link>
    </main>
  );
}
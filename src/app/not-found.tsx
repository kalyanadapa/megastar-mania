import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-black bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          This movie isn&apos;t in the Megastar collection... yet.
        </p>
        <Link
          href="/"
          className="px-6 py-2.5 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}

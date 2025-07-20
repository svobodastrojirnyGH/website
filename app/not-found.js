import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-5xl font-bold text-blue-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">Stránka nebyla nalezena.</p>
        <Link href="/" className="text-blue-600 underline hover:text-blue-800">
          Zpět na úvodní stránku
        </Link>
      </div>
    </div>
  );
}
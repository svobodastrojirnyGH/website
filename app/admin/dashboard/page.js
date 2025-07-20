import { signOut } from '@/auth'
import React from 'react'
import Link from 'next/link'

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigační lišta */}
      <nav className="w-full border-b bg-white shadow-sm flex justify-between items-center px-8 py-4 sticky top-0 z-50">
        {/* Logo nebo název */}
        <h1 className="text-2xl font-bold text-blue-700">Administrace</h1>

        {/* Pravá část */}
        <div className="flex items-center space-x-6">
          <Link
            href="/admin/studio"
            className="text-lg font-medium text-blue-600 hover:text-blue-800 transition"
          >
            Studio
          </Link>

          <form
            action={async () => {
              'use server'
              await signOut({ redirectTo: '/' })
            }}
          >
            <button
              type="submit"
              className="text-red-600 font-semibold hover:text-red-800 transition"
            >
              Odhlásit se
            </button>
          </form>
        </div>
      </nav>

      {/* Hlavní obsah */}
      <main className="flex-grow px-8 py-12 max-w-7xl mx-auto">
        {/* Přivítání */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Vítejte, administrátore 👋
          </h2>
          <p className="text-gray-600 max-w-xl">
            Zde můžete spravovat své studio, sledovat statistiky a upravovat nastavení.
          </p>
        </section>

        {/* Rychlé odkazy */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          <Link
            href="/studio"
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-200 flex flex-col items-center justify-center text-center"
          >
            <div className="text-blue-600 mb-2">
              {/* Ikona - můžeš vyměnit */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Studio</h3>
            <p className="text-gray-600 mt-1">Správa obsahu a projektů</p>
          </Link>

          {/* Další karty */}
          <div className="p-6 bg-white rounded-lg shadow border border-gray-200 flex flex-col items-center justify-center text-center cursor-not-allowed opacity-50">
            <div className="text-gray-400 mb-2">
              {/* Ikona placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Připravujeme</h3>
            <p className="text-gray-600 mt-1">Další funkce brzy přibudou</p>
          </div>
        </section>

        {/* Nedávná aktivita */}
        <section>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Nedávná aktivita</h3>
          <p className="text-gray-600 italic">Žádná nedávná aktivita k zobrazení.</p>
        </section>
      </main>
    </div>
  )
}

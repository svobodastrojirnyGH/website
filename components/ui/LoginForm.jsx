'use client'

import React, { useActionState } from 'react'
import { useSearchParams } from 'next/navigation';
import { authenticate } from '@/app/lib/actions';

function LoginForm() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/admin/dashboard';

    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined)

    return (
        <form action={formAction} className="max-w-sm mx-auto mt-20">
            <h1 className="text-xl mb-4 font-semibold">Přihlášení Administrátora</h1>

            <label htmlFor="username" className="block mb-1">
                Přihlašovací jméno
            </label>
            <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full p-2 border mb-4"
            />

            <label htmlFor="password" className="block mb-1">
                Heslo
            </label>
            <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full p-2 border mb-4"
            />

            <input type="hidden" name="redirectTo" value={callbackUrl} />

            <button
                type="submit"
                className="w-full bg-black text-white py-2"
                disabled={isPending}
            >
                Log In
            </button>

            {errorMessage && (
                <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
            )}
        </form>
    )
}

export default LoginForm
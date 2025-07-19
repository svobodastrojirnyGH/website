import { signOut } from '@/auth'
import React from 'react'

function page() {
  return (
    <div>
        <div className="w-screen border-b-2 flex text-2xl text-red">
            <form
                action={async () => {
                    'use server'
                    await signOut({ redirectTo: '/' })
                }}
            >
                <button className="p-8 text-2xl">
                    SignOut
                </button>
            </form>
        </div>
        
        ADMIN DASHBOARD</div>
  )
}

export default page
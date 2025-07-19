import LoginForm from '@/components/ui/LoginForm'
import React, { Suspense } from 'react'

function page() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
        <Suspense>
            <LoginForm />
        </Suspense>
    </div>
  )
}

export default page
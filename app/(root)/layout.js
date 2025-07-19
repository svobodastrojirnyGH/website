import Navbar from '@/components/ui/Navbar'
import React from 'react'

function layout({ children }) {
  return (
    <>
        {/* <Navbar /> */}
        <Navbar />
        <main>
            {children}
        </main>
    </>
  )
}

export default layout
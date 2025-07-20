import Footer from '@/components/ui/Footer'
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
                <Footer />
    </>
  )
}

export default layout
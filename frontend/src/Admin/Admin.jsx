import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Adminmain from '../components/Adminmain'

function Admin() {
    return (
        <>
            {/* <Navbar /> */}
            {/* <div className="text-center underline mt-10">
                <h1 className="text-2xl md:text-4xl font-bold text-white dark:text-gray-100">
                    Welcome <span className='text-pink-500'>Admin </span>
                </h1>
            </div> */}
            <div className="flex min-h-screen justify-center items-center">
                <Adminmain />
            </div>
            <Footer />
        </>
    )
}

export default Admin

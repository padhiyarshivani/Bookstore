import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Course from '../components/Course'
import About from '../components/About'


function AboutFine() {
    // console.log(list)
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <About />
            </div>
            <Footer />
        </>
    )
}

export default AboutFine
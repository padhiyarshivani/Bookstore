import React from 'react'
import Benner from "../../public/Banner.jpg"
function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-20'>
                <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-30'>
                    <div className="space-y-16 ">
                        <h1 className="text-4xl font-bold">
                            Hello, Welcome here to learn something <span className="text-purple-500">new everyday!!!</span>
                        </h1>
                        <p className="text-xl mg-">[Bookstore Name] is your premier destination for diverse literature, offering quality books and exceptional service since [Year].
                            <p className="text-xl mg-">Our mission is to connect readers with inspiring stories while celebrating diversity and sustainability. With a curated collection, personalized recommendations, and engaging events, we create a welcoming space for book lovers of all backgrounds.
                                <p className="text-xl mg-">Visit us at [Store Address] to explore our extensive collection and stay updated on promotions via our newsletter and social media channels.</p></p></p>
                        {/* <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label> */}

                    </div>


                    {/* <Link to="\about"><button className="btn btn-secondary mt-6">More About Us</button></Link> */}
                    <div className='mt-12'>
                        <a href='/about' className="bg-pink-500 text-white px-3 py-3 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                        // onClick={() => document.getElementById("my_modal_3").showModal()}
                        >
                            More About Us!
                        </a>
                    </div>

                </div>
                <div className='order-1 w-full md:w-1/2 '>
                    <img src={Benner} className="w-90 h-90" alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner
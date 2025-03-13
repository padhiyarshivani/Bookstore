import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Login from './Login'



function Contectus() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Close button */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Contect Us!</h3>

                            {/* Name input */}
                            <div className='mt-4 space-y-2'>
                                <label>Name:</label><br />
                                <input
                                    type="text"
                                    placeholder='Enter Your Name'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>

                            {/* Email input */}
                            <div className='mt-4 space-y-2'>
                                <label>Email:</label><br />
                                <input
                                    type="email"
                                    placeholder='Enter Your Email'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>

                            {/* Password input */}
                            <div className='mt-4 space-y-2'>
                                <label>Query</label><br />
                                <input
                                    type="text"
                                    placeholder='Enter Your Query'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("text", { required: true })}
                                />
                                {errors.text && <span className="text-red-500">This field is required</span>}
                            </div>

                            {/* Submit button and login link */}
                            <div className='flex justify-around mt-4'>
                                <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>

                                <p className='text-xl'>Have Account?{" "}
                                    {/* <button type="button" className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button>{" "} */}
                                    <Link to='/Loginnew' className='underline text-blue-500 cursor-pointer'>Login</Link>
                                </p>
                            </div>
                        </form>
                        {/* <Login /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contectus
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// import Login from './Login'
import axios from 'axios'
import toast from 'react-hot-toast'



function Adminnew() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const nevigate = useNavigate();
    const onSubmit = async (data) => {
        const AdminInfo = {

            email: data.email,
            password: data.password,

        }

        try {

            const res = await axios.post("http://localhost:4001/ad/admin", AdminInfo);
            console.log(res.data);
            if (res.data) {
                //alert("Login successfully")
                toast.success("Login successfully");

                setTimeout(() => {
                    localStorage.setItem("Admin", JSON.stringify(res.data.user));
                    nevigate('/work');
                    window.location.reload();
                }, 2000);

            }
        }
        catch (err) {
            if (err.response) {
                console.log(err);
                // alert("Error: " + err.response.data.message);
                
                toast.error("Error: " + err.response.data.message);
                setTimeout(() => {
                    nevigate('/')
                }, 2000);
            }
        }

    }

    return (
        <>
           <div className='flex h-screen items-center justify-center'>
                <div className="w-[450px]">

                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Close button */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg mb-4 mr-1000">ADMIN <span className='text-pink-500'>LOGIN </span></h3>

                            {/* email input */}
                            <div className='space-y-2'>
                                <label className="block text-sm font-medium text-white-700">Email:</label>
                                <input
                                    type="email"
                                    placeholder='Enter Your Email'
                                    className='w-full px-3 py-2 border rounded-md outline-none focus:ring focus:border-blue-300'
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>

                            {/* password input */}
                            <div className='mt-4 space-y-2'>
                                <label className="block text-sm font-medium text-white-700">Password:</label>
                                <input
                                    type="password"
                                    placeholder='Enter Your Password'
                                    className='w-full px-3 py-2 border rounded-md outline-none focus:ring focus:border-blue-300'
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>

                            {/* Submit button and login link */}
                            <div className='flex items-center mt-6'>
                                <button type="submit" className='bg-pink-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 transition duration-200'>Submit</button>
                                <p className='ml-4 text-sm text-white-600 inline-block'>If you are not admin you can't login this page go to User Login page{" "}
                                    <Link to='/Loginnew' className='underline text-blue-500 cursor-pointer font-bold'>Login</Link>
                                </p>
                            </div>

                            <div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adminnew
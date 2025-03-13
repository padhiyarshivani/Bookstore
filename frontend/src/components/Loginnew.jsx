import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// import Login from './Login'
import axios from 'axios'
import toast from 'react-hot-toast'



function Loginnew() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const nevigate = useNavigate();
    const onSubmit = async (data) => {
        const userInfo = {

            email: data.email,
            password: data.password,

        }

        try {

            const res = await axios.post("http://localhost:4001/User/login", userInfo);
            console.log(res.data);
            if (res.data) {
                //alert("Login successfully")
                toast.success("Login successfully");

                setTimeout(() => {
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                    nevigate('/');
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

                }, 3000);
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

                            <h3 className="font-bold text-lg">Login </h3>

                            {/* email input */}
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

                            {/* password input */}
                            <div className='mt-4 space-y-2'>
                                <label>Password:</label><br />
                                <input
                                    type="password"
                                    placeholder='Enter Your Password'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className="text-red-500">This field is required</span>}
                            </div>



                            {/* Submit button and login link */}
                            <div className='flex justify-around mt-6'>
                                <button type="submit" className='bg-pink-500 text-white rounded-md px-5 py-2 hover:bg-pink-700 duration-200'>Submit</button>

                                <p className='text-xl'>Not registered{" "}
                                    {/* <button type="button" className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button>{" "} */}
                                    <Link to='/Signup' className='underline text-blue-500 cursor-pointer'>Signup</Link>
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

export default Loginnew
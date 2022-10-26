import React from 'react'
import { NavHashLink } from 'react-router-hash-link';
import { useState } from 'react';

const Login = () => {
    const [value, setValue] = useState({
        email1:'',
        password1:'',
    });
    function onChange(e)
    {
        setValue({...value,[e.target.name]:e.target.value});
    }
    function submit()
    {

    }
    return (
        <>
            <div className="login122">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-medium">Passenger Login Form</h1>
                </div>
                <div className="p-5 shadow-lg bg-gray-200">
                    <div className="relative m-auto overflow-hidden login-user-img bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg className="absolute text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>
                    <form onSubmit={submit}>
                        <div className="mt-3">
                            <div className="relative login-box z-0 mb-6 w-full group">
                                <input type="email" name="email1" id="email1" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={value.email1} onChange={onChange} required />
                                <label htmlFor="email1" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div className="relative z-0 login-box mb-6 w-full group">
                                <input type="text" name="password1" id="password1" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={value.password1} onChange={onChange} required />
                                <label htmlFor="password1" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>
                        </div>
                        <div className="login-btn w-full mt-3">
                            <button type="button" className="w-full focus:outline-none text-white bg-purple-800 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Login</button>
                        </div>
                        <div className="flex mt-1 items-end">
                            <div className="flex mr-1 items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                            </div>
                            <div className="text-sm flex items-center">
                                <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                <NavHashLink className="ml-2 text-blue-700" smooth to="/#contact">Need Help?</NavHashLink>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="mt-2 text-center text-blue-600">
                    <NavHashLink smooth to="/contact">Create an account</NavHashLink>
                </div>
            </div>
        </>
    )
}

export default Login;
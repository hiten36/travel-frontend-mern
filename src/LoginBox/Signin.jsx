import React, { useState } from 'react'
import useMain from '../hooks/useMain';

const Signin = (props) => {
    const context = useMain();
    const [value, setValue] = useState({
        fName: '',
        lName: '',
        email: '',
        gender: '',
        phone: '',
        age: '',
        password: '',
        cpassword: '',
    });
    const onChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const submit = async (e) => {
        e.preventDefault();
        // console.log(value);
        const ans = await context.signin(value.fName, value.lName, value.email, value.gender, value.phone, value.age, value.password, value.cpassword);
        console.log(ans);
        if (ans.success) {
            props.notify('success', ans.message);
            props.toggle_mover1();
        }
        else {
            props.notify('error', ans.message);
        }
    };

    const toggle_password=(id)=>{
        if(document.getElementById(id).type==='text')
        {   
            document.getElementById(id).type='password';
        }
        else
        {
            document.getElementById(id).type='text';
        }
    };

    return (
        <>
            <div className="login121">
                <div className="mb-12 text-center">
                    <h1 className="text-3xl font-medium">Passenger Registration Form</h1>
                </div>
                <form onSubmit={submit}>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative mr-10 z-0 mb-6 w-full group">
                            <input type="text" name="fName" id="fName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={value.fName} onChange={onChange} required />
                            <label htmlFor="fName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div className="relative ml-10 z-0 mb-6 w-full group">
                            <input type="text" name="lName" id="lName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={value.lName} onChange={onChange} required />
                            <label htmlFor="lName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mr-10 mb-6 w-full group">
                            <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={value.email} onChange={onChange} required />
                            <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                        </div>
                        <div className="flex justify-start ml-10">
                            <div className="flex items-center mr-2 mb-4">
                                <input id="gender-option-1" type="radio" name="gender" value="male" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="country-option-1" aria-describedby="country-option-1" onChange={onChange} checked />
                                <label htmlFor="gender-option-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Male
                                </label>
                            </div>
                            <div className="flex items-center ml-2 mb-4">
                                <input id="gender-option-2" type="radio" name="gender" value="female" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="country-option-2" aria-describedby="country-option-2" onChange={onChange} />
                                <label htmlFor="gender-option-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mr-10 mb-6 w-full group">
                            <input type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={value.phone} onChange={onChange} required />
                            <label htmlFor="phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                        </div>
                        <div className="relative z-0 ml-10 mb-6 w-full group">
                            <input type="number" name="age" id="age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={value.age} onChange={onChange} required />
                            <label htmlFor="age" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Age</label>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mr-10 mb-6 w-full group">
                            <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={value.password} onChange={onChange} required />
                            <svg onClick={()=>{
                                toggle_password('password');
                            }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="cursor-pointer absolute auth-eye bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                            <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Create Password</label>
                        </div>
                        <div className="relative z-0 ml-10 mb-6 w-full group">
                            <input type="password" name="cpassword" id="cpassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={value.cpassword} onChange={onChange} required />
                            <svg onClick={()=>{
                                toggle_password('cpassword');
                            }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="cursor-pointer absolute auth-eye bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                            <label htmlFor="cpassword" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="text-white bg-purple-800 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-8 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-800 dark:focus:ring-purple-900">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signin;
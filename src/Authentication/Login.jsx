import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Footer from '../Footer/Footer';
import Login1 from '../LoginBox/Login';
import Signin from '../LoginBox/Signin';

const Login = (props) => {
    const [flag, setFlag] = useState(false);

    const toggle_mover1 = () => {
        let b1 = document.querySelector('.toggle-mover');
        setFlag(true);
        b1.style.left = '100px';
        if (document.querySelector('.bg-purple')) {
            b1.style.width = '90px';
            document.querySelector('.bg-purple').classList.remove('bg-purple');
        }
        document.getElementById('login-btn').classList.add('bg-purple');
    };

    const toggle_mover = (e, tFLag = false) => {
        let b1 = document.querySelector('.toggle-mover');
        if (e.target.innerText === 'Login' && !tFLag) {
            setFlag(true);
            b1.style.left = '100px';
            if (document.querySelector('.bg-purple')) {
                b1.style.width = '90px';
                document.querySelector('.bg-purple').classList.remove('bg-purple');
            }
            document.getElementById('login-btn').classList.add('bg-purple');
        }
        else {
            setFlag(false);
            b1.style.left = '5px';
            if (document.querySelector('.bg-purple')) {
                b1.style.width = '110px';
                document.querySelector('.bg-purple').classList.remove('bg-purple');
            }
            document.getElementById('register-btn').classList.add('bg-purple');
        }
    };

    return (
        <>
            <div className="login py-14" id="Login">
                <div className="login1 py-16 px-24 flex justify-between">
                    <div className="login11 flex flex-col justify-center items-center text-white">
                        <img src="/images/rocket.svg" alt="rocket" />
                        <h1 className="mt-6 mb-5 text-4xl">Welcome</h1>
                        <p>to the travel agency</p>
                        <button type="button" onClick={toggle_mover} className="text-gray-900 mt-44 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-20 py-2 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Login</button>
                    </div>
                    <div className="login12 relative flex justify-center">
                        <div className="login-toggle absolute bg-purple-800 h-fit py-2 px-7 rounded-3xl text-white">
                            <div className="toggle-mover rounded-3xl"></div>
                            <div className="flex items-center justify-between">
                                <b id="register-btn" onClick={toggle_mover} className="mr-4 z-10 bg-purple cursor-pointer">Register</b>
                                <b id="login-btn" onClick={toggle_mover} className="ml-4 z-10 cursor-pointer">Login</b>
                            </div>
                        </div>
                        {flag ? <Login1 notify={props.notify} toggle_mover={toggle_mover} setLoginRef={props.setLoginRef} loginRef={props.loginRef} /> : <Signin notify={props.notify} toggle_mover1={toggle_mover1} />}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login

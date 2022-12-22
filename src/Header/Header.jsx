import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import { HashLink } from 'react-router-hash-link';
import useMain from '../hooks/useMain';

const Header = (props) => {
    const [value, setValue] = useState({
        email: '',
        password: ''
    });
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const context = useMain();

    useEffect(() => {
        if (localStorage.getItem('travel_token')) {
            setUser(JSON.parse(localStorage.getItem('travel_user')));
        }
        else {
            setUser({});
        }
    }, [props.loginRef]);

    const toggleMenu = (flag = false) => {
        if (flag === true) {
            document.getElementById('menu-dropdown').classList.remove('menu-dropdown-toggle2');
        }
        else {
            document.getElementById('menu-dropdown').classList.toggle('menu-dropdown-toggle2');
        }
    };

    const toggleMenu1 = (flag = false) => {
        if (flag === true) {
            document.getElementById('user-dropdown').classList.remove('menu-dropdown-toggle2');
        }
        else {
            document.getElementById('user-dropdown').classList.toggle('menu-dropdown-toggle2');
        }
    };

    const userDropdown = (e) => {
        if (e.target.tagName === 'IMG') {
            if (!e.target.parentNode.classList.contains('userMode')) {
                if (document.getElementById('user-dropdown').classList.contains('menu-dropdown-toggle2')) {
                    document.getElementById('user-dropdown').classList.remove('menu-dropdown-toggle2');
                }
            }
        }
        else {
            if (!e.target.classList.contains('userMode')) {
                if (document.getElementById('user-dropdown').classList.contains('menu-dropdown-toggle2')) {
                    document.getElementById('user-dropdown').classList.remove('menu-dropdown-toggle2');
                }
            }
        }
    };

    const menuDropdown = (e) => {
        if (e.target.tagName === 'IMG') {
            if (!e.target.parentNode.classList.contains('menuMode')) {
                if (document.getElementById('menu-dropdown').classList.contains('menu-dropdown-toggle2')) {
                    document.getElementById('menu-dropdown').classList.remove('menu-dropdown-toggle2');
                }
            }
        }
        else {
            if (!e.target.classList.contains('menuMode')) {
                if (document.getElementById('menu-dropdown').classList.contains('menu-dropdown-toggle2')) {
                    document.getElementById('menu-dropdown').classList.remove('menu-dropdown-toggle2');
                }
            }
        }
    };

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(value);
        const ans = await context.login(value.email, value.password);
        if (ans.success) {
            props.notify('success', ans.message);
            localStorage.setItem('travel_token', JSON.stringify({
                token: ans.token,
                expiry: new Date().getTime() + (24 * 60 * 60 * 1000),
                rememberMe: document.getElementById('nav-remember').checked
            }));
            localStorage.setItem('travel_user', JSON.stringify(ans.user));
            navigate('/');
            props.setLoginRef(!props.loginRef);
        }
        else {
            props.notify('error', ans.message);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('travel_token');
        localStorage.removeItem('travel_user');
        window.location.href = '/';
    };

    const handlePassOpen = () => {
        document.getElementById('nav-pass-open').classList.toggle('hidden');
        document.getElementById('nav-pass-close').classList.toggle('hidden');
        const inp = document.getElementById('nav-password');
        if (inp.type === 'password') {
            inp.type = 'text';
        }
        else {
            inp.type = 'password';
        }
    };

    return (
        <>
            <nav className="bg-white navbar border-gray-200 px-2 sm:px-4 py-2 rounded dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <NavLink to="/" className="flex items-center">
                        <img src="/images/logo.png" className="mr-3 w-16" alt="Logo" />
                        <span className="self-center text-3xl font-semibold whitespace-nowrap text-purple-800 dark:text-white">Travel</span>
                    </NavLink>
                    <div className="hidden nav-search relative mr-3 md:mr-0 md:block">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="email-adress-icon" className="block p-3 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                    <div className="flex">
                        <button type="button" className="colorMode bg-gray-200 text-gray-700 border hover:bg-purple-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-purple-900">
                            <img src="/images/dark.svg" alt="mode" />
                        </button>
                        <div className="flex items-center md:order-2">
                            <button onClick={() => {
                                toggleMenu(true);
                                toggleMenu1();
                            }} type="button" className="userMode flex mr-3 text-sm bg-gray-200 px-2 py-2 rounded-md md:mr-0 focus:ring-4 focus:ring-blue-300 dark:focus:ring-gray-600 hover:bg-purple-800" id="user-menu-button" aria-expanded="false">
                                <span className="sr-only">Open user menu 1</span>
                                <img className="w-8 h-8 rounded-full" src="/images/user.svg" alt="Mode" />
                            </button>
                            <OutsideClickHandler onOutsideClick={(e) => {
                                userDropdown(e)
                            }}>
                                <div className="menu-dropdown-toggle1  w-80 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style={{ position: 'absolute', margin: '0px' }}>
                                    <ul className="pt-2 pb-4 px-4" aria-labelledby="user-dropdown">
                                        {Object.keys(user)?.length > 0 ?
                                            <div>
                                                <b>Welcome, </b>
                                                <p>{user.firstName} {user.lastName}</p>
                                                <div className="mt-4">
                                                    <button onClick={handleLogout} type="button" className="focus:outline-none w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout</button>
                                                </div>
                                            </div>
                                            : <form onSubmit={submitHandler}>
                                                <div className="mb-6">
                                                    <label htmlFor="nav-email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                                    <input type="email" id="nav-email" name="email" onChange={handleChange} value={value.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:purple-blue-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="nav-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                                                    <div className='relative'>
                                                        <input type="password" id="nav-password" name="password" onChange={handleChange} value={value.password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="on" required />
                                                        <svg id="nav-pass-open" onClick={handlePassOpen} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ right: "10px", top: "12px" }} className="cursor-pointer absolute bi bi-eye-fill" viewBox="0 0 16 16">
                                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                                        </svg>
                                                        <svg id="nav-pass-close" onClick={handlePassOpen} xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{ right: "10px", top: "12px" }} fill="currentColor" className="hidden cursor-pointer absolute bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="flex items-start mb-4">
                                                    <div className="flex items-center h-5">
                                                        <input id="nav-remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                                    </div>
                                                    <label htmlFor="nav-remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                                </div>
                                                <div className="flex justify-center pb-4 w-full">
                                                    <div className="flex items-center ">
                                                        <span onClick={toggleMenu1} className="text-gray-600 text-sm mr-1">New User? </span>
                                                        <NavLink onClick={toggleMenu1} to="/auth" className="text-purple-800 text-sm ml-1 cursor-pointer">Signin Now</NavLink>
                                                    </div>
                                                </div>
                                                <button type="submit" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                                            </form>}

                                    </ul>
                                </div>
                            </OutsideClickHandler>
                            <button data-collapse-toggle="mobile-menu-user" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-user" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="flex items-center md:order-2 mx-2">
                            <button type="button" className="menuMode flex mr-3 text-sm bg-gray-200 rounded-md px-2 py-2 md:mr-0 focus:ring-4 focus:ring-blue-300 dark:focus:ring-gray-600 hover:bg-purple-800" id="menu-menu-button" onClick={() => {
                                toggleMenu1(true);
                                toggleMenu();
                            }}>
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src="/images/menu.svg" alt="user" />
                            </button>
                            <OutsideClickHandler onOutsideClick={(e) => {
                                menuDropdown(e);
                            }}>
                                <div className="menu-dropdown-toggle1 w-60 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="menu-dropdown" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style={{ position: 'absolute', margin: '0px' }}>
                                    <div className="py-3 px-4">
                                        <span className="block text-sm text-gray-900 dark:text-white">{Object.keys(user).length > 0 ? `${user.firstName} ${user.lastName}` : "Guest"}</span>
                                        {Object.keys(user).length > 0 ? <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user.email}</span> : null}
                                    </div>
                                    <ul className="py-1" aria-labelledby="user-dropdown">
                                        <li onClick={toggleMenu}>
                                            <HashLink smooth to="/#Home" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Home</HashLink>
                                        </li>
                                        <li onClick={toggleMenu}>
                                            <NavLink to="/track" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Tracking</NavLink>
                                        </li>
                                        {Object.keys(user).length === 0 ? <li onClick={toggleMenu}>
                                            <NavLink to="/auth" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Login/Signin</NavLink>
                                        </li> : null}
                                        <li onClick={toggleMenu}>
                                            <HashLink smooth to="/#Package" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Packages</HashLink>
                                        </li>
                                        <li onClick={toggleMenu}>
                                            <HashLink smooth to="/#Service" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Services</HashLink>
                                        </li>
                                        <li onClick={toggleMenu}>
                                            <HashLink smooth to="/#Testimonial" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Testimonoals</HashLink>
                                        </li>
                                        <li onClick={toggleMenu}>
                                            <HashLink smooth to="/#Review" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Review</HashLink>
                                        </li>
                                        <li onClick={toggleMenu}>
                                            <HashLink smooth to="/#Contact" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Contact</HashLink>
                                        </li>
                                    </ul>
                                </div>
                            </OutsideClickHandler>
                            <button data-collapse-toggle="mobile-menu-menu" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
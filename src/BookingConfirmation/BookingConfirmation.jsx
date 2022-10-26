import React, { useState } from 'react'
import Footer from '../Footer/Footer';

const BookingConfirmation = () => {
    const [info, setInfo] = useState({
        name1: '1234',
        age: '',
        gender: ''
    });
    const [info1, setInfo1] = useState({});

    const handleChange = (e, index) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
        setInfo1({
            ...info1, [index]: {
                [e.target.name]: e.target.value
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(info);
    };

    return (
        <>
            <div className="busListMain">
                <div className="busListMain1">
                    <div className="book-con-box">
                        <h1 className="text-4xl font-bold mb-4 text-center">Booking Confirmation</h1>
                        <div className="book-con mt-7 flex justify-between">
                            <div className="book-con1">
                                <h5 className="text-xl mb-7">Passengers Details</h5>
                                <div className="book-con11 mb-5">
                                    <b className="font-semibold">Passenger 1</b>
                                    <div className="mb-3 mt-2">
                                        <input type="text" name="name1" onChange={(e) => {
                                            handleChange(e, 0);
                                        }} value={window[`info.name${1}`]} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Passenger Name" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="number" name="age1" onChange={(e) => {
                                            handleChange(e, 0);
                                        }} value={info.age} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Passenger Age" required />
                                    </div>
                                    <div className="mb-3">
                                        <div className="flex items-center mr-4">
                                            <input id="male" type="radio" value={info.gender} name="gender1" onChange={(e) => {
                                                handleChange(e, 0);
                                            }} className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="male" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <input id="female" type="radio" value={info.gender} name="gender1" onChange={(e) => {
                                                handleChange(e, 0);
                                            }} className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="female" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <input id="others" type="radio" value={info.gender} name="gender1" onChange={(e) => {
                                                handleChange(e, 0);
                                            }} className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="others" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="book-con11">
                                    <b className="font-semibold">Passenger 2</b>
                                    <div className="mb-3 mt-2">
                                        <input type="text" name="name2" onChange={(e) => {
                                            handleChange(e, 1);
                                        }} value={info.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Passenger Name" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="number" name="age2" onChange={(e) => {
                                            handleChange(e, 1);
                                        }} value={info.age} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Passenger Age" required />
                                    </div>
                                    <div className="mb-3">
                                        <div className="flex items-center mr-4">
                                            <input id="male" type="radio" value={info.gender} name="gender2" onChange={(e) => {
                                                handleChange(e, 1);
                                            }} className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="male" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <input id="female" type="radio" value={info.gender} name="gender2" onChange={(e) => {
                                                handleChange(e, 1);
                                            }} className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="female" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <input id="others" type="radio" value={info.gender} name="gender2" onChange={(e) => {
                                                handleChange(e, 1);
                                            }} className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="others" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="book-con2 bg-gray-200 text-center p-5">
                                <b className="font-semibold pb-2">Sub Total</b>
                                <h3 className="text-3xl border-t-2 pt-3 mt-2">$ 395</h3>
                                <div className="flex-col flex pb-2 border-b-2">
                                    <b className="font-semibold mb-7">199 X 2</b>
                                    <b className="font-bold">Seats</b>
                                </div>
                                <div className="flex mb-6 justify-center pt-2">
                                    <p>UD-1,</p>
                                    <p>UD-2</p>
                                </div>
                                <div className="flex flex-col">
                                    <b className="font-bold text-xl border-b-2 pb-2">Bus 21</b>
                                    <b className="font-semibold my-4">Jaipur-Ajmer</b>
                                    <b className="font-semibold mb-4">15 NOV-15 NOV</b>
                                    <b className="font-semibold text-xl pb-4 border-b-2">08:00 - 11:00</b>
                                    <b className="font-semibold mb-4 mt-1 flex flex-row justify-center">3 <p className="text-gray-500 font-normal mx-1">hrs</p> 0 <p className="text-gray-500 font-normal mx-1">min</p></b>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="focus:outline-none w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Submit & Continue</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BookingConfirmation;

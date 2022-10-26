import React from 'react'
import Footer from '../Footer/Footer';
import SearchBar from '../SearchBox/SearchBar';

const BookingConfirmed = () => {
    return (
        <>
            <div className="busListMain">
                <div className="busListMain1 pt-8">
                    <SearchBar />
                    <p className="text-purple-700 text-xl mt-6 text-center">Your booking has been confirmed. You can download your ticket below. You can also download your ticket by clicking here</p>
                    <div className="book-con-box">
                        <h1 className="text-4xl font-bold mb-4 text-center">Booking Confirmation</h1>
                        <div className="book-con mt-7 flex justify-between">
                            <div className="book-con1">
                                <h5 className="text-xl mb-7">Passengers Details</h5>
                                <div className="book-con11 mb-5">
                                    <b className="font-semibold">Passenger 1</b>
                                    <div className="flex">
                                        <p className="mr-1">AB,</p>
                                        <p className="mr-1">12,</p>
                                        <p className="mr-1">Male</p>
                                    </div>
                                </div>
                                <div className="book-con11">
                                    <b className="font-semibold">Passenger 2</b>
                                    <p className="mr-1">AB,</p>
                                    <p className="mr-1">12,</p>
                                    <p className="mr-1">Male</p>
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
                        <button type="button" className="focus:outline-none w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Download Ticket</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BookingConfirmed;

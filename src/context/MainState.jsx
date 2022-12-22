import React, { useState } from 'react';
import { deleteRequest, getRequest, postRequest, putRequest } from '../Api/Api';
import MainContext from './MainContext';

const baseUrl = "http://localhost:5000";

const MainState = (props) => {
    const [searchValue, setSearchValue] = useState({
        from: "",
        to: "",
        leaving: ""
    });

    const getBuses = async (start, end, date, id) => {
        try {
            const data = await getRequest(`${baseUrl}/bus/getBuses?start=${start}&end=${end}&date=${date}&id=${id}`, false, props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const createBus = async (busName, busStart, busEnd, busStations, busSeats, busWindowSeats, busSpeed, bookedSeats, farePerKm, busStartTs, totalTravel, initialMidData) => {
        try {
            const data = await postRequest(`${baseUrl}/bus/createBus`, { busName, busPrice: '', busStart, busEnd, busStations, busSeats, busWindowSeats, busSpeed, bookedSeats, farePerKm, busStartTs, totalTravel, initialMidData }, true, props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const updateBus = async (id, busName, busStart, busEnd, busStations, busSeats, busWindowSeats, busSpeed, bookedSeats, farePerKm, busStartTs, totalTravel, initialMidData) => {
        try {
            const data = await putRequest(`${baseUrl}/bus/updateBus/${id}`, { busName, busPrice: '', busStart, busEnd, busStations, busSeats, busWindowSeats, busSpeed, bookedSeats, farePerKm, busStartTs, totalTravel, initialMidData }, true, props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const deleteBus = async (id) => {
        try {
            // props.setProgress(20);
            // const response = await fetch(`${baseUrl}/bus/deleteBus/${id}`, {
            //     method: "DELETE",
            //     headers: {
            //         "content-type": "application/json",
            //         "jwt": JSON.parse(localStorage.getItem('travel_token')).token
            //     }
            // });
            // const data = await response.json();
            // props.setProgress(100);
            const data = await deleteRequest(`${baseUrl}/bus/deleteBus/${id}`, {}, true, props);
            return data;

        } catch (error) {
            console.log(error);
        }
    };

    const getBookings = async (busName, busFrom, busTo, initialDate, endDate, id) => {
        try {
            // props.setProgress(20);
            // const response = await fetch(`${baseUrl}/booking/getBookings?busName=${busName}&busFrom=${busFrom}&busTo=${busTo}&initialDate=${initialDate}&endDate=${endDate}&id=${id}`);
            // const data = await response.json();
            // console.log(data);
            // props.setProgress(100);
            const data = await getRequest(`${baseUrl}/booking/getBookings?busName=${busName}&busFrom=${busFrom}&busTo=${busTo}&initialDate=${initialDate}&endDate=${endDate}&id=${id}`, true, props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const getUserBooking = async (id) => {
        try {
            // props.setProgress(20);
            // const response = await fetch(`${baseUrl}/booking/getUserBooking?id=${id}`);
            // const data = await response.json();
            // console.log(data);
            // props.setProgress(100);
            const data = await getRequest(`${baseUrl}/booking/getUserBooking?id=${id}`, false, props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const createBooking = async (busId, busName, busFrom, busTo, passengerInfo, amount) => {
        try {
            // props.setProgress(20);
            // const response = await fetch(`${baseUrl}/booking/createBooking`, {
            //     method: "POST",
            //     headers: {
            //         "content-type": "application/json",
            //         "jwt": JSON.parse(localStorage.getItem('travel_token')).token
            //     },
            //     body: JSON.stringify({ busId, busName, busFrom, busTo, passengerInfo, amount })
            // });
            // const data = await response.json();
            // console.log(data);
            // props.setProgress(100);
            const data = postRequest(`${baseUrl}/booking/createBooking`, { busId, busName, busFrom, busTo, passengerInfo, amount }, true, props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const updateBooking = async (id, passengerInfo) => {
        try {
            // props.setProgress(20);
            // const response = await fetch(`${baseUrl}/booking/updateBooking/${id}`, {
            //     method: "PUT",
            //     headers: {
            //         "content-type": "application/json",
            //         "jwt": JSON.parse(localStorage.getItem('travel_token')).token
            //     },
            //     body: JSON.stringify({ passengerInfo })
            // });
            // const data = await response.json();
            // console.log(data);
            // props.setProgress(100);
            const data = await putRequest(`${baseUrl}/booking/updateBooking/${id}`, { passengerInfo }, true, props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const deleteBooking = async (id) => {
        try {
            // props.setProgress(20);
            // const response = await fetch(`${baseUrl}/booking/deleteBooking/${id}`, {
            //     method: "DELETE",
            //     headers: {
            //         "content-type": "application/json",
            //         "jwt": JSON.parse(localStorage.getItem('travel_token')).token
            //     }
            // });
            // const data = await response.json();
            // console.log(data);
            // props.setProgress(100);
            const data = await deleteRequest(`${baseUrl}/booking/deleteBooking/${id}`, {}, true, props);
        } catch (error) {
            console.log(error);
        }
    };

    const getRefunds = async (date, status, bookingId) => {
        try {
            // props.setProgress(20);
            // const response = await fetch(`${baseUrl}/refund/getRefunds?date=${date}&status=${status}&bookingId=${bookingId}`, {
            //     method: "GET",
            //     headers: {
            //         "jwt": JSON.parse(localStorage.getItem('travel_token')).token
            //     }
            // });
            // const data = await response.json();
            // console.log(data);
            // props.setProgress(100);
            const data = await getRequest(`${baseUrl}/refund/getRefunds?date=${date}&status=${status}&bookingId=${bookingId}`, true, props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const updateRefund = async (id, status) => {
        try {
            // props.setProgress(20);
            // const response = await fetch(`${baseUrl}/bus/updateBus/${id}`, {
            //     method: "PUT",
            //     headers: {
            //         "content-type": "application/json",
            //         "jwt": JSON.parse(localStorage.getItem('travel_token')).token
            //     },
            //     body: JSON.stringify({ status })
            // });
            // const data = await response.json();
            // console.log(data);
            // props.setProgress(100);
            const data = await putRequest(`${baseUrl}/bus/updateBus/${id}`, { status }, true, props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const deleteRefund = async (id) => {
        try {
            // props.setProgress(20);
            // const response = await fetch(`${baseUrl}/refund/deleteRefund/${id}`, {
            //     method: "DELETE",
            //     headers: {
            //         "jwt": JSON.parse(localStorage.getItem('travel_token')).token
            //     }
            // });
            // const data = await response.json();
            // console.log(data);
            // props.setProgress(100);
            const data=deleteRequest(`${baseUrl}/refund/deleteRefund/${id}`, {}, true, props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const getUsers = async () => {
        try {
            // props.setProgress(20);
            // const response = await fetch(`${baseUrl}/user/getUsers`);
            // const data = await response.json();
            // console.log(data);
            // props.setProgress(100);
            const data= await getRequest(`${baseUrl}/user/getUsers`, false. props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const signin = async (firstName, lastName, email, gender, phone, age, password, confirmPassword) => {
        try {
            // props.setProgress(20);
            // const response = await fetch(`${baseUrl}/user/signin`, {
            //     method: "POST",
            //     headers: {
            //         "content-type": "application/json"
            //     },
            //     body: JSON.stringify({ firstName, lastName, email, gender, phone, age, password, confirmPassword })
            // });
            // const data = await response.json();
            // console.log(data);
            // props.setProgress(100);
            const data = await postRequest(`${baseUrl}/user/signin`, { firstName, lastName, email, gender, phone, age, password, confirmPassword }, false, props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const login = async (email, password) => {
        try {
            // props.setProgress(20);
            // const response = await fetch(`${baseUrl}/user/login/`, {
            //     method: "POST",
            //     headers: {
            //         "content-type": "application/json"
            //     },
            //     body: JSON.stringify({ email, password })
            // });
            // const data = await response.json();
            // console.log(data);
            // props.setProgress(100);
            const data = await postRequest(`${baseUrl}/user/login/`, { email, password }, false, props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const updateProfile = async (firstName, lastName, email, gender, phone, age) => {
        try {
            // props.setProgress(20);
            // const response = await fetch(`${baseUrl}/bus/updateProfile`, {
            //     method: "PUT",
            //     headers: {
            //         "content-type": "application/json",
            //         "jwt": JSON.parse(localStorage.getItem('travel_token')).token
            //     },
            //     body: JSON.stringify({ firstName, lastName, email, gender, phone, age })
            // });
            // const data = await response.json();
            // console.log(data);
            // props.setProgress(100);
            const data = await putRequest(`${baseUrl}/bus/updateProfile`, { firstName, lastName, email, gender, phone, age }, true, props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const deleteUser = async (id) => {
        try {
            // props.setProgress(20);
            // const response = await fetch(`${baseUrl}/user/deleteUser/${id}`, {
            //     method: "DELETE",
            //     headers: {
            //         "jwt": JSON.parse(localStorage.getItem('travel_token')).token
            //     }
            // });
            // const data = await response.json();
            // console.log(data);
            // props.setProgress(100);
            const data = await deleteRequest(`${baseUrl}/user/deleteUser/${id}`, {}, true, props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const verifyUser = async () => {
        try {
            // props.setProgress(20);
            // const response = await fetch(`${baseUrl}/user/verifyUser`, {
            //     method: "GET",
            //     headers: {
            //         "jwt": JSON.parse(localStorage.getItem('travel_token')).token
            //     }
            // });
            // const data = await response.json();
            // props.setProgress(100);
            const data = await getRequest(`${baseUrl}/user/verifyUser`, true, props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const verifyAdmin = async () => {
        try {
            // props.setProgress(20);
            // const response = await fetch(`${baseUrl}/user/verifyAdmin`, {
            //     method: "GET",
            //     headers: {
            //         "jwt": JSON.parse(localStorage.getItem('travel_token')).token
            //     }
            // });
            // const data = await response.json();
            // props.setProgress(100);
            const data =await getRequest(`${baseUrl}/user/verifyAdmin`, true, props);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <MainContext.Provider value={{ searchValue, setSearchValue, getBuses, createBus, updateBus, deleteBus, getBookings, getUserBooking, createBooking, updateBooking, deleteBooking, getRefunds, updateRefund, deleteRefund, getUsers, signin, login, updateProfile, deleteUser, verifyUser, verifyAdmin }}>
                {props.children}
            </MainContext.Provider>
        </>
    )
};

export default MainState;

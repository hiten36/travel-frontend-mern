import React, { useState } from 'react';
import MainContext from './MainContext';

const baseUrl="http://localhost:5000";
const MainState = (props) => {
    const [searchValue, setSearchValue] = useState({
        from:"",
        to:"",
        leaving:""
    });

    const getBuses=async (start, end, date)=>{
        try {
            console.log(start, end, date);
            const response=await fetch(`${baseUrl}/bus/getBuses?start=${start}&end=${end}&date=${date}`);
            const data= await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const createBus=async (busName, busPrice, busStart, busEnd, busStations, busSeats, busWindowSeats, busSpeed, bookedSeats)=>{
        try {
            const response=await fetch(`${baseUrl}/bus/createBus`, {
                method:"POST",
                headers:{
                    "content-type": "application/json",
                    "jwt":JSON.parse(localStorage.getItem('token'))
                },
                body:JSON.stringify({busName, busPrice, busStart, busEnd, busStations, busSeats, busWindowSeats, busSpeed, bookedSeats})
            });
            const data = await response.json();
        } catch (error) {
            console.log(error);
        }
    };

    const updateBus=async (id, busName, busPrice, busStart, busEnd, busStations, busSeats, busWindowSeats, busSpeed, bookedSeats)=>{
        try {
            const response=await fetch(`${baseUrl}/bus/updateBus/${id}`, {
                method:"PUT",
                headers:{
                    "content-type": "application/json",
                    "jwt":JSON.parse(localStorage.getItem('token'))
                },
                body:JSON.stringify({busName, busPrice, busStart, busEnd, busStations, busSeats, busWindowSeats, busSpeed, bookedSeats})
            });
            const data = await response.json();
        } catch (error) {
            console.log(error);
        }
    };

    const deleteBus=async (id)=>{
        try {
            const response=await fetch(`${baseUrl}/bus/deleteBus/${id}`, {
                method:"DELETE",
                headers:{
                    "content-type": "application/json",
                    "jwt":JSON.parse(localStorage.getItem('token'))
                }
            });
            const data = await response.json();
        } catch (error) {
            console.log(error);
        }
    };

    const getBookings=async (busName, busFrom, busTo, initialDate, endDate, id)=>{
        try {
            const response=await fetch(`${baseUrl}/booking/getBookings?busName=${busName}&busFrom=${busFrom}&busTo=${busTo}&initialDate=${initialDate}&endDate=${endDate}&id=${id}`);
            const data= await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const getUserBooking=async (id)=>{
        try {
            const response=await fetch(`${baseUrl}/booking/getUserBooking?id=${id}`);
            const data= await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const createBooking=async (busId, busName, busFrom, busTo, passengerInfo, amount)=>{
        try {
            const response=await fetch(`${baseUrl}/booking/createBooking`, {
                method:"POST",
                headers:{
                    "content-type": "application/json",
                    "jwt":JSON.parse(localStorage.getItem('token'))
                },
                body:JSON.stringify({ busId, busName, busFrom, busTo, passengerInfo, amount })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const updateBooking=async (id, passengerInfo)=>{
        try {
            const response=await fetch(`${baseUrl}/booking/updateBooking/${id}`, {
                method:"PUT",
                headers:{
                    "content-type": "application/json",
                    "jwt":JSON.parse(localStorage.getItem('token'))
                },
                body:JSON.stringify({passengerInfo})
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteBooking=async (id)=>{
        try {
            const response=await fetch(`${baseUrl}/booking/deleteBooking/${id}`, {
                method:"DELETE",
                headers:{
                    "content-type": "application/json",
                    "jwt":JSON.parse(localStorage.getItem('token'))
                }
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    
    const getRefunds=async (date, status, bookingId)=>{
        try {
            const response=await fetch(`${baseUrl}/refund/getRefunds?date=${date}&status=${status}&bookingId=${bookingId}`,{
                method:"GET",
                headers:{
                    "jwt":JSON.parse(localStorage.getItem('token'))
                }
            });
            const data= await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const updateRefund=async (id, status)=>{
        try {
            const response=await fetch(`${baseUrl}/bus/updateBus/${id}`, {
                method:"PUT",
                headers:{
                    "content-type": "application/json",
                    "jwt":JSON.parse(localStorage.getItem('token'))
                },
                body:JSON.stringify({status})
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteRefund=async (id)=>{
        try {
            const response=await fetch(`${baseUrl}/refund/deleteRefund/${id}`, {
                method:"DELETE",
                headers:{
                    "jwt":JSON.parse(localStorage.getItem('token'))
                }
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    const getUsers=async ()=>{
        try {
            const response=await fetch(`${baseUrl}/user/getUsers`);
            const data= await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const signin=async (firstName, lastName, email, gender, phone, age, password, confirmPassword)=>{
        try {
            const response=await fetch(`${baseUrl}/user/signin`, {
                method:"POST",
                headers:{
                    "content-type": "application/json"
                },
                body:JSON.stringify({firstName, lastName, email, gender, phone, age, password, confirmPassword})
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const login=async (email, password)=>{
        try {
            const response=await fetch(`${baseUrl}/user/login/`, {
                method:"POST",
                headers:{
                    "content-type": "application/json"
                },
                body:JSON.stringify({email, password})
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const updateProfile=async (firstName, lastName, email, gender, phone, age)=>{
        try {
            const response=await fetch(`${baseUrl}/bus/updateProfile`, {
                method:"PUT",
                headers:{
                    "content-type": "application/json",
                    "jwt":JSON.parse(localStorage.getItem('token'))
                },
                body:JSON.stringify({firstName, lastName, email, gender, phone, age})
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteUser=async (id)=>{
        try {
            const response=await fetch(`${baseUrl}/user/deleteUser/${id}`, {
                method:"DELETE",
                headers:{
                    "jwt":JSON.parse(localStorage.getItem('token'))
                }
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <MainContext.Provider value={{searchValue, setSearchValue, getBuses, createBus, updateBus, deleteBus, getBookings, getUserBooking, createBooking, updateBooking, deleteBooking, getRefunds, updateRefund, deleteRefund, getUsers, signin, login, updateProfile, deleteUser}}>
                {props.children}
            </MainContext.Provider>
        </>
    )
};

export default MainState;

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
                    "content-type": "application/json"
                },
                body:JSON.stringify()
            });
            const data = await response.json({busName, busPrice, busStart, busEnd, busStations, busSeats, busWindowSeats, busSpeed, bookedSeats});
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <MainContext.Provider value={{searchValue, setSearchValue, getBuses, createBus}}>
                {props.children}
            </MainContext.Provider>
        </>
    )
};

export default MainState;

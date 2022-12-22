import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useMain from '../hooks/useMain';

const Index = ({ role }) => {
    const location = useLocation();
    const context = useMain();
    let authFlag = true;

    useEffect(() => {
        getData();
    }, [location]);

    const getData = async () => {
        if (!localStorage.getItem('travel_token') || !localStorage.getItem('travel_user')) {
            authFlag = false;
        }
        else {
            let currentTs = new Date().getTime();
            let rememberTs = JSON.parse(localStorage.getItem('travel_token')).expiry;
            if (rememberTs < currentTs) {
                if (JSON.parse(localStorage.getItem('travel_token')).rememberMe) {
                    // increase the time limit
                    localStorage.setItem("travel_token", JSON.stringify({ ...JSON.parse(localStorage.getItem("travel_token")), rememberTs: currentTs + (24 * 60 * 60 * 1000) }))
                }
                else {
                    // logout the user 
                    authFlag = false;
                }
            }

            if (authFlag) {
                if(!role.includes(JSON.parse(localStorage.getItem('travel_user')).role))
                {
                    authFlag = false;
                }
                else
                {
                    if (role === 'USER') {
                        const verify = await context.verifyUser();
                        if (!verify.success) {
                            authFlag = false;
                        }
                    }
                    if (role === 'ADMIN') {
                        
                        const verify = await context.verifyAdmin();
                        if (!verify.success) {
                            authFlag = false;
                        }
                    }
                }
            }
        }

        // console.log(authFlag);
        if (!authFlag) {
            localStorage.removeItem('travel_token');
            localStorage.removeItem('travel_user');
        }

        if(!authFlag && ( role.length===1 && ['USER', 'ADMIN'].some(e=>role.includes(e)) ))
        {
            window.location.href="/auth";
        }
    };

    return (
        <Outlet />
    )
};

export default Index;

import React from 'react'
import Dashboard from './Home/Dashboard';
import Sidebar from './Sidebar/Sidebar';
import Admin from './Components/Admin';
import { useParams } from 'react-router-dom';

const Index = () => {
    const { slug } = useParams();
    console.log(slug);
    return (
        <>
            <div className="flex">
                <Sidebar />
                {slug===undefined ? <Dashboard /> : slug==='bus' ? <Admin type="bus" /> : slug==="booking" ? <Admin type="bus" /> : slug==="refund" ? <Admin type="bus" /> : null}
            </div>
        </>
    )
}

export default Index;

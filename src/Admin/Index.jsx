import React, { useEffect } from 'react'
import Dashboard from './Home/Dashboard';
import Sidebar from './Sidebar/Sidebar';
import Admin from './Components/Admin';
import { useParams } from 'react-router-dom';

const Index = (props) => {
    const { slug } = useParams();

    return (
        <>
            <div className="flex admin-0">
                <Sidebar />
                {slug===undefined ? <Dashboard notify={props.notify} /> : slug==='bus' ? <Admin notify={props.notify} type="bus" /> : slug==="booking" ? <Admin notify={props.notify} type="bus" /> : slug==="refund" ? <Admin notify={props.notify} type="bus" /> : null}
            </div>
        </>
    )
}

export default Index;

import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import MainContext from '../../context/MainContext';
import AddBookingModal from '../Modals/AddBookingModal';
import AddBusModal from '../Modals/AddBusModal';
import AddRefundModal from '../Modals/AddRefundModal';
import EditBookingModal from '../Modals/EditBookingModal';
import EditBusModal from '../Modals/EditBusModal';
import EditRefundModal from '../Modals/EditRefundModal';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: row => row.year,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
];

const Admin = (props) => {
    const context = useContext(MainContext);
    // const [data, setData] = useState([]);

    useEffect(()=>{
        if(props.type==='bus')
        {
            getBusData();
        }
        else if(props.type==='booking')
        {
            getBookingData();
        }
        else if(props.type==='refund')
        {
            getRefundData();
        }
    },[props]);

    const getBusData=async ()=>{
        const data= await context.getBuses();
        console.log(data);
    };

    const getBookingData=async ()=>{
        const data= await context.getBookings();
        console.log(data);
    };

    const getRefundData=async ()=>{
        const data= await context.getRefunds();
        console.log(data);
    };

    return (
        <>
            <AddBusModal />
            <AddBookingModal />
            <AddRefundModal />
            <EditBusModal />
            <EditBookingModal />
            <EditRefundModal />

            <div className='admin-main'>
                <div className="admin-main1 text-end">
                    <button data-modal-toggle={props.type==="bus" ? "addBusModal" : props.type==="booking"? "addBookingModal" : props.type==="refund" ? "addRefundModal" : null} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Upload Bus</button>
                </div>
                <div className="admin-main2">
                    <DataTable
                        columns={columns}
                        data={data}
                    />
                </div>
            </div>
        </>
    )
}

export default Admin;

import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { NavLink } from 'react-router-dom';
import useMain from '../../hooks/useMain';
import DeleteModal from '../../Util/DeleteModal';
import AddBookingModal from '../Modals/AddBookingModal';
import AddBusModal from '../Modals/AddBusModal';
import AddRefundModal from '../Modals/AddRefundModal';
import EditBookingModal from '../Modals/EditBookingModal';
import EditBusModal from '../Modals/EditBusModal';
import EditRefundModal from '../Modals/EditRefundModal';

const Admin = (props) => {
    const context = useMain();
    const [data, setData] = useState([]);
    const [data1, setData1] = useState({});
    const [id, setId] = useState(0);
    const [refreshFlag, setRefreshFlag] = useState(false);

    useEffect(() => {
        if (props.type === 'bus') {
            getBusData();
        }
        else if (props.type === 'booking') {
            getBookingData();
        }
        else if (props.type === 'refund') {
            getRefundData();
        }
    }, [props.type, refreshFlag]);

    const getBusData = async () => {
        const data = await context.getBuses();
        console.log(data);
        setData(data.data);
    };

    const getBookingData = async () => {
        const data = await context.getBookings();
        console.log(data);
        setData(data.data);
    };

    const getRefundData = async () => {
        const data = await context.getRefunds();
        console.log(data);
        setData(data.data);
    };

    const columns = [
        {
            name: 'Name',
            selector: row => <div><NavLink to={`/bus/${row._id}`}>{row.busName}</NavLink></div>,
            sortable: true,
        },
        {
            name: 'Source',
            selector: row => row.busStart,
            sortable: true,
        },
        {
            name: 'Destination',
            selector: row => row.busEnd,
            sortable: true,
        },
        {
            name: 'Bus Speed',
            selector: row => row.busSpeed,
            sortable: true,
        },
        {
            name: 'Seats',
            selector: row => row.busSeats,
            sortable: true,
        },
        {
            name: "Actions",
            selector: row => <div className="flex justify-center">
                <div onClick={()=>{
                        setData1(row);
                        toggleUpdateModal(props.type === "bus" ? "editBusModal" : props.type === "booking" ? "editBookingModal" : props.type === "refund" ? "editRefundModal" : null);
                    }} className='mr-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                </div>
                <div onClick={()=>{
                    setId(row._id);
                    document.getElementById('deleteModal').classList.toggle('hidden');
                }} className='me-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </div>
        }
    ];

    const handleDelete=async ()=>{
        const ans = await context.deleteBus(id);
        console.log(ans);
        if(ans.success)
        {
            props.notify('success', ans.message);
            setRefreshFlag(!refreshFlag);
        }
        else
        {
            props.notify('error', ans.message);
        }
    };

    const toggleAddModal=(id)=>{
        document.getElementById(id).classList.toggle('hidden');
    };

    const toggleUpdateModal=(id)=>{
        document.getElementById(id).classList.toggle('hidden');
    };

    return (
        <>
            <AddBusModal notify={props.notify} refreshFlag={refreshFlag} setRefreshFlag={setRefreshFlag} />
            <AddBookingModal notify={props.notify} refreshFlag={refreshFlag} setRefreshFlag={setRefreshFlag} />
            <AddRefundModal notify={props.notify} refreshFlag={refreshFlag} setRefreshFlag={setRefreshFlag} />
            <EditBusModal data1={data1} notify={props.notify} refreshFlag={refreshFlag} setRefreshFlag={setRefreshFlag} />
            <EditBookingModal data1={data1} notify={props.notify} refreshFlag={refreshFlag} setRefreshFlag={setRefreshFlag} />
            <EditRefundModal data1={data1} notify={props.notify} refreshFlag={refreshFlag} setRefreshFlag={setRefreshFlag} />
            <DeleteModal handleDelete={handleDelete} />

            <div className='admin-main'>
                <div className="admin-main1 text-end">
                    <button onClick={()=>{
                        toggleAddModal(props.type === "bus" ? "addBusModal" : props.type === "booking" ? "addBookingModal" : props.type === "refund" ? "addRefundModal" : null);
                    }} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Upload Bus</button>
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

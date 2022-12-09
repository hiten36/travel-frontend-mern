import React, { useContext, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import MainContext from '../../context/MainContext';
import AddBusModal from '../Modals/AddBusModal';

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
]

const Admin = (props) => {
    const context = useContext(MainContext);
    useEffect(()=>{
        getData();
    },[]);

    const getData=async ()=>{
        const data= await context.getBuses();
    }

    return (
        <>
        
            <AddBusModal />
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

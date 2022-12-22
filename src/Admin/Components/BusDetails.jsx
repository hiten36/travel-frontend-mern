import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate, useParams } from 'react-router-dom';
import useMain from '../../hooks/useMain';
import DeleteModal from '../../Util/DeleteModal';
import EditBusModal from '../Modals/EditBusModal';

const BusDetails = (props) => {
    const context = useMain();
    const [data, setData] = useState({});
    const [data1, setData1] = useState([]);
    const { id } = useParams();
    const [refreshFlag, setRefreshFlag] = useState(false);
    const navigate=useNavigate();

    useEffect(() => {
        getBusData(id);
    }, [id, refreshFlag]);

    const getBusData = async (id) => {
        const data = await context.getBuses('', '', '', id);
        console.log(data);
        setData(data);
        setData1(data.busStations);
    };

    const columns = [
        {
            name: 'Source',
            selector: row => row.start.city,
            sortable: true,
            center:true
        },
        {
            name: 'Destination',
            selector: row => row.end.city,
            sortable: true,
            center:true
        },
        {
            name: 'Distance',
            selector: row => row.km,
            sortable: true,
            center:true
        },
        {
            name: 'Fare',
            selector: row => row.fare,
            sortable: true,
            center:true
        },
        {
            name: 'Available Seats',
            selector: row => row.availableSeats,
            sortable: true,
            center:true
        },
        {
            name: 'Seats Booked',
            selector: row => row.filledSeats.length>0 ? row.filledSeats.toString() : 'Nil',
            sortable: true,
            center:true
        },
    ];

    const handleDelete=async()=>{
        const ans = await context.deleteBus(id);
        if(ans.success)
        {
            props.notify('success', ans.message);
            navigate('/admin/bus');
        }
        else
        {
            props.notify('error', ans.message);
        }
    };

    return (
        <>
            <DeleteModal handleDelete={handleDelete} />
            <EditBusModal data1={data} notify={props.notify} refreshFlag={refreshFlag} setRefreshFlag={setRefreshFlag} />
            <div className="admin-1">
                <div className="admin-main">
                    <div className="bus-details0">
                        <div className="bus-details1 mb-7">
                            <div className="flex justify-around">
                                <div className="bus-details11">
                                    <p className='mb-2'>Bus Name: {data?.busName}</p>
                                    <p className='mb-2'>Source: {data?.busStart}</p>
                                    <p className='mb-2'>Destination: {data?.busEnd}</p>
                                </div>
                                <div className="bus-details12">
                                    <p className='mb-2'>Seats: {data?.busSeats}</p>
                                    <p className='mb-2'>Window Seats: {data?.busWindowSeats}</p>
                                    <p className='mb-2'>Average Speed: {data?.busSpeed}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bus-details2 mb-8">
                            <h4 className="text-2xl text-center">Bus Stations</h4>
                            <DataTable
                                columns={columns}
                                data={data1}
                            />
                        </div>
                        <div className="bus-details">
                            <div className="flex justify-between">
                                <button type="button" onClick={()=>{
                                    document.getElementById('editBusModal').classList.toggle('hidden');
                                }} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Edit Bus</button>
                                <button type="button" onClick={() => {
                                    document.getElementById('deleteModal').classList.toggle('hidden');
                                }} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete Bus</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusDetails;

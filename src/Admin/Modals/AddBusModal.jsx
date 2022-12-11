import React, { useState } from 'react'

const AddBusModal = () => {
    const [data, setData] = useState({
        busName: '',
        busSpeed: '',
        source: '',
        destination: '',
        busSeats: '',
        busWindowSeats: '',
        busFare: '',
        busDistance: '',
        busStartTime: ''
    });
    const [data1, setData1] = useState([{
        mid_city: "",
        mid_city_distance: "",
        mid_halt: ""
    }]);
    const [data2, setData2] = useState([]);
    var [formNo, setFormNo] = useState(1);

    const handleAddBtn = () => {
        setData1(data1.concat({
            mid_city: "",
            mid_city_distance: "",
            mid_halt: ""
        }));
    };

    const handleRemoveBtn = (index) => {
        setData1(() => {
            return data1.filter((e, i) => {
                return i !== index;
            });
        });
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleChange1 = (e, index) => {
        let obj = data1[index];
        obj = { ...obj, [e.target.name]: e.target.value };
        let t = [];
        for (let i = 0; i < data1.length; i++) {
            if (i === index) {
                t.push(obj);
            }
            else {
                t.push(data1[i]);
            }
        }
        setData1(t);
    };

    const handleChange2 = (e, index) => {
        let obj = data2[index];
        obj = { ...obj, [e.target.name]: e.target.value };
        let t = [];
        for (let i = 0; i < data2.length; i++) {
            if (i === index) {
                t.push(obj);
            }
            else {
                t.push(data2[i]);
            }
        }
        setData2(t);
    };

    const handleFormNext = () => {
        if (formNo === 2) {
            let arr = [{
                city: data.source,
                distance: 0,
                halt: 0
            }];
            for (let i of data1) {
                arr.push({
                    city: i.mid_city,
                    distance: i.mid_city_distance,
                    halt: i.mid_halt
                });
            }
            arr.push({
                city: data.destination,
                distance: data.busDistance,
                halt: 0
            });
            console.log(arr);

            let resArr = [];
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    let haltTime = 0;
                    for (let k = 0; k <= j; k++) {
                        haltTime += arr[k].halt;
                    }
                    resArr.push({
                        city: `${arr[i].city}-${arr[j].city}`,
                        distance: arr[j].distance - arr[i].distance,
                        fare: (arr[j].distance - arr[i].distance) * data.busFare,
                        time: data.busStartTime + ((arr[j].distance - arr[i].distance) / data.busSpeed) + haltTime
                    });
                }
            }
            console.log(resArr);
            setData2(resArr);
        }
        setFormNo(++formNo);
    };

    const handleFormPrev = () => {
        setFormNo(--formNo);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data2);
        console.log(data);
    }

    return (
        <>
            <div id="addBusModal" data-modal-backdrop="static" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="relative w-full h-full max-w-7xl md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                Add new bus
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="addBusModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <form>
                                <div className="bus-form">
                                    <div className={formNo === 1 ? "bus-form1" : "bus-form1 hidden"}>
                                        <h4 className="text-xl text-center mb-2">Enter bus details</h4>
                                        <div className="grid gap-6 px-0.5 py-0.5 mb-6 md:grid-cols-2 admin-form">
                                            <div>
                                                <label htmlFor="busName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bus Name</label>
                                                <input type="text" id="busName" name="busName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of the bus" onChange={handleChange} value={data.busName} />
                                            </div>
                                            <div>
                                                <label htmlFor="busSpeed" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Average Speed</label>
                                                <input type="text" id="busSpeed" name='busSpeed' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Average speed of bus" onChange={handleChange} value={data.busSpeed} />
                                            </div>
                                            <div>
                                                <label htmlFor="source" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source</label>
                                                <input type="text" id="source" name="source" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bus starting stop" onChange={handleChange} value={data.source} />
                                            </div>
                                            <div>
                                                <label htmlFor="destination" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Destination</label>
                                                <input type="text" id="destination" name='destination' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bus ending stop" onChange={handleChange} value={data.destination} />
                                            </div>

                                            <div>
                                                <label htmlFor="busSeats" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seats</label>
                                                <input type="number" id="busSeats" name='busSeats' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of seats" onChange={handleChange} value={data.busSeats} />
                                            </div>
                                            <div>
                                                <label htmlFor="busWindowSeats" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Window Seats</label>
                                                <input type="number" id="busWindowSeats" name='busWindowSeats' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of window seats" onChange={handleChange} value={data.busWindowSeats} />
                                            </div>
                                            <div>
                                                <label htmlFor="busFare" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bus Fare</label>
                                                <input type="number" id="busFare" name='busFare' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Fare per kilometer" onChange={handleChange} value={data.busFare} />
                                            </div>
                                            <div>
                                                <label htmlFor="busDistance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Trip</label>
                                                <input type="number" id="busDistance" name='busDistance' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Total trip in kilometer" onChange={handleChange} value={data.busDistance} />
                                            </div>
                                            <div>
                                                <label htmlFor="busStartTime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bus Start Time</label>
                                                <input type="datetime" id="busStartTime" name='busStartTime' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Starting time of bus" onChange={handleChange} value={data.busStartTime} />
                                            </div>
                                        </div>

                                        <div className='text-right'>
                                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleFormNext}>Next</button>
                                        </div>
                                    </div>
                                    <div className={formNo === 2 ? "bus-form2" : "bus-form2 hidden"}>
                                        <h4 className="text-xl text-center mb-2">Enter cities between source and destination</h4>
                                        <div className="admin-form">
                                            {data1.map((e, index) => {
                                                return (
                                                    <div key={index} className="flex pt-0.5 px-0.5 mb-2 items-center">
                                                        <div className="flex step2-box">
                                                            <input type="text" id="mid_city" name='mid_city' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of the city" onChange={(e) => {
                                                                handleChange1(e, index);
                                                            }} value={data1[index].mid_city} />
                                                            <input type="number" id="mid_city_distance" name='mid_city_distance' className="bg-gray-50 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Distance from source" onChange={(e) => {
                                                                handleChange1(e, index);
                                                            }} value={data1[index].mid_city_distance} />
                                                            <input type="number" id="mid_halt" name='mid_halt' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bus halt time in minute" onChange={(e) => {
                                                                handleChange1(e, index);
                                                            }} value={data1[index].mid_halt} />
                                                        </div>
                                                        {index === 0 ? <div className="add-btn">
                                                            <button type="button" className="w-full focus:outline-none ml-2 text-lg text-white rounded-md bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium py-1.5 mb-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={handleAddBtn}>+</button>
                                                        </div> : <div className="remove-btn">
                                                            <button type="button" className="w-full focus:outline-none ml-2 text-lg rounded-md text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium py-1.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={() => {
                                                                handleRemoveBtn(index);
                                                            }}>-</button>
                                                        </div>}
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        <div className="flex justify-between">
                                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleFormPrev}>Previos</button>
                                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleFormNext}>Next</button>
                                        </div>
                                    </div>
                                    <div className={formNo === 3 ? "bus-form3" : "bus-form3 hidden"}>
                                        <h4 className="text-xl text-center mb-2">Edit/Confirm bus details</h4>
                                        <div className="admin-form">
                                            <div className="flex mb-2">
                                                <div className='w-full mr-2'>
                                                    City
                                                </div>
                                                <div className='w-full mr-2'>
                                                    Trip distance
                                                </div>
                                                <div className='w-full mr-2'>
                                                    Trip fare
                                                </div>
                                                <div className='w-full mr-2'>
                                                    Bus Arrival time at stop
                                                </div>
                                            </div>
                                            {data2.map((e, index) => {
                                                return (
                                                    <div key={index} className="flex mb-2">
                                                        <div className='w-full mr-2'>
                                                            <p>{e.city}</p>
                                                        </div>
                                                        <div className='w-full mr-2'>
                                                            <input type="text" id="distance" name='distance' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Trip distance" onChange={(e) => {
                                                                handleChange2(e, index);
                                                            }} value={data2[index].distance} />
                                                        </div>
                                                        <div className='w-full mr-2'>
                                                            <input type="text" id="fare" name='fare' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Trip fare" onChange={(e) => {
                                                                handleChange2(e, index);
                                                            }} value={data2[index].fare} />
                                                        </div>
                                                        <div className='w-full mr-2'>
                                                            <input type="text" id="time" name='time' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Arrival time" onChange={(e) => {
                                                                handleChange2(e, index);
                                                            }} value={data2[index].time} />
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        <div className="flex justify-between">
                                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleFormPrev}>Previos</button>
                                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBusModal;

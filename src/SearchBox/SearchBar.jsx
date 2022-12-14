import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../context/MainContext';
import StateCity from './Modal/StateCity';

const SearchBar = () => {
    const context = useContext(MainContext);
    const { searchValue, setSearchValue }=context;
    const navigate=useNavigate();
    const [type, setType] = useState('');

    const handleChange=(e)=>{
        setSearchValue({...searchValue,[e.target.name]:e.target.value});
    };

    const handleCity=(city)=>{
        setSearchValue({...searchValue, [type]: city.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let flag=true;
        if(searchValue.from==='')
        {
            flag=false;
            document.getElementById('fromErr').classList.remove('hidden');
        }
        else
        {
            flag=true;
            document.getElementById('fromErr').classList.add('hidden');
        }

        if(searchValue.to==='')
        {
            flag=false;
            document.getElementById('toErr').classList.remove('hidden');
        }
        else
        {
            flag=true;
            document.getElementById('toErr').classList.add('hidden');
        }

        if(flag)
        {
            navigate('/buslist');
        }
    };

    return (
        <>
            <StateCity setSearchValue={setSearchValue} type={type} handleCity={handleCity} />
            <form onSubmit={handleSubmit} className="search-bar flex justify-between items-center bg-white">
                <div className="search-bar1">
                    <div onClick={()=>{
                        setType('from');
                        document.getElementById('stateCityModal').classList.toggle('hidden');
                    }}>
                        <label htmlFor="from" className="block mb-2 text-md font-semibold text-gray-500 dark:text-gray-300">Where From?</label>
                        <input type="text" id="from" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:purple-blue-500 dark:focus:border-blue-500" onChange={()=>{return}} value={searchValue.from} placeholder="Choose Departure" />
                        <span className="text-red-600 text-xs hidden" id="fromErr">Choose departure location</span> 
                    </div>
                </div>
                <div className="search-bar1">
                    <div onClick={()=>{
                        setType('to');
                        document.getElementById('stateCityModal').classList.toggle('hidden');
                    }}>
                        <label htmlFor="to" className="block mb-2 text-md font-semibold text-gray-500 dark:text-gray-300">Where To?</label>
                        <input type="text" id="to" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:purple-blue-500 dark:focus:border-blue-500" onChange={()=>{return}} value={searchValue.to} placeholder="Choose Destination" />
                        <span className="text-red-600 text-xs hidden" id="toErr">Choose departure location</span>
                    </div>
                </div>
                <div className="search-bar1">
                    <div>
                        <label htmlFor="leaving" className="block mb-2 text-md font-semibold text-gray-500 dark:text-gray-300">Leaving</label>
                        <input type="date" id="leaving" name="leaving" onChange={handleChange} value={searchValue.leaving} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="leaving" required />
                    </div>
                </div>
                <div className="search-bar1">
                    <button type="submit" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Book Now</button>
                </div>
            </form>
        </>
    )
}

export default SearchBar;

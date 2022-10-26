import React from 'react'
import BusCard from './BusCard'
import SearchBar from '../SearchBox/SearchBar'

const BusList = () => {

    return (
        <>
            <div className="busListMain">
                <div className="busListMain1">
                    <div className="bl1">
                        <SearchBar />
                    </div>
                    <h1 className="text-4xl font-bold mb-4 text-center">2 Buses Found</h1>
                    <BusCard />
                    <BusCard />
                </div>
            </div>
        </>
    )
}

export default BusList;
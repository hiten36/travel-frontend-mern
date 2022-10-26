import React from 'react'
import SearchBar from '../SearchBox/SearchBar'

const Home1 = () => {
    return (
        <>
            <div id="Home" className="flex items-center justify-between home-main">
                <div className="home-main1 mx-10">
                    <img src="/images/trip.svg" alt="Trip" />
                </div>
                <div className="home-main2 mx-10">
                    <h1 className="text-5xl my-3">Adventure is Worthwhile</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, optio? Excepturi maxime quae perspiciatis quibusdam laboriosam nostrum, sed dolore repudiandae nesciunt at tenetur.</p>
                    <button className="focus:outline-none text-white my-3 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Explore Now</button>
                </div>
            </div>
            <SearchBar />
        </>
    )
}

export default Home1

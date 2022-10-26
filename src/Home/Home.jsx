import React from 'react'
import Contact from './Contact'
import Home1 from './Home1'
import Package from './Package'
import Review from './Review'
import Service from './Service'
import Testimonial from './Testimonial'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <>
            <div className="main pb-10">
                <div className="main1">
                    <div className="main11">
                        <Home1 />
                        <Package />
                        <Service />
                        <Testimonial />
                        <Review />
                        <Contact />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home;
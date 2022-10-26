import React from 'react'

const Testimonial = () => {
    return (
        <>
            <div id="Testimonial" className="service package mt-20">
                <h1 className="text-5xl mb-5 font-semibold text-center">The Numbers Are Growing</h1>
                <div className="flex flex-wrap service1 package1 justify-center">
                    <div className="block package-card service-card p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div className="mb-6 text-center testi1">
                            <h4 className="text-3xl tracking-tight text-gray-900 dark:text-white">CUSTOMER</h4>
                        </div>
                        <div className="mb-8 text-center">
                            <h2 className="text-5xl tracking-tight text-purple-800 text-center font-bold dark:text-white">36 M</h2>
                        </div>
                        <div>
                            <p className="font-normal text-gray-700 text-center dark:text-gray-400">We are trusted by over 36 Million happy customers globally</p>
                        </div>
                    </div>
                    <div className="block package-card service-card p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div className="mb-6 text-center testi1">
                            <h4 className="text-3xl tracking-tight text-gray-900 dark:text-white">OPERATORS</h4>
                        </div>
                        <div className="mb-8 text-center">
                            <h2 className="text-5xl tracking-tight text-purple-800 font-bold dark:text-white">3500</h2>
                        </div>
                        <div>
                            <p className="font-normal text-gray-700 text-center dark:text-gray-400">Network of over 3500 bus operates world wide</p>
                        </div>
                    </div>
                    <div className="block package-card service-card p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div className="mb-6 text-center testi1">
                            <h4 className="text-3xl tracking-tight text-gray-900 dark:text-white">BUS TICKETS</h4>
                        </div>
                        <div className="mb-8 text-center">
                            <h2 className="text-5xl tracking-tight text-purple-800 font-bold dark:text-white">220+ M</h2>
                        </div>
                        <div>
                            <p className="font-normal text-gray-700 text-center dark:text-gray-400">Over 220 Million trips book by us</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial

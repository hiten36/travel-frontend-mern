import React from 'react'

const BusCard = () => {
    const func=(id)=>{
        if(document.querySelector('.bc110').id!==id)
        {
            if(document.querySelector('.bc110'))
            {
                document.querySelector('.bc110').children[1].classList.toggle('hidden');
                document.querySelector('.bc110').classList.remove('bc110');
                // console.log(document.querySelector('.bc110').children[1]);
            }
            if(!document.getElementById(id).classList.contains('bc110'))
            {
                document.getElementById(id).classList.add('bc110');
                document.getElementById(id).children[1].classList.toggle('hidden');
            }
        }
    };

    const policyClick=()=>{
        document.querySelector('.bc10').classList.toggle('bc10_hid');
    };

    const addSeat=(e)=>{
        e.target.classList.toggle('seat-box-current');
    };

    const selectSeat=()=>{
        document.querySelector('.busSeat').classList.toggle('hidden');
    };

    return (
        <>
            <div className="busCard bg-white mb-7 rounded-lg shadow-lg hover:shadow-purple-800/50 cursor-pointer">
                <div className="busCard1 flex justify-between">
                    <div className="busCard11 w-full p-6">
                        <div className="bc1">
                            <div className="bc11">
                                <h4 className="text-2xl font-semibold">Bus 21</h4>
                                <div className="flex my-3">
                                    <p>Sleeper Non AC</p>
                                    <p className="px-6">20 Seats</p>
                                    <p>15 Windows</p>
                                </div>
                                <div className="flex py-4 bc113">
                                    <div className="flex items-end">
                                        <p className="text-xl font-medium mr-0.5">8:00,</p>
                                        <p className="text-gray-400 text-sm">15 NOV</p>
                                    </div>
                                    <div className="mx-8 flex items-end">
                                        <p className="text-xl font-medium mr-0.5">3</p>
                                        <p className="text-gray-400 text-sm mr-2">hrs</p>
                                        <p className="text-xl font-medium mr-0.5">20</p>
                                        <p className="text-gray-400 text-sm">min</p>
                                    </div>
                                    <div className="flex items-end">
                                        <p className="text-xl font-medium mr-0.5">11:00,</p>
                                        <p className="text-gray-400 text-sm">15 Nov</p>
                                    </div>
                                </div>
                                <p onClick={policyClick} className="mt-4 text-purple-800">Policies</p>
                            </div>
                            {/* flex */}
                            <div className="bc10 w-full justify-between bc10_hid">
                                <div onMouseOver={()=>{
                                    func("pop1");
                                }} id="pop1" className="bc111 bc110 mr-4">
                                    <h4 className="text-md font-semibold text-purple-800">CANCELLATION</h4>
                                    <div className="mt-3 flex justify-between">
                                        <div className="bc112">
                                            <b>Cancellation Time</b>
                                            <p className="my-1">more than 12 hrs before travel</p>
                                            <p>0 to 12 hr(s) before travel</p>
                                        </div>
                                        <div className="bc112">
                                            <b>Penalty %</b>
                                            <p className="my-1">50 %</p>
                                            <p>100 %</p>
                                        </div>
                                    </div>
                                </div>
                                <div onMouseOver={()=>{
                                    func("pop2");
                                }} id="pop2"  className="bc111 mr-4">
                                    <h4 className="text-md font-semibold text-purple-800">CHILD PASSENGER</h4>
                                    <div className="mt-3 hidden">
                                        <ul className="list-disc dark:text-gray-400">
                                            <li>Children above the age of 3 will need a ticket</li>
                                        </ul>
                                    </div>
                                </div>
                                <div onMouseOver={()=>{
                                    func("pop3");
                                }} id="pop3"  className="bc111 mr-4">
                                    <h4 className="text-md font-semibold text-purple-800">LUGGAGE</h4>
                                    <div className="mt-3 hidden">
                                        <ul className="list-disc dark:text-gray-400">
                                            <li>2 pieces of luggage will be accepted free of charge per passenger. Excess items will be chargeable</li>
                                            <li>Excess baggage over 15 kgs per passenger will be chargeable</li>
                                        </ul>
                                    </div>
                                </div>
                                <div onMouseOver={()=>{
                                    func("pop4");
                                }} id="pop4"  className="bc111 mr-4">
                                    <h4 className="text-md font-semibold text-purple-800">PETS</h4>
                                    <div className="mt-3 hidden">
                                        <ul className="list-disc dark:text-gray-400">
                                            <li>Pets are not allowed</li>
                                        </ul>
                                    </div>
                                </div>
                                <div onMouseOver={()=>{
                                    func("pop5");
                                }} id="pop5"  className="bc111 mr-4">
                                    <h4 className="text-md font-semibold text-purple-800">LIQUIR</h4>
                                    <div className="mt-3 hidden">
                                        <ul className="list-disc dark:text-gray-400">
                                            <li>Carrying or consuming liquor inside the bus is prohibited. Bus operator reserves the right to deboard drunk passengers.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div onMouseOver={()=>{
                                    func("pop6");
                                }} id="pop6"  className="bc111 mr-4">
                                    <h4 className="text-md font-semibold text-purple-800">PICKUP TIME</h4>
                                    <div className="mt-3 hidden">
                                        <ul className="list-disc dark:text-gray-400">
                                            <li>Bus operator is not obligated to wait beyond the scheduled departure time of the bus. No refund request will be entertained for late arriving passengers.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bc2">
                            <div className="bc21">
                                <div className="bc212 flex justify-center">
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                    <div className="border-gray-300"></div>
                                </div>
                                <div className="bc213">
                                    <div>
                                        <div className="flex">
                                            <div></div>
                                            <b>Already Booked</b>
                                        </div>
                                        <div>
                                            <b>Seats Selected</b>
                                            <p>UD-12 UD-3</p>
                                        </div>
                                    </div>
                                    <div>
                                        <b>₹ 0</b>
                                    </div>
                                </div>
                                <div>
                                    <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="busCard12 p-6 rounded-r-lg bg-slate-300">
                        <div className="busCard121 flex flex-col h-full text-right justify-between">
                            <div>
                                <p className="text-gray-600"> Starting From</p>
                                <h2 className="text-4xl font-bold">₹ 199</h2>
                            </div>
                            <div>
                                <button onClick={selectSeat} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 w-full focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">SELECT SEATS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="busSeat hidden bg-white flex rounded-lg shadow-lg mb-6">
                <div className="busSeat1 py-6">
                    <div className="busSeat11 flex flex-wrap justify-center mb-3">
                        <div onClick={addSeat} className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box seat-box-active"></div>
                        <div className="seat-box seat-box-active"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box seat-box-active"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box"></div>
                        <div className="seat-box seat-box-active"></div>
                    </div>
                    <div className="busSeat12 mb-3 flex items-center">
                        <div className="flex items-center">
                            <div style={{marginLeft:"0px"}} className="seat-box mr-2 seat-box-active">

                            </div>
                            <div className="font-bold">
                                Already Booked
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold"> 
                            ₹ 300
                        </h2>
                    </div>
                    <div className="busSeat13 mb-3">
                        <div className="font-bold">
                            Seats Selected
                        </div>
                        <div className="flex">
                            <p className="mr-2">UD-19</p>
                            <p className="mr-2">UD-22</p>
                        </div>
                    </div>
                    <button type="button" className="focus:outline-none text-white w-full bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Book Seats</button>
                </div>
            </div>
        </>
    )
}

export default BusCard;

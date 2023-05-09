import React from 'react'
import { IoIosPeople } from 'react-icons/io'
import { FaHandHolding } from 'react-icons/fa'

const FirstCards = () => {



    return (
        <div name='summary'>
            <h1 className='text-xl py-1.5 ml-0 pl-5 md:pl-2'>Summary</h1>

            <div class="firstCards flex w-screen flex-col md:flex-row items-center">
                {/* Reputation Card */}
                <div class="firstCard lg:w-[320px] bg-[#F7F7F7] text-center px-4 py-2 rounded-lg border border-gray-200 shadow-md">
                    <div className='first'>
                        <div className='flex mt-1 justify-center items-center'>
                            <h1 className="text-4xl font-bold text-gray-900"><IoIosPeople /></h1>
                        </div>
                        <h1 className='mt-1 text-md font-bold'>Reputation is how the community thanks to you</h1>
                        <div className='mt-4'>
                            <p className=" text-xs text-gray-700">When users upvote your helpful posts, you'll earn reputation and unlock new privileges.</p>
                            <a href="#" className="p-2 mt-11 mb-2 flex justify-center text-xs text-gray-900 bg-[#e7e7e7] rounded-lg hover:bg-[#e2dcdc]">
                                Learn more about reputation and privileges
                            </a>
                        </div>
                    </div>
                </div>

                {/* Badge Card */}
                <div class="firstCard lg:w-[285px] bg-[#F7F7F7] text-center px-4 py-2 m-3 rounded-lg border border-gray-200 shadow-md">
                    <div className='first'>
                        <h1 className="mt-2 font-bold text-lg text-gray-900">BADGES</h1>
                        <h1 className='text-center mt-5 p-1 text-sm font-medium text-gray-900 bg-[#e7e7e7] rounded-lg hover:bg-[#e2dcdc]'>1</h1>
                        <div className='secondCardBottom flex justify-around mt-20 mb-4'>
                            <div className='newest'>
                                <p className='mb-2 text-xs'>Newest</p>
                                <a href="#" className="p-2 text-xs text-gray-900 bg-[#e7e7e7] rounded-lg hover:bg-[#e2dcdc]">Informed</a>
                            </div>
                            <div className='autobiographerBottom'>
                                <div className='flex space-x-4 mb-2'>
                                    <p className='flex text-xs'>Next Badge</p>
                                    <p className='text-xs'>0/1</p>
                                </div>
                                <a href="#" className="p-2 autobiographer text-xs text-gray-900 bg-[#e7e7e7] rounded-lg hover:bg-[#e2dcdc]">Autobiographer</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Measure Card */}
                <div class="firstCard lg:w-[255px] lg:h-[247px] md:h-[247px] bg-[#F7F7F7] text-center px-4 py-2 rounded-lg border border-gray-200 shadow-md">
                    <div>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className="mb-2 text-4xl font-bold text-gray-900"><FaHandHolding /></h1>
                        </div>
                        <h1 className="mb-2 text-md font-bold tracking-tight text-gray-900">Measure your impact</h1>
                        <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">Your posts and helpful actions here help hundreds or thousands of people searching for help.</p>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default FirstCards
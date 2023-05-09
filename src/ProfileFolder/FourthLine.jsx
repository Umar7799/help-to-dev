import React from 'react'
import { BiAward } from 'react-icons/bi'
import { BsAward, BsAwardFill } from 'react-icons/bs'

const FourthLine = () => {
    return (
        <div name='badges' className=''>
            <h1 className='text-xl ml-6 md:ml-9 lg:ml-2 mb-2 mt-3'>Badges</h1>

            <div class="fourthCards gap-4 flex bg-grey-lighter w-screen items-center">

                {/* GOLD BADGE */}
                <div className="fourthCard lg:h-[260px] lg:w-[265px] p-4 text-center rounded-lg bg-[#F7F7F7] border border-gray-200 shadow-md">
                    <div className='flex justify-center items-center'>
                        <h1 className="text-4xl font-bold  text-gray-900"><BsAwardFill /></h1>
                    </div>
                    <p className="font-normal mt-10 mb-[70px] text-xs text-gray-700 dark:text-gray-400">You don’t have a gold badge yet. Write an answer that scores 100 or more to earn your first.</p>
                    <a href="#" className="p-2 text-xs flex sm:block text-gray-900 bg-gray-300 rounded-lg hover:bg-gray-700 hover:text-white">
                        Browse questions
                    </a>
                </div>

                {/* SILVER BADGE */}
                <div className="fourthCard lg:h-[260px] lg:w-[265px] p-4 text-center bg-[#F7F7F7] rounded-lg border border-gray-200 shadow-md">
                    <div className='flex justify-center items-center'>
                        <h1 className="text-4xl font-bold  text-gray-900"><BsAward /></h1>
                    </div>
                    <p className="font-normal mt-10 mb-[70px] text-xs text-gray-700 dark:text-gray-400">You don’t have a silver badge yet. Ask a question that scores 25 or more to earn your first.</p>
                    <a href="#" className="p-2 text-xs flex sm:block text-gray-900 bg-gray-300 rounded-lg hover:bg-gray-700 hover:text-white">
                        Browse questions
                    </a>
                </div>

                {/* BRONZE CARD */}
                <div className="fourthCard lg:h-[260px] lg:w-[260px] md:min-w-[200px] p-4 text-center bg-[#F7F7F7] rounded-lg border border-gray-200 shadow-md">
                    <div className='flex justify-center items-center'>
                        <h1 className="text-4xl font-bold  text-gray-900"><BiAward /></h1>
                    </div>
                    <div className='text-start'>
                        <h1 className='text-md pl-10 font-semibold'>1</h1>
                        <p className='text-sm'>Bronze Bagde</p>
                    </div>
                    <div className='flex mt-28 justify-between'>
                        <a href="#" className="p-2 mr-2 text-xs flex sm:block font-medium text-gray-900 bg-gray-300 rounded-lg hover:bg-gray-700 hover:text-white">Informed</a>
                        <p className='pt-2 text-xs'>Sen 26</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default FourthLine
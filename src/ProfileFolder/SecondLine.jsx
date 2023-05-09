import React from 'react'

const SecondLine = () => {
    return (
        <div className='doubleLine flex gap-5 mt-3'>
            {/* ANSWERS */}
            <div name='answers'>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-xl pt-4 pl-2'>Answers</h1>
                        <div className="rounded-md shadow-sm flex pt-3">
                            <a href="#" className="px-[6px] py-[6px] text-xs font-medium text-gray-900 rounded-l-lg border border-gray-700 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Score</a>
                            <a href="#" className="px-[6px] py-[6px] text-xs font-medium border-y border-gray-700 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Newest</a>
                            <a href="#" className="px-[6px] py-[6px] text-xs font-medium rounded-r-lg border border-gray-700 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Activity</a>
                        </div>
                    </div>
                </div>
                <div className="box lg:w-[430px] h-[70px] p-2 mt-2 items-center flex justify-center bg-[#fdfcfc] rounded-lg border border-gray-500 shadow-md">
                    <a href="#" className='text-sm'>You have not answered any questions</a>
                </div>
            </div>
            {/* QUESTIONS */}
            <div name='questions'>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-xl pt-4 pl-2'>Questions</h1>
                        <div className="rounded-md shadow-sm flex pt-3">
                            <a href="#" className="px-[6px] py-[6px] text-xs font-medium text-gray-900 rounded-l-lg border border-gray-700 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Score</a>
                            <a href="#" className="px-[6px] py-[6px] text-xs font-medium border-y border-gray-700 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Newest</a>
                            <a href="#" className="px-[6px] py-[6px] text-xs font-medium border-l border-y border-gray-700 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Views</a>
                            <a href="#" className="px-[6px] py-[6px] text-xs font-medium rounded-r-lg border border-gray-700 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Activity</a>
                        </div>
                    </div>
                </div>
                <div className="box w-[430px] h-[70px] p-2 mt-2 items-center flex justify-center bg-[#fdfcfc] rounded-lg border border-gray-500 shadow-md">
                    <a href="#" className='text-sm'>You have not asked any questions</a>
                </div>

            </div>
        </div>
    )
}

export default SecondLine
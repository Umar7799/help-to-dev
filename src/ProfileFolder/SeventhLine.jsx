import React from 'react'

const SeventhLine = () => {
    return (
        <div className='doubleLine flex gap-5 mt-3'>
            {/* ARTICLES */}
            <div name='articles'>
                <div className='flex justify-between'>
                    <h1 className='text-xl pt-4 pl-2'>Articles</h1>
                    <div className="rounded-md shadow-sm flex pt-3">
                        <a href="#" className="px-[6px] py-[6px] text-xs font-medium text-gray-900 rounded-l-lg border border-gray-700 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Score</a>
                        <a href="#" className="px-[6px] py-[6px] text-xs font-medium border-y border-gray-700 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Activity</a>
                        <a href="#" className="px-[6px] py-[6px] text-xs font-medium border-l border-y border-gray-700 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Newest</a>
                        <a href="#" className="px-[6px] py-[6px] text-xs font-medium rounded-r-lg border border-gray-700 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Views</a>
                    </div>
                </div>
                <div className="box w-[430px] h-[70px] p-4 mt-2 items-center flex justify-center text-sm bg-[#fdfcfc] rounded-lg border border-gray-500 shadow-md">
                    <a href="#">You have not created any articles.</a>
                </div>
            </div>
            {/* VOTES CAST */}
            <div name='vote'>
                <div className='flex justify-between'>
                    <h1 className='text-xl pt-4 pl-2'>Votes cast</h1>

                </div>
                <div className="box w-[430px] h-[70px] p-4 mt-2 items-center flex justify-center text-sm bg-[#fdfcfc] rounded-lg border border-gray-500 shadow-md">
                    <a href="#">You have not cast any votes</a>
                </div>
            </div>
        </div>

    )
}

export default SeventhLine
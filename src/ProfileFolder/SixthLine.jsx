import React from 'react'

const SixthLine = () => {
    return (
        <div className='doubleLine flex gap-5 mt-3'>
            {/* ACCOUNTS */}
            <div name='accounts'>
                <div className='flex justify-between'>
                    <h1 className='text-xl pt-4 pl-2'>Accounts</h1>
                </div>
                <div className="box w-[430px] h-[70px] p-4 mt-2 items-center flex justify-between bg-[#fdfcfc] rounded-lg border border-gray-500  shadow-md">
                    <a href="#">helpToDev</a>
                    <p className='font-semibold'>1</p>
                </div>
            </div>
            {/* ACTIVE BOUNTIES */}
            <div name='bounties'>
                <div className='flex justify-between'>
                    <h1 className='text-xl pt-4 pl-2'>Active bounties</h1>
                    <div className="rounded-md shadow-sm flex pt-3">
                        <a href="#" className="px-[6px] py-[6px] text-xs font-medium text-gray-900 rounded-l-lg border border-gray-700 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Active</a>
                        <a href="#" className="px-[6px] py-[6px] text-xs font-medium border-y border-gray-700 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Offered</a>
                        <a href="#" className="px-[6px] py-[6px] text-xs font-medium rounded-r-lg border border-gray-700 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Earned</a>
                    </div>
                </div>
                <div className="box w-[430px] h-[70px] p-4 mt-2 items-center flex justify-center text-sm bg-[#fdfcfc] rounded-lg border border-gray-500 shadow-md">
                    <a href="#">You have no active bounties</a>
                </div>


            </div>
        </div>
    )
}

export default SixthLine
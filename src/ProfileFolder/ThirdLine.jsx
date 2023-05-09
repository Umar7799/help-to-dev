import React from 'react'

const ThirdLine = () => {
    return (
        <div className='doubleLine flex gap-5'>
            {/* TAGS */}
            <div name='tags'>
                <div className='flex justify-between'>
                    <h1 className='text-xl pt-4 pl-2'>Tags</h1>
                </div>
                <div className="box w-[430px] h-[70px] p-2 mt-2 items-center flex justify-center bg-[#fdfcfc] rounded-lg border border-gray-500 shadow-md">
                    <a href="#" className='text-sm'>You have not participated in any tags</a>
                </div>

            </div>
            {/* REPUTATION */}
            <div name='reputation'>
                <div className='flex justify-between'>
                    <h1 className='text-xl pt-4 pl-2'>Reputation</h1>
                </div>
                <div className="box w-[430px] h-[70px] p-2 mt-2 items-center flex justify-center bg-[#fdfcfc] rounded-lg border border-gray-500 shadow-md">
                    <a href="#" className='text-sm'>You have no recent reputation changes.</a>
                </div>

            </div>
        </div>

    )
}

export default ThirdLine
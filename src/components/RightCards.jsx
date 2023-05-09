import React from 'react'
import { BsSearch } from 'react-icons/bs'

const RightCards = () => {
    return (
        <div className="hidden lg:block mx-4 mt-10">



            {/* WATCH A TAG */}
            <div className="p-6 pb-4 mt-8 text-center bg-[#F7F7F7] rounded-lg border border-gray-200 shadow-md">
                <h1 className="mb-2 text-xl font-medium text-gray-900">Watched Tags</h1>
                <div className='flex justify-center'>
                    <h1 className='text-4xl pb-2'><BsSearch /></h1>
                </div>
                <p className="mb-5 text-sm text-gray-700 dark:text-gray-400">Watch tags to curate your list of questions.</p>
                <a href="#" className="inline-flex items-center p-[8px] text-xs text-center rounded-lg  border border-gray-500 bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                    Watch a Tag
                </a>
            </div>

            {/* IGNORE A TAG */}
            <div className="p-6 mt-4 text-center bg-[#F7F7F7] rounded-lg border border-gray-200 shadow-md">
                <h1 className="mb-2 text-xl font-medium text-gray-900">Ignored Tags</h1>
                <ul className='pb-2 space-y-2'>
                    <li>
                        <a href="#" className="inline-flex items-center px-[10px] py-[6px] text-xs text-center rounded-lg border border-gray-500 bg-[#F7F7F7] hover:bg-[#e2dcdc]">css</a>
                    </li>
                    <li>
                        <a href="#" className="inline-flex items-center px-[10px] py-[6px] text-xs text-center rounded-lg border border-gray-500 bg-[#F7F7F7] hover:bg-[#e2dcdc]">java</a>

                    </li>
                    <li>
                        <a href="#" className="inline-flex items-center px-[10px] py-[6px] text-xs rounded-lg border border-gray-500 bg-[#F7F7F7] hover:bg-[#e2dcdc]">react</a>

                    </li>
                </ul>
                <a href="#" className="inline-flex items-center px-[10px] py-[6px] text-xs text-center rounded-lg border border-gray-900 bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                    Add an ignored tag
                </a>
            </div>

            {/* RELATED TAGS */}
            <div className="p-6 mt-4 text-center bg-[#F7F7F7] rounded-lg border border-gray-200 shadow-md">
                <h1 className="text-center mb-2 text-xl font-medium text-gray-900">Related Tags</h1>
                <div className='flex'>
                    <ul className='pb-2 leading-10 text-xs'>

                        <li className='space-x-3'>
                            <a href="#" className="inline-flex items-center px-[10px] py-[6px] text-xs text-centerborder border border-gray-500 bg-[#F7F7F7] hover:bg-[#e2dcdc] rounded-lg">css</a>
                            <span>×</span>
                            <span>123421</span>
                        </li>

                        <li className='space-x-3'>
                            <a href="#" className="inline-flex items-center px-[10px] py-[6px] text-xs text-centerborder border border-gray-500 bg-[#F7F7F7] hover:bg-[#e2dcdc] rounded-lg">java</a>
                            <span>×</span>
                            <span>12314</span>
                        </li>

                        <li className='space-x-3'>
                            <a href="#" className="inline-flex items-center px-[10px] py-[6px] text-xs text-centerborder border border-gray-500 bg-[#F7F7F7] hover:bg-[#e2dcdc] rounded-lg">react</a>
                            <span>×</span>
                            <span>78590</span>
                        </li>

                    </ul>

                </div>

            </div>

        </div>
    )
}

export default RightCards
import React from 'react'

const SavedAnswers = () => {
    return (
        <div>
            <div className='flex mx-4 my-2 h-[155px] rounded border-[1px] border-gray-300 shadow'>
                <div className='w-[10%] ml-3 mr-3 sm:ml-5 sm:mr-2 mt-4'>
                    <ul className='whitespace-nowrap leading-8 text-xs pt-4'>
                        <li><span>0</span> votes</li>
                        <li><span>1</span> answers</li>
                        <li><span>3</span> views</li>
                    </ul>
                </div>

                <div className='w-[85%]'>
                    <div className='h-[105px] p-3 sm:px-0 pt-3 overflow-hidden'>
                        <a href="#" className='text-red-700 text-xl'>Answer</a>
                        <a href="#" className='text-blue-700 text-lg'>How to setup react project?</a>
                        <p className='text-xs pt-2'>Lorem ipsum dolor Aspernatur fuga explicabo, iste saepe et. Ipsum explicabo, possimus provident minus voluptatum libero nostrum sapiente sequi consequatur, maiores dolorem praesentium earum omnis, nobis quibusdam corporis! Neque nisi eaque minima.</p>
                    </div>
                    <div className='flex justify-between pt-3 pl-2 sm:pl-0'>
                        <ul className='flex space-x-2'>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">Tech</a></li>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">react</a></li>
                        </ul>
                        <div className='flex text-xs pr-6 pt-1 text-gray-600'>
                            {/* <img src={avatar} alt="avatar" className='w-[25px] rounded' /> */}
                            <h1>&nbsp;username&nbsp;</h1>
                            <p>asked min ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavedAnswers
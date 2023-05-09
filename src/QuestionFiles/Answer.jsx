import React, { useState } from 'react'
import avatar from '../pictures/avatar4.jpg'
import { BsBookmark, BsBookmarkCheck } from 'react-icons/bs'

import { GetInfo } from '../Contexts/QuestionContext'


const Answer = () => {

    const { tryThis, expInfo, answerImage, showTheAnswer } = GetInfo()


    const [savedQuestion, setSavedQuestion] = useState(false)

    const saveQuesiton = (e) => {
        setSavedQuestion(!savedQuestion)
    }


    return (
        <>
            {showTheAnswer ? <div className='flex my-3 border-[1px] rounded border-l-0 shadow  bg-[#fdfbfb]'>
                < div className='w-full' >
                    {/* TRY THIS: */}
                    < div className='pt-2' >
                        <p className='text-sm pt-0 p-3 pl-2'>{tryThis}</p>
                    </div >
                    {/* CODE SAMPLE */}
                    {/* <div className='mx-2 p-2 bg-red-400'>
                    <p> components in React</p>
                </div> */}
                    {/* A PICTURE */}
                    <div className='rounded border border-gray-300 p-3 m-3'>
                        {answerImage ? <img src={answerImage} /> : ''}
                    </div>

                    {/* EXPLAIN THE CODE */}
                    <div className='pt-2'>
                        <p className='text-sm pt-0 p-3 pl-2'>{expInfo}</p>
                    </div>

                    <div className='flex justify-between p-2'>
                        <ul className='flex space-x-2'>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">tech</a></li>
                        </ul>
                        <div className='flex text-xs pr-6 text-gray-600'>
                            <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                            <h1>&nbsp;username&nbsp;</h1>
                            <p>answered min ago</p>
                        </div>
                        <div>
                            <h1 onClick={saveQuesiton} className='text-xl'>{!savedQuestion ? <BsBookmark /> : <BsBookmarkCheck />}</h1>
                        </div>
                    </div>
                </div>
            </div> : ''}


        </>

    )
}

export default Answer
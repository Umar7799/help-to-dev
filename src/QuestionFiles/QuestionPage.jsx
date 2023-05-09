import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import LeftBar from '../components/LeftBar'
import RightCards from '../components/RightCards'
import Footer from '../components/Footer'
import Answer from './Answer'
import FillAnswer from './FillAnswer'
import { Link } from 'react-router-dom'
import avatar from '../pictures/avatar4.jpg'
import './askQuestion.css'
import { BsBookmark, BsBookmarkCheck } from 'react-icons/bs'

import { GetInfo } from '../Contexts/QuestionContext'



const QuestionPage = () => {

    const { title, whatIsProblem, whatExp, tags, questionImage } = GetInfo()



    const [savedQuestion, setSavedQuestion] = useState(false)

    const saveQuesiton = (e) => {
        setSavedQuestion(!savedQuestion)
    }

    return (
        <div>
            <Navbar />
            <div className="flex">
                <LeftBar />
                <div className="flex-initial w-full px-4 lg:pr-0">
                    {/* TOP TITLE SECTION */}
                    <div className='flex w-full mt-10 justify-between min-h-[155px]'>
                        <div className='pt-4 sm:pt-7 pl-7 pr-0'>
                            <div className='mt-2 sm:mt-0'>
                                <h1 className='text-blue-500 text-lg mr-2'>{title}</h1>
                            </div>

                            <div className='pb-1 mt-4 sm:mt-8 block sm:flex'>
                                <div className='flex text-xs text-gray-600'>
                                    <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                                    <div className='flex'>
                                        <h1>&nbsp;username&nbsp;</h1>
                                        <p>asked 45 min ago</p>
                                        <p className='px-2'>|</p>
                                    </div>
                                </div>
                                <div className='flex text-xs pl-7  px-6 sm:px-0 text-gray-600'>
                                    <div className='flex'>
                                        <p>Viewed 8 times</p>
                                        <p className='px-2'>|</p>
                                        <p className='underline'>4 answers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Ask Question */}
                        <div>
                            <h1 className="p-2 mt-7 font-medium rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                                <Link className='whitespace-nowrap' to='AskQuestion'>Ask Question</Link>
                            </h1>
                        </div>
                    </div>
                    <hr />

                    {/* QUESTION */}
                    <div className='w-full flex mb-2 mt-2 border-[1px] rounded border-l-0 shadow bg-[#fdfbfb]'>

                        <div className='w-full'>
                            <div className='pt-2'>
                                <p className='text-sm pt-0 p-3 pl-2'>{whatIsProblem}</p>
                            </div>

                            {/* QUESTION IMAGE */}
                            <div className='rounded border border-gray-300 p-3 m-3'>
                                {questionImage ? <img src={questionImage} /> : ''}
                            </div>

                            {/* CODE SAMPLE */}
                            {/* <div className='mx-2 p-2 bg-red-400'>
                                <p>TailwindCSS animations on conditionally rendered components in React</p>
                            </div> */}

                            <div className='pt-2'>
                                <p className='text-sm pt-0 p-3 pl-2'>{whatExp}</p>
                            </div>

                            <div className='flex justify-between p-2'>
                                <ul className='flex space-x-2'>
                                    <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">{tags}</a></li>
                                </ul>
                                <div className='flex text-xs pr-6 text-gray-600'>
                                    <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                                    <h1>&nbsp;username&nbsp;</h1>
                                    <p>asked min ago</p>
                                </div>
                                <div>
                                    <h1 onClick={saveQuesiton} className='text-xl'>{!savedQuestion ? <BsBookmark /> : <BsBookmarkCheck />}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <Answer />
                    <hr />
                    <FillAnswer />
                </div>
                <RightCards />
            </div>
            <div className='pt-[310px] md:pt-0 mt-[20px]'>
                <Footer />
            </div>
        </div>
    )
}

export default QuestionPage
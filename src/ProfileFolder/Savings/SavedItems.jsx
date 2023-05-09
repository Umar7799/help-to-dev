import React, { useState } from 'react'
import SavedAnswers from './SavedAnswers'
import SavedQuestions from './SavedQuestions'



const SavedItems = () => {
    const [allActive, setAllActive] = useState(false)
    const [answerActive, setAnswerACtive] = useState(false)
    const [questionActive, setQuestionActive] = useState(false)

    const [all, setAll] = useState(true)
    const [questions, setQuestions] = useState(false)
    const [answers, setAnswers] = useState(false)

    const isAllActive = () => {
        setAllActive(true)
        setAnswerACtive(false)
        setQuestionActive(false)
        setAll(true)
        setQuestions(false)
        setAnswers(false)
    }

    const isQuestionActive = () => {
        setQuestionActive(true)
        setAllActive(false)
        setAnswerACtive(false)
        setAll(false)
        setQuestions(true)
        setAnswers(false)
    }

    const isAnswerActive = () => {
        setAnswerACtive(true)
        setAllActive(false)
        setQuestionActive(false)
        setAll(false)
        setQuestions(false)
        setAnswers(true)
    }

    return (
        <>
            <div className='flex md:hidden mb-2'>
                {/* FILTERS */}
                <h1 className='whitespace-nowrap pl-4 text-lg font-bold'>Saved Items</h1>
                <ul className='flex pt-1 space-x-5 pl-7 cursor-pointer'>
                    <li onClick={isAllActive} className={allActive ? `px-4 border border-gray-300 rounded-2xl bg-gray-200 shadow-md` : `px-4 border border-gray-300 rounded-2xl`}>All</li>
                    <li onClick={isAnswerActive} className={answerActive ? `px-4 border border-gray-300 rounded-2xl bg-gray-200 shadow-md` : `px-4 border border-gray-300 rounded-2xl`}>Answers</li>
                    <li onClick={isQuestionActive} className={questionActive ? `px-4 border border-gray-300 rounded-2xl bg-gray-200 shadow-md` : `px-4 border border-gray-300 rounded-2xl`}>Questions</li>
                </ul>
            </div>

            <div className='flex'>
                {/* FILTERS */}
                <div className='w-[250px] hidden md:block'>
                    <h1 className='whitespace-nowrap pt-1 ml-4 text-lg font-bold'>Saved Items</h1>
                    <ul className='space-y-2 leading-8 cursor-pointer pl-4 pt-3'>
                        <li onClick={isAllActive} className={allActive ? `pl-4 border border-gray-300 rounded-2xl bg-gray-200 shadow-md` : `pl-4 border border-gray-300 rounded-2xl`}>All</li>
                        <li onClick={isAnswerActive} className={answerActive ? `pl-4 border border-gray-300 rounded-2xl bg-gray-200 shadow-md` : `pl-4 border border-gray-300 rounded-2xl`}>Answers</li>
                        <li onClick={isQuestionActive} className={questionActive ? `pl-4 border border-gray-300 rounded-2xl bg-gray-200 shadow-md` : `pl-4 border border-gray-300 rounded-2xl`}>Questions</li>
                    </ul>
                </div>

                {/* SAVED ITEMS: Questions & Answers */}
                <div>
                    <div className={all || questions ? '' : 'hidden'}>
                        <SavedQuestions />
                    </div>
                    <div className={all || answers ? '' : 'hidden'}>
                        <SavedAnswers />
                    </div>
                </div>

            </div>
        </>
    )
}

export default SavedItems
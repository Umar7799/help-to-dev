import React, { useState, useRef, useEffect } from 'react'
import { GetInfo } from '../Contexts/QuestionContext'

const FillAnswer = () => {

    const { getPicForAnswer, getBlankOfAnswer, tryIt, getExp } = GetInfo()
    const [tryThis, setTrythis] = useState();
    const [explaining, setExplaining] = useState()
    const [picture, setPicture] = useState();



    const getTryItInfo = useRef(null)
    const handleTryThis = (event) => {
        setTrythis(event.target.value)
        tryIt(event.target.value)
    };

    const getExplainingInfo = useRef(null)
    const getExplaning = (event) => {
        setExplaining(event.target.value)
        getExp(event.target.value)
    }


    function handleChange(e) {
        setPicture(URL.createObjectURL(e.target.files[0]));
    }
    getPicForAnswer(picture)

    function handleShowAnswer(e) {
        e.preventDefault()
        getBlankOfAnswer(true)

    }

    const handleDiscard = (e) => {
        e.preventDefault()
        setTrythis('')
        setExplaining('')
        setPicture(null)
    }



    return (
        <div className='my-3 border-[1px] rounded border-l-0 shadow bg-[#fdfbfb]'>
            <h1 className='m-4'>Your answer ?</h1>
            <form>
                <div className='m-4 text-xs'>
                    <div className='flex'>
                        <input className='text-sm' type="file" onChange={handleChange} />
                    </div>
                    <textarea onChange={handleTryThis} className='rounded outline-0 my-4 p-2 h-40 block w-full border border-gray-500' placeholder='Try this:' ref={getTryItInfo} value={tryThis} required></textarea>
                    <textarea onChange={getExplaning} className='rounded outline-0 my-4 p-2 h-40 block w-full border border-gray-500' placeholder='Explaining:' ref={getExplainingInfo} value={explaining} required></textarea>
                    <div className='bg-gray-400 p-4 text-xs rounded space-y-4'>
                        <div className='flex justify-between'>
                            <h1>Thanks for contributing an answer to HelpToDev</h1>
                            <h1 className='cursor-pointer font-bold pr-4'>x</h1>
                        </div>
                        <ul className='list-disc list-inside space-y-4'>
                            <li>Please be sure to answer the question. Provide details and share your research!</li>
                            <h1>But avoid …</h1>
                            <li>Asking for help, clarification, or responding to other answers.</li>
                            <li>Making statements based on opinion; back them up with references or personal experience.</li>
                        </ul>
                    </div>
                    {/* IF USER IS NOT LOGGED IN  (SIGN UP OR LOGIN) */}
                    <div></div>
                    <div className='mt-4 space-x-4 flex'>
                        <button onClick={handleShowAnswer} type='submit' className='bg-blue-500 text-white py-2 px-5 rounded'>Post your<br /><span>answer</span></button>
                        <div className='mt-4'>
                            <button className='text-red-500' onClick={handleDiscard}>Discard</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default FillAnswer
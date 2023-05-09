import { list } from 'postcss'
import React, { createContext, useContext, useState, useEffect } from 'react'

export const InfoContext = createContext()

export function GetInfo() {
    return useContext(InfoContext)
}

export function InfoProvider({ children }) {

    // FOR `ASK QUESTION` PAGE
    const [title, setTitle] = useState()
    const [whatIsProblem, setWhatIsProblem] = useState()
    const [whatExp, setWhatExp] = useState()
    const [tags, setTags] = useState()

    function getTitle(title) {
        setTitle(title)
    }

    function whatProblem(wProblem) {
        setWhatIsProblem(wProblem)
    }

    function whatExpecting(wExpecting) {
        setWhatExp(wExpecting)
    }

    function getTags(tag) {
        const tagArray = tag.map(object => object.value);
        setTags(tagArray[0])

    }

    const [questionImage, setQuestionImage] = useState()
    function getPicForQuestion(questionPic) {
        setQuestionImage(questionPic)
    }

    ///////////////////////////////////

    // FOR `ANSWER` PAGE

    const [answerImage, setAnswerImage] = useState()
    function getPicForAnswer(Answerpic) {
        setAnswerImage(Answerpic)
    }

    const [tryThis, setTryThis] = useState()
    function tryIt(toTry) {
        setTryThis(toTry)
    }

    const [expInfo, setExpInfo] = useState()
    function getExp(exp) {
        setExpInfo(exp)
    }


    const [showTheAnswer, setShowTheAnswer] = useState(false)
    function getBlankOfAnswer(answer) {
        setShowTheAnswer(answer)

    }


    // FOR CLICK ON DOCUMENT ??????????????


    function closeNavItems(navbarItems) {
    }

    // useEffect(() => {
    //     document.addEventListener("click", closeNavItems);
    //     return () => {
    //         document.removeEventListener("click", closeNavItems);
    //     };
    // }, []);




    return (
        <InfoContext.Provider value={{
            getTitle, whatProblem, whatExpecting, getTags,
            title, whatIsProblem, whatExp, tags,
            getPicForQuestion, questionImage,
            getBlankOfAnswer, showTheAnswer,
            getPicForAnswer, answerImage, tryIt, tryThis, getExp, expInfo,
            closeNavItems
        }}>
            {children}
        </InfoContext.Provider>
    )
}
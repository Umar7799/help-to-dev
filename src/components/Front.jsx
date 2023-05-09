import React from 'react'
import LeftBar from './LeftBar'
import RightCards from './RightCards'
import TopMainSection from './TopMainSection'
import QuestionBox from './QuestionBox'
import Navbar from './Navbar'
import Footer from './Footer'

const Front = () => {
    return (
        <>
            <Navbar />
            <div className="flex">
                <LeftBar />
                <div className="flex-initial w-[1000px]">
                    <TopMainSection />
                    <QuestionBox />
                </div>
                <RightCards />
            </div>
            <Footer />
        </>

    )
}

export default Front
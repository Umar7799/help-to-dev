import React from 'react'
import ProfileLeftBar from '../ProfileLeftBar'
import SavedTopSection from './SavedTopSection'
import ProfileNavbar from '../ProfileNavbar'
import Footer from '../../components/Footer'
import SavedItems from './SavedItems'

const Saved = () => {
    return (
        <>
            <ProfileNavbar />
            <div className='flex overflow-hidden'>
                <ProfileLeftBar />
                <div>
                    <SavedTopSection />
                    <SavedItems />
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Saved
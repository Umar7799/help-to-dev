import React, { useState, useEffect, useRef } from 'react'

import { BsSearch, BsPersonCircle, BsQuestionSquare, BsAward } from 'react-icons/bs'
import { BiMessage } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import avatar from '../pictures/avatar4.jpg'
import { FaBars, FaTimes } from 'react-icons/fa'


const ProfileNavbar = () => {

    const [searchInput, setSearchInput] = useState(false);
    const inputClick = () => {
        setSearchInput(!searchInput)
        setLeftBarMenu(false);
        setMessage(false);
        setAward(false);
        setHelp(false);
    }

    const [help, setHelp] = useState(false);
    const helpClick = () => {
        setHelp(!help)
        setAward(false)
        setMessage(false)
        setLeftBarMenu(false)
        setSearchInput(false)

    };

    const [award, setAward] = useState(false);
    const awardClick = () => {
        setAward(!award)
        setHelp(false)
        setMessage(false)
        setLeftBarMenu(false)
        setSearchInput(false)
    }

    const [message, setMessage] = useState(false);
    const messageClick = () => {
        setMessage(!message);
        setAward(false);
        setHelp(false);
        setLeftBarMenu(false)
        setSearchInput(false)
    }

    const [profile, setProfile] = useState(false);
    const profileClick = () => {
        setProfile(!profile)
        setMessage(false);
        setAward(false);
        setHelp(false);
        setLeftBarMenu(false)
        setSearchInput(false)
    }

    const [leftBarMenu, setLeftBarMenu] = useState(false);
    const leftBarMenuClick = () => {
        setLeftBarMenu(!leftBarMenu);
        setMessage(false);
        setAward(false);
        setHelp(false);
        setSearchInput(false)
    }

    const [homeLogo, setHomeLogo] = useState(false);
    const homeLogoClick = () => {
        setHomeLogo(!homeLogo)
        setLeftBarMenu(false);
        setMessage(false);
        setAward(false);
        setHelp(false);
        setSearchInput(false)
    }

    const frontInputClick = () => {
        setHomeLogo(false)
        setLeftBarMenu(false);
        setMessage(false);
        setAward(false);
        setHelp(false);
        setSearchInput(false)
    }

    const clickToClose = () => {
        setLeftBarMenu(false);
    }


    const navbarRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setHelp(false)
                setAward(false)
                setMessage(false)
                setLeftBarMenu(false)
                setSearchInput(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navbarRef]);


    // #bd8c7d, #bd8c7d, #8e8e90, #49494b
    // #acb7ae, #acb7ae #acb7ae, #c2b490
    return (
        <div ref={navbarRef} className='w-full fixed z-10 h-[48px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-sm'>
            <div className='flex'>
                <div onClick={leftBarMenuClick} className={!leftBarMenu ? 'lg:hidden' : 'text-2xl pt-1'}>
                    {!leftBarMenu ? <div className='pt-1 text-2xl'> <FaBars /> </div> : <FaTimes className='block lg:hidden' />}
                </div>
                <h1 onClick={homeLogoClick} className='ml-4 text-2xl'><Link to='/' activeStyle>helpToDev</Link></h1>
                <div className={!leftBarMenu ? 'hidden' : 'lg:hidden text-sm bg-[#F7F7F7] rounded border border-gray-300 shadow-md absolute left-0 top-[48px] text-black w-[250px] h-[350px]'}>
                    <div className='px-2 py-1 leftMenuHamburger'>
                        <a onClick={clickToClose} className='text-md font-bold'><Link to='/'>Home</Link></a>
                        <div className='mt-2 leading-6 border-y border-black'>
                            <h1 className='text-md pt-2 font-bold'>Public</h1>
                            <ul className='pl-4 pb-1'>
                                <li><a href="#">Questions</a></li>
                                <li><a href="#">Tags</a></li>
                                <li><a href="#">Users</a></li>
                                <li><a href="#">Companies</a></li>
                            </ul>
                        </div>
                        <div className='mt-2 leading-6'>
                            <h1 className='text-md pt-1 font-bold'>COLLECTIVES</h1>
                            <p className='pl-4 pb-1'>Explore collectives</p>
                        </div>
                        <div className='mt-2 leading-6 border-t border-black'>
                            <h1 className='text-md pt-2 font-bold'>TEAMS</h1>
                            <p className='pl-4 pb-1'>Create free team</p>
                            <p onClick={clickToClose} className='text-[13px] underline pl-4 pt-2'><Link to='fileToSignIn'>Log out</Link></p>

                        </div>
                    </div>
                </div>
            </div>
            <input onClick={frontInputClick} className='hidden md:block search ml-4 p-[5px] outline-0 text-black rounded-sm w-[700px]' type="search" placeholder='Search...' />
            <ul className='flex text-[27px] space-x-7 ml-9'>
                <li onClick={inputClick} className='block md:hidden'><BsSearch /></li>
                <li onClick={awardClick}><BsAward /></li>
                <li onClick={helpClick}><BsQuestionSquare /></li>
                <li onClick={messageClick}><BiMessage /></li>

                <li onClick={profileClick}><Link to='/profile'><BsPersonCircle /></Link></li>





                <ul>
                    <li>
                        <div className={!searchInput ? 'hidden' : 'text-xs absolute right-12 left-12 top-[48px] rounded text-black w-[85%] h-[45px] bg-[#F7F7F7] border-[1px] border-gray-400 shadow-lg'}>
                            <div className='flex justify-center'>
                                <input type="text" className='h-9 w-[90%] mt-[4px] px-2 py-1.5 rounded' placeholder='&nbsp;&nbsp;Search...' />
                                <button className='pl-2 bg-[#e2dcdc] h-9 w-[8%] mt-[4px] rounded text-lg'><BsSearch /></button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={!award ? 'hidden' : 'text-xs bg-[#F7F7F7] rounded border border-gray-400 absolute right-0 top-[48px] text-black w-[350px] h-[400px]'}>
                            <div>
                                <div className='mb-1 flex justify-between p-1 bg-[#e2dcdc]'>
                                    <h1 className='text-sm font-bold'>ACHIEVENTS</h1>
                                    <div className='flex space-x-2 text-blue-600'>
                                        <a href="#">privileges</a>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href="#">badges</a>
                                    </div>
                                </div>

                                <div className='pt-2 flex space-x-3 bg-white border border-gray-300 rounded hover:bg-[#e2dcdc]'>
                                    <div className='p-2'>
                                        <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                                    </div>
                                    <p>You've earned the "Informed" badge (Read the entire tour page).</p>
                                </div>
                                <hr />
                                <div className='pt-2 flex space-x-3 bg-white border border-gray-300 rounded hover:bg-[#e2dcdc]'>
                                    <div className='p-2'>
                                        <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                                    </div>
                                    <p>You've earned the "Informed" badge (Read the entire tour page).</p>
                                </div>
                                <hr />
                                <div className='pt-2 flex space-x-3 bg-white border border-gray-300 rounded hover:bg-[#e2dcdc]'>
                                    <div className='p-2'>
                                        <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                                    </div>
                                    <p>You've earned the "Informed" badge (Read the entire tour page).</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={!help ? 'hidden' : 'text-xs bg-[#F7F7F7] absolute right-0 top-[48px] text-black w-[200px] h-[280px]'}>
                            <div className='p-1 space-y-1'>
                                <div className='rounded border bg-white border-gray-300 hover:bg-[#e2dcdc]'>
                                    <a href="#" className='text-blue-600'>Tour</a>
                                    <p>Start here for a quick overview of the site</p>
                                </div>
                                <hr />
                                <div className='rounded border bg-white border-gray-300 hover:bg-[#e2dcdc]'>
                                    <a href="#" className='text-blue-600'>Help Center</a>
                                    <p>Detailed answers to any questions you might have</p>
                                </div>
                                <hr />
                                <div className='rounded border bg-white border-gray-300 hover:bg-[#e2dcdc]'>
                                    <a href="#" className='text-blue-600'>Meta</a>
                                    <p>Discuss the workings and policies of the site</p>
                                </div>
                                <hr />
                                <div className='rounded border bg-white border-gray-300 hover:bg-[#e2dcdc]'>
                                    <a href="#" className='text-blue-600'>About us</a>
                                    <p>Learn more about HelpToDev the company</p>
                                </div>
                                <hr />
                                <div className='rounded border bg-white border-gray-300 hover:bg-[#e2dcdc] pb-3'>
                                    <a href="#" className='text-blue-600'>Business</a>
                                    <p>Learn more about our products</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={!message ? 'hidden' : 'text-xs bg-[#F7F7F7] rounded border border-gray-300 absolute right-0 top-[48px] text-black shadow w-[350px] h-[400px]'}>
                            <div className='flex justify-between p-1 bg-[#e2dcdc]'>
                                <h1 className='font-bold text-sm'>INBOX</h1>
                                <p className='text-xs text-blue-500'>All items</p>
                            </div>
                            <div className='p-1 bg-white border border-gray-300 rounded'>
                                <div className='flex text-xs justify-between'>
                                    <div className='flex'>
                                        <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                                        <h1>&nbsp;username</h1>
                                    </div>
                                    <p>asked min ago</p>
                                </div>

                                <div className='px-3 pt-2'>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem perspiciatis deserunt, placeat porro necessitatibus modi?</p>
                                </div>
                            </div>
                            <div className='p-1 bg-white border border-gray-300 rounded'>
                                <div className='flex text-xs justify-between'>
                                    <div className='flex'>
                                        <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                                        <h1>&nbsp;username</h1>
                                    </div>
                                    <p>asked min ago</p>
                                </div>

                                <div className='px-3 pt-2'>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem perspiciatis deserunt, placeat porro necessitatibus modi?</p>
                                </div>
                            </div>
                            <div className='p-1 bg-white border border-gray-300 rounded'>
                                <div className='flex text-xs justify-between'>
                                    <div className='flex'>
                                        <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                                        <h1>&nbsp;username</h1>
                                    </div>
                                    <p>asked min ago</p>
                                </div>

                                <div className='px-3 pt-2'>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem perspiciatis deserunt, placeat porro necessitatibus modi?</p>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>

            </ul>
            {/* Hamburger */}
            {/* <div onClick={handleClick} className='md:hidden z-20 right-8 text-3xl ml-12'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            <ul className={!nav ? 'hidden' : 'text-4xl space-y-10 z-10 top-0 absolute w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li><BsAward /></li>
                <li><BsQuestionSquare /></li>
                <li><BiMessage /></li>
                <li><BsPersonCircle /></li>
            </ul> */}
        </div>
    )
}

export default ProfileNavbar
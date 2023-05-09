import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='z-10 text-[#F7F7F7]'>
            <footer className="p-4 bg-[#0a192f] sm:p-6 z-10">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <p className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HelpToDev</span>
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold">Company</h2>
                            <ul className="text-xs">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">About</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Contact Us</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Questions</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Help</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold">PRODUCTS</h2>
                            <ul className="text-xs">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">Teams</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Advertising</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold">Legal</h2>
                            <ul className="text-xs">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-xs sm:text-center">© 2022 <a href="#" className="hover:underline">HelpToDev™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">

                        <a href="#" className="hover:text-gray-400">
                            <BsFacebook />
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <BsGithub />
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <BsLinkedin />
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <BsInstagram />
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <BsTwitter />
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <BsYoutube />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
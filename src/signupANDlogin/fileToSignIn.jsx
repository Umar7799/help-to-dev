import React from 'react'
import { Link } from 'react-router-dom'



const fileToSignIn = () => {
    return (
        <div className='grid place-items-center h-screen'>
            <div className='bg-[#0a192f] h-[380px] w-[380px] mb-[40px] rounded-2xl shadow-2xl'>
                <div className='pb-4 ml-14 mt-14'>
                    <h1 className='signHelpToDev font-bold text-5xl font-serif text-gray-200'>HELPTODEV</h1>
                </div>
                <div className='pl-7 mt-2'>
                    <form action="">
                        <input className='h-9 min-w-[320px] rounded-lg bg-gray-200 shadow-md border border-gray-400 outline-0 placeholder:text-sm placeholder:text-[#65656b]' type="text" placeholder=' Email/Username' />
                        <input className='block h-9 mt-2 min-w-[320px] rounded-lg bg-gray-200 shadow-md border border-gray-400 outline-0 placeholder:text-sm placeholder:text-[#65656b]' type="text" placeholder=' Password' />
                        <button className='mt-6 ml-[125px] rounded-lg font-sans bg-gray-200 border border-gray-400 hover:bg-[#e2dcdc] py-1 px-3'>Log in</button>
                        <button className='ml-8 text-[12px] text-gray-200 underline'><Link to='fileToSignUp'>Sign Up</Link></button>
                    </form>
                </div>
                <p className='text-sm text-gray-200 mt-14 ml-4'>Forgot password?</p>
            </div>
        </div>
    )
}

export default fileToSignIn
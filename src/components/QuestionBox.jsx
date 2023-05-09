import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../pictures/avatar4.jpg'
import { GetInfo } from '../Contexts/QuestionContext'


const QuestionBox = () => {

    const { title, whatIsProblem, tags } = GetInfo()

    return (
        <div className='mb-1'>

            <div className='flex h-[155px] border-[1px] rounded border-l-0 shadow'>
                <div className='w-[10%] m-8 mt-4'>
                    <ul className='whitespace-nowrap leading-8 text-xs pl-3 pt-4'>
                        <li><span>0</span> votes</li>
                        <li><span>1</span> answers</li>
                        <li><span>3</span> views</li>
                    </ul>
                </div>

                <div className='w-[80%]'>
                    <div className='pt-3 h-[105px] overflow-hidden'>

                        <a href="#" className='text-blue-700 text-lg'><Link to='QuestionPage'>{title}</Link></a>
                        <p className='text-xs'>{whatIsProblem}</p>
                    </div>
                    <div className='flex justify-between pt-3'>
                        <ul className='flex space-x-2'>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">{tags}</a></li>
                        </ul>
                        <div className='flex text-xs pr-6 text-gray-600'>
                            <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                            <h1>&nbsp;username&nbsp;</h1>
                            <p>asked min ago</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex h-[155px] border-[1px] rounded border-l-0 shadow'>
                <div className='w-[10%] m-8 mt-4'>
                    <ul className='whitespace-nowrap leading-8 text-xs pl-3 pt-4'>
                        <li><span>0</span> votes</li>
                        <li><span>1</span> answers</li>
                        <li><span>3</span> views</li>
                    </ul>
                </div>

                <div className='w-[80%]'>
                    <div className='pt-3 h-[105px] overflow-hidden'>
                        <a href="#" className='text-blue-700 text-lg'>How to setup react project?</a>
                        <p className='text-xs'>Lorem ipsum dolor Aspernatur fuga explicabo, iste saepe et. Ipsum explicabo, possimus provident minus voluptatum libero nostrum sapiente sequi consequatur, maiores dolorem praesentium earum omnis, nobis quibusdam corporis! Neque nisi eaque minima.</p>
                    </div>
                    <div className='flex justify-between pt-3'>
                        <ul className='flex space-x-2'>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">Tech</a></li>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">react</a></li>
                        </ul>
                        <div className='flex text-xs pr-6 text-gray-600'>
                            <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                            <h1>&nbsp;username&nbsp;</h1>
                            <p>asked min ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex h-[155px] border-[1px] rounded border-l-0 shadow'>
                <div className='w-[10%] m-8 mt-4'>
                    <ul className='whitespace-nowrap leading-8 text-xs pl-3 pt-4'>
                        <li><span>0</span> votes</li>
                        <li><span>1</span> answers</li>
                        <li><span>3</span> views</li>
                    </ul>
                </div>

                <div className='w-[80%]'>
                    <div className='pt-3 h-[105px] overflow-hidden'>
                        <a href="#" className='text-blue-700 text-lg'>How to setup react project?</a>
                        <p className='text-xs'>Lorem ipsum dolor Aspernatur fuga explicabo, iste saepe et. Ipsum explicabo, possimus provident minus voluptatum libero nostrum sapiente sequi consequatur, maiores dolorem praesentium earum omnis, nobis quibusdam corporis! Neque nisi eaque minima.</p>
                    </div>
                    <div className='flex justify-between pt-3'>
                        <ul className='flex space-x-2'>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">Tech</a></li>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">react</a></li>
                        </ul>
                        <div className='flex text-xs pr-6 text-gray-600'>
                            <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                            <h1>&nbsp;username&nbsp;</h1>
                            <p>asked min ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex h-[155px] border-[1px] rounded border-l-0 shadow'>
                <div className='w-[10%] m-8 mt-4'>
                    <ul className='whitespace-nowrap leading-8 text-xs pl-3 pt-4'>
                        <li><span>0</span> votes</li>
                        <li><span>1</span> answers</li>
                        <li><span>3</span> views</li>
                    </ul>
                </div>

                <div className='w-[80%]'>
                    <div className='pt-3 h-[105px] overflow-hidden'>
                        <a href="#" className='text-blue-700 text-lg'>How to setup react project?</a>
                        <p className='text-xs'>Lorem ipsum dolor Aspernatur fuga explicabo, iste saepe et. Ipsum explicabo, possimus provident minus voluptatum libero nostrum sapiente sequi consequatur, maiores dolorem praesentium earum omnis, nobis quibusdam corporis! Neque nisi eaque minima.</p>
                    </div>
                    <div className='flex justify-between pt-3'>
                        <ul className='flex space-x-2'>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">Tech</a></li>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">react</a></li>
                        </ul>
                        <div className='flex text-xs pr-6 text-gray-600'>
                            <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                            <h1>&nbsp;username&nbsp;</h1>
                            <p>asked min ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex h-[155px] border-[1px] rounded border-l-0 shadow'>
                <div className='w-[10%] m-8 mt-4'>
                    <ul className='whitespace-nowrap leading-8 text-xs pl-3 pt-4'>
                        <li><span>0</span> votes</li>
                        <li><span>1</span> answers</li>
                        <li><span>3</span> views</li>
                    </ul>
                </div>

                <div className='w-[80%]'>
                    <div className='pt-3 h-[105px] overflow-hidden'>
                        <a href="#" className='text-blue-700 text-lg'>How to setup react project?</a>
                        <p className='text-xs'>Lorem ipsum dolor Aspernatur fuga explicabo, iste saepe et. Ipsum explicabo, possimus provident minus voluptatum libero nostrum sapiente sequi consequatur, maiores dolorem praesentium earum omnis, nobis quibusdam corporis! Neque nisi eaque minima.</p>
                    </div>
                    <div className='flex justify-between pt-3'>
                        <ul className='flex space-x-2'>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">Tech</a></li>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">react</a></li>
                        </ul>
                        <div className='flex text-xs pr-6 text-gray-600'>
                            <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                            <h1>&nbsp;username&nbsp;</h1>
                            <p>asked min ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex h-[155px] border-[1px] rounded border-l-0 shadow'>
                <div className='w-[10%] m-8 mt-4'>
                    <ul className='whitespace-nowrap leading-8 text-xs pl-3 pt-4'>
                        <li><span>0</span> votes</li>
                        <li><span>1</span> answers</li>
                        <li><span>3</span> views</li>
                    </ul>
                </div>

                <div className='w-[80%]'>
                    <div className='pt-3 h-[105px] overflow-hidden'>
                        <a href="#" className='text-blue-700 text-lg'>How to setup react project?</a>
                        <p className='text-xs'>Lorem ipsum dolor Aspernatur fuga explicabo, iste saepe et. Ipsum explicabo, possimus provident minus voluptatum libero nostrum sapiente sequi consequatur, maiores dolorem praesentium earum omnis, nobis quibusdam corporis! Neque nisi eaque minima.</p>
                    </div>
                    <div className='flex justify-between pt-3'>
                        <ul className='flex space-x-2'>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">Tech</a></li>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">react</a></li>
                        </ul>
                        <div className='flex text-xs pr-6 text-gray-600'>
                            <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                            <h1>&nbsp;username&nbsp;</h1>
                            <p>asked min ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex h-[155px] border-[1px] rounded border-l-0 shadow'>
                <div className='w-[10%] m-8 mt-4'>
                    <ul className='whitespace-nowrap leading-8 text-xs pl-3 pt-4'>
                        <li><span>0</span> votes</li>
                        <li><span>1</span> answers</li>
                        <li><span>3</span> views</li>
                    </ul>
                </div>

                <div className='w-[80%]'>
                    <div className='pt-3 h-[105px] overflow-hidden'>
                        <a href="#" className='text-blue-700 text-lg'>How to setup react project?</a>
                        <p className='text-xs'>Lorem ipsum dolor Aspernatur fuga explicabo, iste saepe et. Ipsum explicabo, possimus provident minus voluptatum libero nostrum sapiente sequi consequatur, maiores dolorem praesentium earum omnis, nobis quibusdam corporis! Neque nisi eaque minima.</p>
                    </div>
                    <div className='flex justify-between pt-3'>
                        <ul className='flex space-x-2'>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">Tech</a></li>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">react</a></li>
                        </ul>
                        <div className='flex text-xs pr-6 text-gray-600'>
                            <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                            <h1>&nbsp;username&nbsp;</h1>
                            <p>asked min ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex h-[155px] border-[1px] rounded border-l-0 shadow'>
                <div className='w-[10%] m-8 mt-4'>
                    <ul className='whitespace-nowrap leading-8 text-xs pl-3 pt-4'>
                        <li><span>0</span> votes</li>
                        <li><span>1</span> answers</li>
                        <li><span>3</span> views</li>
                    </ul>
                </div>

                <div className='w-[80%]'>
                    <div className='pt-3 h-[105px] overflow-hidden'>
                        <a href="#" className='text-blue-700 text-lg'>How to setup react project?</a>
                        <p className='text-xs'>Lorem ipsum dolor Aspernatur fuga explicabo, iste saepe et. Ipsum explicabo, possimus provident minus voluptatum libero nostrum sapiente sequi consequatur, maiores dolorem praesentium earum omnis, nobis quibusdam corporis! Neque nisi eaque minima.</p>
                    </div>
                    <div className='flex justify-between pt-3'>
                        <ul className='flex space-x-2'>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">Tech</a></li>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">react</a></li>
                        </ul>
                        <div className='flex text-xs pr-6 text-gray-600'>
                            <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                            <h1>&nbsp;username&nbsp;</h1>
                            <p>asked min ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex h-[155px] border-[1px] rounded border-l-0 shadow'>
                <div className='w-[10%] m-8 mt-4'>
                    <ul className='whitespace-nowrap leading-8 text-xs pl-3 pt-4'>
                        <li><span>0</span> votes</li>
                        <li><span>1</span> answers</li>
                        <li><span>3</span> views</li>
                    </ul>
                </div>

                <div className='w-[80%]'>
                    <div className='pt-3 h-[105px] overflow-hidden'>
                        <a href="#" className='text-blue-700 text-lg'>How to setup react project?</a>
                        <p className='text-xs'>Lorem ipsum dolor Aspernatur fuga explicabo, iste saepe et. Ipsum explicabo, possimus provident minus voluptatum libero nostrum sapiente sequi consequatur, maiores dolorem praesentium earum omnis, nobis quibusdam corporis! Neque nisi eaque minima.</p>
                    </div>
                    <div className='flex justify-between pt-3'>
                        <ul className='flex space-x-2'>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">Tech</a></li>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">react</a></li>
                        </ul>
                        <div className='flex text-xs pr-6 text-gray-600'>
                            <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                            <h1>&nbsp;username&nbsp;</h1>
                            <p>asked min ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex h-[155px] border-[1px] rounded border-l-0 shadow'>
                <div className='w-[10%] m-8 mt-4'>
                    <ul className='whitespace-nowrap leading-8 text-xs pl-3 pt-4'>
                        <li><span>0</span> votes</li>
                        <li><span>1</span> answers</li>
                        <li><span>3</span> views</li>
                    </ul>
                </div>

                <div className='w-[80%]'>
                    <div className='pt-3 h-[105px] overflow-hidden'>
                        <a href="#" className='text-blue-700 text-lg'>How to setup react project?</a>
                        <p className='text-xs'>Lorem ipsum dolor Aspernatur fuga explicabo, iste saepe et. Ipsum explicabo, possimus provident minus voluptatum libero nostrum sapiente sequi consequatur, maiores dolorem praesentium earum omnis, nobis quibusdam corporis! Neque nisi eaque minima.</p>
                    </div>
                    <div className='flex justify-between pt-3'>
                        <ul className='flex space-x-2'>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">Tech</a></li>
                            <li><a href="#" className="px-[6px] py-[2px] text-xs rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-gray-300">react</a></li>
                        </ul>
                        <div className='flex text-xs pr-6 text-gray-600'>
                            <img src={avatar} alt="avatar" className='w-[25px] rounded' />
                            <h1>&nbsp;username&nbsp;</h1>
                            <p>asked min ago</p>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default QuestionBox
import React, { useRef, useState } from 'react'
import Select from 'react-select';
import { Link } from 'react-router-dom'
import './askQuestion.css'
import { GetInfo } from '../Contexts/QuestionContext'
import { BiPencil } from 'react-icons/bi'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AskQuestion = () => {

    const { getTitle, whatProblem, whatExpecting, getTags, getPicForQuestion } = GetInfo()

    const titleRef = useRef(null)
    const [title, setTitle] = useState()

    const whatProblemRef = useRef(null)
    const [problem, setProblem] = useState()

    const whatExpectingRef = useRef(null)
    const [whatExpect, setWhatExpect] = useState()

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    getTitle(title)

    const handleProblem = (event) => {
        setProblem(event.target.value);
    };
    whatProblem(problem)

    const handleExpected = (event) => {
        setWhatExpect(event.target.value)
        event.target.name = event.target.value
    }
    whatExpecting(whatExpect)

    // //////////////////////////////////////////////////
    // DISCARD THE FIELDS


    const handleDiscard = (e) => {
        e.preventDefault()
        setTitle('')
        setProblem('')
        setWhatExpect('')
        setSelectedOptions([])
        setQuestionPicture(null)
    }


    // SELECTING TAGS //////////////////////////////////////////////////
    const options = [
        { value: 'html', label: 'HTML' },
        { value: 'css', label: 'css' },
        { value: 'javascript', label: 'JavaScript' },
        { value: 'typescript', label: 'TypeScript' },
        { value: 'react', label: 'React' },
        { value: 'angular', label: 'Angular' },
        { value: 'vue.js', label: 'Vue.js' },
        { value: 'next', label: 'Next' },
        { value: 'reactnative', label: 'React Native' },
        { value: 'flutter', label: 'Flutter' },
        { value: 'three.js', label: 'Three.js' },
        { value: 'tailwindcss', label: 'Tailwindcss' },
        { value: 'graphql', label: 'GraphQL' }
    ];

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptions = (selectedOption) => {
        setSelectedOptions(selectedOption);
    };

    getTags(selectedOptions)

    const [titleFocusActive, setTitleFocusActive] = useState(false)
    const titleFocus = (e) => {
        e.preventDefault()
        setTitleFocusActive(true)
        setProblemFocusActive(false)
        setExpectFocusActive(false)
        setTagsFocusActive(false)
    }

    const [problemFocusActive, setProblemFocusActive] = useState(false)
    const problemFocus = (e) => {
        e.preventDefault()
        setProblemFocusActive(true)
        setTitleFocusActive(false)
        setExpectFocusActive(false)
        setTagsFocusActive(false)
    }

    const [expectFocusActive, setExpectFocusActive] = useState(false)
    const expectFocus = (e) => {
        e.preventDefault()
        setExpectFocusActive(true)
        setTitleFocusActive(false)
        setProblemFocusActive(false)
        setTagsFocusActive(false)
    }

    const [tagsFocusActive, setTagsFocusActive] = useState(false)
    const tagsFocus = (e) => {
        e.preventDefault()
        setTagsFocusActive(true)
        setExpectFocusActive(false)
        setTitleFocusActive(false)
        setProblemFocusActive(false)
    }


    //  ///////////////////////////////////////////////////////////////
    const [questionPicture, setQuestionPicture] = useState();
    function handleChange(e) {
        setQuestionPicture(URL.createObjectURL(e.target.files[0]));
    }
    getPicForQuestion(questionPicture)

    const handleSubmit = e => {
        e.preventDefault();
        // Your form submission logic here

    };

    return (
        <>
            <Navbar />
            <div className='bg-[#faf8f8] overflow-hidden pt-10'>
                <div className='flex justify-between'>
                    <h1 className='pt-[25px] pl-5 sm:pl-8 text-xl font-bold'>Ask a public question</h1>
                    <h1 className='pt-[25px] sm:pl-8 pr-8 text-xl font-bold underline'> <Link to='/'>Home</Link></h1>
                </div>


                {/* FIRST BOX */}
                <div className='questionBoxes'>
                    <div className='writeQuestion block ml-5 mr-5 sm:ml-8 mt-8 lg:max-w-[785px] bg-[#f8f5f586] min-h-[200px] border border-gray-400 rounded'>
                        <div className='bg-[#ececf3] h-10 flex items-center pl-4 text-lg border-b border-gray-400 shadow-sm'>
                            <h1>Writing a good question</h1>
                        </div>
                        <p className='text-sm pt-8 pl-4'>Steps:</p>
                        <ul className='text-[13px] py-3 px-6 leading-5'>
                            <li>1) Summarize your problem in a one-line title.</li>
                            <li>2) Describe your problem in more detail.</li>
                            <li>3) Describe what you tried and what you expected to happen.</li>
                            <li>4) Add “tags” which help surface your question to members of the community.</li>
                            <li>5) Review your question and post it to the site.</li>
                        </ul>
                    </div>
                </div>


                <form onSubmit={handleSubmit}>
                    {/* TITLE FOR QUESTION */}
                    <div className='scQuestionBoxes flex'>
                        <div className='lg:ml-8 sm:ml-8 mr-5 ml-5 mt-6 bg-[#f8f5f586] border border-gray-400 rounded'>
                            <div className='p-4'>
                                <h1 className='text-lg'>Title</h1>
                                <p className='text-[13px]'>Be specific and imagine you’re asking a question to another person.</p>
                                <input onChange={handleTitle} onFocus={titleFocus} type='text' className='rounded p-3 outline-0 my-4 block lg:min-w-[750px] w-full border border-gray-500' ref={titleRef} value={title} required></input>
                                <button className='border border-gray-500 px-2 py-1 rounded'>Next</button>
                            </div>
                        </div>
                        <div className={titleFocusActive ? 'rightElement w-full h-[160px] mr-4 bg-gray-300 mt-6 rounded-md' : 'rightElement invisible'}>
                            <div>
                                <div className='bg-[#ececf3] h-10 flex items-center pl-4 text-md border border-gray-300 rounded-t-md'>
                                    <h1>Writing a good title</h1>
                                </div>
                                <div className='flex text-xs'>
                                    <ul className='list-disc list-inside pt-4 space-y-3 px-5'>
                                        <li>Your title should summarize the problem.</li>
                                        <li>You might find that you have a better idea of your title after writing out the rest of the question.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='scQuestionBoxes flex'>
                        {/* What are the details of your problem?? */}
                        <div className='whatProblem sm:ml-8 ml-5 mr-5 mt-6 bg-[#f8f5f586] border border-gray-400 rounded'>
                            <div className='p-4'>
                                <h1 className='text-lg'>What are the details of your problem?</h1>
                                <p className='text-[13px]'>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                                <span className='upload-file'>
                                    <h1 className='border border-gray-400 rounded text-center mt-2 w-fit px-8 py-1'>Upload an image</h1> <input className='text-sm pt-2' type="file" onChange={handleChange} />
                                </span>
                                <textarea onChange={handleProblem} onFocus={problemFocus} type='text' className='rounded outline-0 my-4 h-40 block lg:min-w-[750px] w-full border border-gray-500' ref={whatProblemRef} value={problem} required></textarea>
                                {questionPicture ? <div className='max-w-[600px] p-4 rounded border border-gray-500 my-4'>
                                    <img src={questionPicture} />
                                </div> : ''}

                                <button className='border border-gray-500 px-2 py-1 rounded'>Next</button>
                            </div>
                        </div>
                        <div className={problemFocusActive ? 'rightElement w-full h-[130px] mr-4 bg-gray-300 mt-6 rounded-md' : 'rightElement invisible'}>
                            <div>
                                <div className='bg-[#ececf3] h-10 flex items-center pl-4 text-md border border-gray-300 rounded-t-md'>
                                    <h1>Introduce the problem</h1>
                                </div>
                                <div className='flex text-xs'>
                                    <h1 className='text-4xl pt-8 pl-4'><BiPencil /></h1>
                                    <div className='pl-4 pt-4 pr-4'>
                                        <p>Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='scQuestionBoxes flex'>
                        {/* What did you try and what were you expecting?? */}
                        <div className='whatExpecting sm:ml-8 mr-5 mt-6 bg-[#f8f5f586] border border-gray-400 rounded'>
                            <div className='p-4'>
                                <h1 className='text-lg'>What did you try and what were you expecting?</h1>
                                <p className='text-[13px]'>Describe what you tried, what you expected to happen and what actually resulted. Minimum 20 characters</p>
                                <textarea onChange={handleExpected} onFocus={expectFocus} type='text' className='rounded outline-0 my-4 h-40 block lg:min-w-[750px] w-full border border-gray-500' ref={whatExpectingRef} value={whatExpect} required></textarea>
                            </div>
                        </div>
                        <div className={expectFocusActive ? 'rightElement w-full min-w-[300px] mr-4 bg-gray-300 mt-6 rounded-md' : 'rightElement invisible'}>
                            <div>
                                <div className='bg-[#ececf3] h-10 flex items-center pl-4 text-md border border-gray-300 rounded-t-md'>
                                    <h1>Expand on the problem</h1>
                                </div>
                                <div className='flex text-xs'>
                                    <ul className='list-disc list-inside space-y-2 py-4 px-5'>
                                        <li>Show what you’ve tried, tell us what happened, and why it didn’t meet your needs.</li>
                                        <li>Not all questions benefit from including code, but if your problem is better understood with code you’ve written, you should include a minimal, reproducible example.</li>
                                        <li>Please make sure to post code and errors as text directly to the question (and not as images), and format them appropriately.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className='questionBoxes flex mb-10'>
                        {/* Tags */}
                        <div className='ml-5 mr-5 md:max-w-[900px] sm:ml-8 mt-6 bg-[#f8f5f586] border border-gray-400 rounded'>
                            <div className='p-4'>
                                <h1 className='text-lg'>Tags</h1>
                                <p className='text-[13px]'>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                                <Select
                                    placeholder='Tags'
                                    isMulti
                                    multiple
                                    options={options}
                                    value={selectedOptions}
                                    onChange={handleOptions}
                                    onFocus={tagsFocus}
                                    className='rounded outline-0 mt-4 mb-2 w-full border border-gray-500 text-sm'
                                />
                            </div>
                        </div>
                        <div className={tagsFocusActive ? 'rightElement max-w-[400px] mr-6 bg-gray-300 mt-6 rounded-md' : 'rightElement invisible'}>
                            <div>
                                <div className='bg-[#ececf3] h-10 flex items-center pl-4 text-md border border-gray-300 rounded-t-md'>
                                    <h1>Adding tags</h1>
                                </div>
                                <div className='flex text-xs'>
                                    <h1 className='text-4xl pt-6 pl-4'><BiPencil /></h1>
                                    <div className='pl-4 py-4 pr-4'>
                                        <p>Tags help ensure that your question will get attention from the right people.</p>
                                        <p>Tag things in more than one way so people can find them more easily. Add tags for product lines, projects, teams, and the specific technologies or languages used.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* if(title === null && problem === null && whatExpect === null) {
            alert('Fill the input')
        } */}

                    <div className='ml-5 sm:ml-8 mb-4 space-x-4 flex text-sm'>
                        <button className='bg-blue-500 text-white py-2 px-5 rounded' type='submit'><Link to={title == '' && problem == '' && whatExpect == '' ? '/AskQuestion' : '/'}>Review your <br /> question</Link></button>
                        <div className='mt-4'>
                            <button onClick={handleDiscard} className='text-red-500'>Discard</button>
                        </div>
                    </div>
                    <h1 className='bg-red-500 w-[200px]'><Link to='/QuestionPage'>Question Page</Link></h1>

                </form>

                {/* IT HAS SOME COOL HOVER EFFECT */}
                {/* <div class="bg-gray-100 py-32 px-10 ">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 ">

                    <div class="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
                            <div class="p-6">
                                <h1 class="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">This is Amazing for people to visit.</h1>
                                <p class="text-gray-700 my-2 hover-text-900 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.</p>
                            </div>
                    </div>
                    <div class="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
                            <div class="p-6">
                                <h1 class="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">This is Amazing for people to visit.</h1>
                                <p class="text-gray-700 my-2 hover-text-900 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.</p>
                            </div>
                    </div>
                </div>
            </div> */}
                <Footer />

            </div >
        </>

    )
}

export default AskQuestion
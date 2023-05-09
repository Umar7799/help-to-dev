import React, { useState, useRef } from 'react'
import Select from 'react-select';
import { Link } from 'react-router-dom'


const TopMainSection = () => {

    const [filtering, setFiltering] = useState(false)

    const filterClick = (e) => {
        e.preventDefault()
        setFiltering(!filtering)
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

    // CANCEL FILTERED CHECKBOXES ////////////////////////////////////////////

    const [checkboxes, setCheckboxes] = useState({
        NoAnswers: false,
        NoAcceptedAnswer: false,
        option3: false,
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes({ ...checkboxes, [name]: checked });
    };

    const radioGroupRef = useRef(null);
    const resetCheckboxes = () => {
        setCheckboxes({
            NoAnswers: false,
            NoAcceptedAnswer: false,
            HasBounty: false,
        });
        radioGroupRef.current.reset();
        setSelectedOptions([]);
        setFiltering(!filtering);
    };


    return (
        <>

            {/* Sky Blue: #87CEEB
            Forest Green: #228B22
            Coral: #FF7F50
            Lavender: #E6E6FA
            Mustard: #FFDB58 */}

            <div className='flex mt-10 justify-between bg-white h-[155px]'>

                {/* Top Questions */}
                <div className='pt-7 pl-7 pr-0'>
                    <h1 className='text-2xl whitespace-nowrap'>All Questions</h1>
                    <p className='text-sm font-medium pt-[50px]'>2203123 questions</p>
                </div>

                {/* Ask Questions */}
                <div className='pt-3 text-end leading-[80px]'>
                    <a className="p-2 mr-4 rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                        <Link to='AskQuestion'>Ask Question</Link>
                    </a>
                    <div className="rounded-md shadow-sm flex pt-3">
                        <h1 className="p-[9px] text-xs font-medium rounded-l-lg border border-gray-300 bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                            <Link to=''>Newest</Link>
                        </h1>
                        <a href="#" className="p-[9px] text-xs font-medium text-gray-900 border-t border-b border-gray-300 bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                            Active
                        </a>
                        <a href="#" className="hidden md:block p-[9px] text-xs font-medium border border-r rounded-r-lg lg:rounded-none lg:border-r-0 bg-[#F7F7F7] border-gray-300 hover:bg-[#e2dcdc]">
                            Bountied
                        </a>
                        <a href="#" className="hidden lg:block p-[9px] text-xs font-medium rounded-r-lg border border-gray-300 bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                            Unanswered
                        </a>
                        <a href="#" className="block md:hidden p-[9px] text-xs font-medium text-gray-900 rounded-r-md border border-gray-300 bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                            More
                        </a>

                        {/* Filter button */}
                        <h1 onClick={filterClick} className="ml-8 mr-4 p-[9px] text-xs cursor-pointer font-medium rounded border border-gray-300  bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                            Filter
                        </h1>
                    </div>

                </div>
            </div>
            <div className={filtering ? 'px-4 mb-4' : 'hidden'}>
                <div className='bg-[#F7F7F7] py-2 rounded-lg border border-gray-200 shadow-md'>
                    <form ref={radioGroupRef} className='flex justify-evenly text-xs sm:text-sm'>
                        {/* Filter by */}
                        <div>
                            <h1 className='py-2 font-bold'>Filter by</h1>
                            <div className='leading-8'>
                                <div>
                                    <input checked={checkboxes.NoAnswers} onChange={handleCheckboxChange} type="checkbox" id="NoAnswers" name="NoAnswers" />
                                    <label className='pl-2' for="NoAnswers">No Answers</label>
                                </div>
                                <div>
                                    <input checked={checkboxes.NoAcceptedAnswer} onChange={handleCheckboxChange} type="checkbox" id="NoAcceptedAnswer" name="NoAcceptedAnswer" />
                                    <label className='pl-2' for="NoAcceptedAnswer">No accepted answer</label>
                                </div>
                                <div>
                                    <input checked={checkboxes.HasBounty} onChange={handleCheckboxChange} type="checkbox" id="HasBounty" name="HasBounty" />
                                    <label className='pl-2' for="HasBounty">Has bounty</label>
                                </div>
                            </div>
                        </div>

                        {/* Sorted by */}
                        <div>
                            <h1 className='py-2 font-bold'>Sorted by</h1>
                            <div className='leading-8'>
                                <div>
                                    <input multiple type="radio" id="Newest" name="sorted" value="Newest" />
                                    <label className='pl-2' for="Newest">Newest</label>
                                </div>

                                <div>
                                    <input multiple type="radio" id="RecentActivity" name="sorted" value="RecentActivity" />
                                    <label className='pl-2' for="RecentActivity">Recent activity</label>
                                </div>

                                <div>
                                    <input multiple type="radio" id="HighestScore" name="sorted" value="HighestScore" />
                                    <label className='pl-2' for="HighestScore">Highest score</label>
                                </div>
                                <div>
                                    <input multiple type="radio" id="MostFrequent" name="sorted" value="MostFrequent" />
                                    <label className='pl-2' for="MostFrequent">Most frequent</label>
                                </div>
                            </div>

                        </div>

                        {/* Tagged with */}
                        <div>
                            <h1 className='py-2 font-bold'>Tagged with</h1>
                            <div className='leading-8'>
                                <div>
                                    <input type="radio" id="MyWatchedTags" name="tagged" value="MyWatchedTags" />
                                    <label for="MyWatchedTags">My watched tags</label>
                                </div>

                                <div>
                                    <input type="radio" id="TheFollowingTags" name="tagged" value="TheFollowingTags" />
                                    <label for="TheFollowingTags">The following tags:</label>
                                </div>
                                <Select
                                    placeholder='Tags'
                                    isMulti
                                    multiple
                                    options={options}
                                    value={selectedOptions}
                                    onChange={handleOptions}
                                    className='rounded outline-0 border border-gray-500 text-xs max-w-[200px]'
                                />
                            </div>
                        </div>
                    </form>
                    <div className='flex pb-2 justify-between pt-2 px-12 text-sm'>
                        <div className='flex'>
                            <h1 className="p-[9px] text-xs font-medium rounded border border-gray-300  bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                                Apply filter
                            </h1>
                            <h1 className="p-[9px] ml-2 text-xs font-medium rounded border border-gray-300  bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                                Save custom filter
                            </h1>
                        </div>
                        <div>
                            <h1 onClick={resetCheckboxes} className=" p-[9px] text-xs font-medium rounded border border-gray-300  bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                                cancel
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopMainSection
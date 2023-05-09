import React, { useState } from 'react'
import { Link } from 'react-scroll'

const ProfileNav = () => {

    {/* {
                    values.map((val) => (
                        <li onClick={() => setActiveId(val.id)}>
                            {activeId === val.id ?
                                <li className='bg-red-500'><Link to={val.addressPlace} smooth={true} duration={500}>{val.id}</Link></li>
                                : <li>{val.text}</li>}
                        </li>
                    ))
                } */}
    // const values = [
    //     { id: 1, text: "Summary", addressPlace: "summary" },
    //     { id: 2, text: "Answers", addressPlace: "answers" },
    //     { id: 3, text: "Questions", addressPlace: "questions" },
    //     { id: 4, text: "Tags", addressPlace: "tags" },
    //     { id: 5, text: "Reputation", addressPlace: "reputation" },
    //     { id: 6, text: "Badges", addressPlace: "badges" },
    //     { id: 7, text: "Bookmarkes", addressPlace: "bookmarkes" },
    //     { id: 8, text: "Following", addressPlace: "following" },
    //     { id: 9, text: "Bounties", addressPlace: "bounties" },
    //     { id: 10, text: "Accounts", addressPlace: "accounts" },
    //     { id: 11, text: "Articles", addressPlace: "articles" },
    //     { id: 12, text: "Votes", addressPlace: "vote" }
    // ]



    const [summary_, setSummary] = useState(false)
    const [answers_, setAnswers] = useState(false)
    const [questions_, setQuestions] = useState(false)
    const [tags_, setTags] = useState(false)
    const [reputation_, setReputation] = useState(false)
    const [badges_, setBadges] = useState(false)
    const [bookmarkes_, setBookmarkes] = useState(false)
    const [following_, setFollowing] = useState(false)
    const [bounties_, setBounties] = useState(false)
    const [accounts_, setAccounts] = useState(false)
    const [articles_, setArticles] = useState(false)
    const [vote_, setVote] = useState(false)

    const summaryClick = () => {
        setSummary(!summary_);
        setAnswers(false);
        setQuestions(false);
        setTags(false);
        setReputation(false);
        setBadges(false);
        setBookmarkes(false);
        setFollowing(false);
        setBounties(false);
        setAccounts(false);
        setArticles(false);
        setVote(false);
    }
    const answersClick = () => {
        setSummary(false);
        setAnswers(!answers_);
        setQuestions(false);
        setTags(false);
        setReputation(false);
        setBadges(false);
        setBookmarkes(false);
        setFollowing(false);
        setBounties(false);
        setAccounts(false);
        setArticles(false);
        setVote(false);
    }
    const qeustionsClick = () => {
        setSummary(false);
        setAnswers(false);
        setQuestions(!questions_);
        setTags(false);
        setReputation(false);
        setBadges(false);
        setBookmarkes(false);
        setFollowing(false);
        setBounties(false);
        setAccounts(false);
        setArticles(false);
        setVote(false);
    }
    const tagsClick = () => {
        setSummary(false);
        setAnswers(false);
        setQuestions(false);
        setTags(!tags_);
        setReputation(false);
        setBadges(false);
        setBookmarkes(false);
        setFollowing(false);
        setBounties(false);
        setAccounts(false);
        setArticles(false);
        setVote(false);
    }
    const reputationClick = () => {
        setSummary(false);
        setAnswers(false);
        setQuestions(false);
        setTags(false);
        setReputation(!reputation_);
        setBadges(false);
        setBookmarkes(false);
        setFollowing(false);
        setBounties(false);
        setAccounts(false);
        setArticles(false);
        setVote(false);
    }
    const badgesClick = () => {
        setSummary(false);
        setAnswers(false);
        setQuestions(false);
        setTags(false);
        setReputation(false);
        setBadges(!badges_);
        setBookmarkes(false);
        setFollowing(false);
        setBounties(false);
        setAccounts(false);
        setArticles(false);
        setVote(false);
    }
    const bookmarkesClick = () => {
        setSummary(false);
        setAnswers(false);
        setQuestions(false);
        setTags(false);
        setReputation(false);
        setBadges(false);
        setBookmarkes(!bookmarkes_);
        setFollowing(false);
        setBounties(false);
        setAccounts(false);
        setArticles(false);
        setVote(false);
    }
    const followingClick = () => {
        setSummary(false);
        setAnswers(false);
        setQuestions(false);
        setTags(false);
        setReputation(false);
        setBadges(false);
        setBookmarkes(false);
        setFollowing(!following_);
        setBounties(false);
        setAccounts(false);
        setArticles(false);
        setVote(false);
    }
    const bountiesClick = () => {
        setSummary(false);
        setAnswers(false);
        setQuestions(false);
        setTags(false);
        setReputation(false);
        setBadges(false);
        setBookmarkes(false);
        setFollowing(false);
        setBounties(!bounties_);
        setAccounts(false);
        setArticles(false);
        setVote(false);
    }
    const accountsClick = () => {
        setSummary(false);
        setAnswers(false);
        setQuestions(false);
        setTags(false);
        setReputation(false);
        setBadges(false);
        setBookmarkes(false);
        setFollowing(false);
        setBounties(false);
        setAccounts(!accounts_);
        setArticles(false);
        setVote(false);
    }
    const articlesClick = () => {
        setSummary(false);
        setAnswers(false);
        setQuestions(false);
        setTags(false);
        setReputation(false);
        setBadges(false);
        setBookmarkes(false);
        setFollowing(false);
        setBounties(false);
        setAccounts(false);
        setArticles(!articles_);
        setVote(false);
    }
    const voteClick = () => {
        setSummary(false);
        setAnswers(false);
        setQuestions(false);
        setTags(false);
        setReputation(false);
        setBadges(false);
        setBookmarkes(false);
        setFollowing(false);
        setBounties(false);
        setAccounts(false);
        setArticles(false);
        setVote(!vote_);
    }


    return (
        <div className='hidden md:block h-screen sticky top-12 left-0 bottom-0 right-0 w-[180px]'>
            <ul className='leading-8 cursor-pointer text-sm p-8 pl-5 pt-2 sticky top-0 left-0 bottom-0 right-0'>
                <li className={summary_ ? 'pl-6 bg-[#F7F7F7] rounded border border-gray-300' : 'pl-6'} key={1}><Link onClick={summaryClick} to='summary' offset={-40} smooth={true} duration={500}>Summary</Link></li>
                <li className={answers_ ? 'pl-6 bg-[#F7F7F7] rounded border border-gray-300' : 'pl-6'} key={2}><Link onClick={answersClick} to='answers' offset={-40} smooth={true} duration={500}>Answers</Link></li>
                <li className={questions_ ? 'pl-6 bg-[#F7F7F7] rounded border border-gray-300' : 'pl-6'} key={3}><Link onClick={qeustionsClick} to='questions' offset={-40} smooth={true} duration={500}>Questions</Link></li>
                <li className={tags_ ? 'pl-6 bg-[#F7F7F7] rounded border border-gray-300' : 'pl-6'} key={4}><Link onClick={tagsClick} to='tags' offset={-40} smooth={true} duration={500}>Tags</Link></li>
                <li className={reputation_ ? 'pl-6 bg-[#F7F7F7] rounded border border-gray-300' : 'pl-6'} key={5}><Link onClick={reputationClick} to='reputation' offset={-40} smooth={true} duration={500}>Reputation</Link></li>
                <li className={badges_ ? 'pl-6 bg-[#F7F7F7] rounded border border-gray-300' : 'pl-6'} key={6}><Link onClick={badgesClick} to='badges' offset={-40} smooth={true} duration={500}>Badges</Link></li>
                <li className={bookmarkes_ ? 'pl-6 bg-[#F7F7F7] rounded border border-gray-300' : 'pl-6'} key={7}><Link onClick={bookmarkesClick} to='bookmarkes' offset={-40} smooth={true} duration={500}>Bookmarkes</Link></li>
                <li className={following_ ? 'pl-6 bg-[#F7F7F7] rounded border border-gray-300' : 'pl-6'} key={8}><Link onClick={followingClick} to='following' offset={-40} smooth={true} duration={500}>Following</Link></li>
                <li className={bounties_ ? 'pl-6 bg-[#F7F7F7] rounded border border-gray-300' : 'pl-6'} key={9}><Link onClick={bountiesClick} to='bounties' offset={-40} smooth={true} duration={500}>Bounties</Link></li>
                <li className={accounts_ ? 'pl-6 bg-[#F7F7F7] rounded border border-gray-300' : 'pl-6'} key={10}><Link onClick={accountsClick} to='accounts' offset={-40} smooth={true} duration={500}>Accounts</Link></li>
                <li className={articles_ ? 'pl-6 bg-[#F7F7F7] rounded border border-gray-300' : 'pl-6'} key={11}><Link onClick={articlesClick} to='articles' offset={-40} smooth={true} duration={500}>Articles</Link></li>
                <li className={vote_ ? 'pl-6 bg-[#F7F7F7] rounded border border-gray-300' : 'pl-6'} key={12}><Link onClick={voteClick} to='vote' offset={-40} smooth={true} duration={500}>Votes</Link></li>
            </ul>
        </div >
    )
}

export default ProfileNav
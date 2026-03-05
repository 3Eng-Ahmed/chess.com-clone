import React from 'react'
import Header from './Header'
import Stats from './Stats'
import { DailyGames } from './DailyGames'
import { Games } from './Games'
import { Side } from './side/Side'

export const Discription = ({details}) => {
  return (
    <div className='max-w-250 md:mx-auto mx-5 px-5 py-6 rounded-sm bg-[#262521]'>
      <p className="">{details.discription}</p>
      
    </div>
  )
}


const page = () => {
  const details = {
    userName : '3Eng_Ahmed',
    name:'Ahmed Ramadan',
    image:'https://images.chesscomfiles.com/uploads/v1/user/388767831.3a57afc0.32x32o.51d1c7c9b754.jpg',
    Status: "Turn a small advantage into a big win ✈!!",
    discription: "No need to engine, either way, I’m losing because of time",
    joinDate:'Sep 16 , 2024',
    friends:14,
    profileViews:57,
    lastSeen:'online'
  }
  return (
    <>
      <Header/>
      <div className="flex flex-col md:flex-row max-w-270 md:mx-auto  px-5 gap-5 rounded-sm my-4 ">
        <div className=''>
          <Stats/>
          <Discription details={details}/>
          <DailyGames/>
          <Games/>
        </div>
        <div className="min-w-66 flex-1">
          <Side/>
        </div>
      </div>


    </>
  )
}

export default page
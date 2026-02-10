import React from 'react'

const Header = () => {
  const details = {
    userName: '3Eng_Ahmed',
    name: 'Ahmed Ramadan',
    image: 'https://images.chesscomfiles.com/uploads/v1/user/388767831.3a57afc0.200x200o.593b6a58333f.jpg',
    Status: "Turn a small advantage into a big win ✈!!",
    joinDate: 'Sep 16 , 2024',
    friends: 14,
    profileViews: 57,
    lastSeen: 'online',
    active:true
  }
  return (
    <div className="max-w-250 md:mx-auto mx-5 px-5 bg-[#262521] rounded-sm my-4">
      <div className="border-b flex justify-between py-4">
        <div className="flex gap-8">
          {/* profile picture */}
          <div className="image h-40 w-40 overflow-hidden rounded-lg">
            {
              <img className='h-full w-full object-cover' src={details.image} alt="" />
            }

          </div>
          {/* profile details */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <h2 className='text-2xl font-semibold'>
                  {details.userName}
                </h2>
              </div>

              <h3 className='text-white/60'>{details.name}</h3>
              <p className='text-white/60 text-xs'>
                {details.Status}
              </p>
            </div>
            {/* Status */}
            <div className="flex gap-4 flex-wrap text-xs text-white/50">
              <div className="">
                <span className='text-white'>
                  {details.joinDate}
                </span>
                Joined
              </div>
              <div className="">
                <span className='text-white'>
                  {details.friends}
                </span>
                Friends
              </div>
              <div className="">
                <span className='text-white'>{details.profileViews} </span>
                Views
              </div>
              <div className="">
                Last Online:
                <span className='text-white'>{details.lastSeen}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <button className="bg-white/10 py-2 px-4 font-bold text-xs shadow-lg">
            Edit Profile
          </button>
        </div>
      </div>
      <div className="">
        <nav className='flex gap-4 text-sm'>
          <span className={`text-white/80 py-4 px-2 ease-in-out duration-300 ${details.active ? 'border-b-4 border-green-800 ' : ''}`}>
            Overview
          </span>
          <span className='text-white/80 py-4 px-2'>
            Games
          </span>
          <span className='text-white/80 py-4 px-2'>
            Stats
          </span>
          <span className='text-white/80 py-4 px-2'>
            Friends
          </span>
          <span className='text-white/80 py-4 px-2'>
            Award
          </span>
          <span className='text-white/80 py-4 px-2'>
            Clubs
          </span>
        </nav>
      </div>
    </div>
  )
}

export default Header
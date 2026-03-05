import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const friends = {
  name:"andrew",
  image:'https://images.chesscomfiles.com/uploads/v1/user/372675767.ec4d1e65.160x160o.9c7a695c8a96.jpg'
}

export const Friend = ({friend}) => {
  return (
    <Link href={friend.name}>
      <img className='h-full w-full object-cover rounded-sm overflow-hidden' src={friend.image} alt="" />
    </Link>
  )
}

export const Friends = () => {
  return (

    <div className='rounded-sm bg-[#262521] py-5 px-2'>
      <h2 className=" border-b font-bold mb-4">Friends</h2>
      <div className="grid grid-cols-5 gap-2 py-2 px-2">
        <Friend friend={friends}/>
        <Friend friend={friends}/>
        <Friend friend={friends}/>
        <Friend friend={friends}/>
        <Friend friend={friends}/>
        <Friend friend={friends}/>
        <Friend friend={friends}/>
        <Friend friend={friends}/>
      </div>
     
      
    </div>
  )
}



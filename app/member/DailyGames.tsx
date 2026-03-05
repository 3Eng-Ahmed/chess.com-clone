import Link from 'next/link'
import React from 'react'
export const DailyGames = () => {
  return (
    <div className='bg-[#262521] max-w-250 mx-auto px-5  mt-5 py-5 rounded-sm'>
      <div className="font-bold">
        <div className="flex gap-4 border-b border-b-white/20">
          <h2>Daily Games</h2>
          <span >({2})</span>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-4">
          <div className="chessGame">
            <Link href='/game/'>
              <div className="flex flex-col rounded-lg overflow-hidden">
                <div className="h-44 w-44 bg-orange-950"></div>
                <div className="flex gap-4 items-center">
                  <div className="profileImage h-15 w-12 bg-white overflow-hidden">
                  </div>
                   <h3 className='text-center text-sm font-medium'>Player name</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

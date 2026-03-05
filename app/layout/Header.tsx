export const Header = () => {
  const user = {
    name:'3Eng_Ahmed',
    userName:'3Eng_Ahmed',
    countery:'Egypt',
    image:'https://images.chesscomfiles.com/uploads/v1/user/388767831.3a57afc0.32x32o.51d1c7c9b754.jpg'


  }


  return (
    <>
      <header className="py-2 flex justify-between mx-4  md:mx-auto mt-10 max-w-250 ">
        <div className="flex gap-4 items-center">
          <div className="h-10 w-10 overflow-hidden">
            <img loading='lazy' className='h-full w-full object-contain' src={user.image} alt={user.name} />
          </div>
          <span className='font-extrabold text-lg'>{user.name}</span>
          <span className='text-xs'>{user.countery}</span>
  
        
        </div>
      </header>
    </>
  )
}

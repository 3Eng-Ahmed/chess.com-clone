
import Link from 'next/link';
import React from 'react';

const game = {
  controle: 'blitz',
  time: '5 min',
  icon: <svg aria-hidden="true" viewBox="0 0 24 24" height="20" width="20" fill="currentColor"><path d="M5.77002 15C4.74002 15 4.40002 14.6 4.57002 13.6L6.10002 3.4C6.27002 2.4 6.73002 2 7.77002 2H13.57C14.6 2 14.9 2.4 14.64 3.37L11.41 15H5.77002ZM18.83 9C19.86 9 20.03 9.33 19.4 10.13L9.73002 22.86C8.50002 24.49 8.13002 24.33 8.46002 22.29L10.66 8.99L18.83 9Z"></path></svg>,
  white: { name: 'worstplayeu', elo: 1215 , country:'Egypt' },
  black: { name: 'medecinredouane', elo: 1709, country:'Egypt' },
  winner: false,
  gameAnalyse:{ isAnalysed:false, gameAccuracy:84.22 , analyseLink:'url' },
  movesCounter: 21,
  date: 'Feb 10, 2026',
  url:"4412"
};

export const Game = ({game}) => {
  return (
    // Changed to grid-cols-5 to match the header
    <>
    <tr className="border-b text-sm">
      {/* time controle */}
      <td> 
        {game.controle}
      </td>

      <td>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-white"></span>
            <span> {game.white.name} ({game.white.elo}) 🏳</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-black"></span>
            <span>{game.black.name} ({game.black.elo}) 🏳</span>
          </div>
        </div>
      </td>

      {/* result */}

      <td>
        <div className="flex items-center gap-4">
          {game.winner ? (
            <>
              <span className="bg-green-800 flex items-center justify-center h-5 w-5"> + </span>
              <div className="flex flex-col gap-1">
                <span>1</span>
                <span>0</span>
              </div>
            </>
          )
          :
          (
            <>
              <span className="bg-red-800 flex items-center justify-center h-5 w-5"> - </span>
              <div className="flex flex-col gap-1">
                <span>0</span>
                <span>1</span>
              </div>
            </>
          )
          }        
         
        </div>
      </td>

      {/* game analyse  */}
      <td>
        {game.gameAnalyse.isAnalysed ?
          (
            <>
            <span>
              {game.gameAnalyse.gameAccuracy} %
            </span>
           
            </>
          )
          :
          (
            <>
              <Link href={`analysis/`+game.url+`/review`}>
                <button className='bg-white/20 py-1 px-3 my-6 cursor-pointer'>
                  Accuracy
                </button>
              </Link>
            </>
          )
        }
      </td>
      <td>{game.movesCounter}</td>
      <td>
        <data value={game.data}>
          {game.date}
        </data>
      </td>
    </tr>
    </>
  );
};

export const Games = () => {
  return (
    <div className="max-w-250 rounded-md md:mx-auto mx-5 bg-[#262521] text-white my-4 px-5 min-h-56 text-sm">
      <div className="overflow-x-scroll md:overflow-hidden ">
        <table className="w-full table-fixed border-collapse text-left ">
          <caption className="text-left mb-2 font-semibold py-4">
            Game History
          </caption>
          <thead >
            <tr className='bg-black/20 h-10  '>
              <th scope='col'>
                Time
              </th>
              <th scope='col' className='w-2/5'>
                Players
              </th>
              <th scope='col'>
                Results
              </th>
              <th scope='col'>
                Accuracy
              </th>
              <th scope='col'>
                Moves
              </th>
              <th scope='col'>
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <Game game={game}/>
          </tbody>
          
        </table>        
      </div>

    </div>
  );
};
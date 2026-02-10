import React from 'react';

const game = {
  controle: 'blitz',
  time: '5 min',
  icon: <svg aria-hidden="true" viewBox="0 0 24 24" height="20" width="20" fill="currentColor"><path d="M5.77002 15C4.74002 15 4.40002 14.6 4.57002 13.6L6.10002 3.4C6.27002 2.4 6.73002 2 7.77002 2H13.57C14.6 2 14.9 2.4 14.64 3.37L11.41 15H5.77002ZM18.83 9C19.86 9 20.03 9.33 19.4 10.13L9.73002 22.86C8.50002 24.49 8.13002 24.33 8.46002 22.29L10.66 8.99L18.83 9Z"></path></svg>,
  white: { name: 'worstplayeu', elo: 1215 },
  black: { name: 'medecinredouane', elo: 1709 },
  winner: true,
  movesCounter: 21,
  history: 'Feb 10, 2026'
};

export const Game = () => {
  return (
    // Changed to grid-cols-5 to match the header
    <div className="grid grid-cols-5 gap-4 py-3 px-4 items-center border-b border-white/5 hover:bg-white/5 transition-colors">
      
      {/* 1. Players Column */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center text-[10px] text-white/60">
          {game.icon}
          <span>{game.time}</span>
        </div>
        <div className="flex flex-col text-sm">
          <div className="flex gap-2 items-center">
            <span className='h-2 w-2 bg-white flex-shrink-0'></span>
            <span className="font-semibold truncate max-w-[100px]">{game.white.name}</span>
            <span className='text-white/30'>({game.white.elo})</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className='h-2 w-2 bg-black flex-shrink-0 border border-white/20'></span>
            <span className="font-semibold truncate max-w-[100px]">{game.black.name}</span>
            <span className='text-white/30'>({game.black.elo})</span>
          </div>
        </div>
      </div>

      {/* 2. Result Column */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col text-xs font-bold leading-tight">
          <span>0</span>
          <span>1</span>
        </div>
        <div className="bg-green-600 w-5 h-5 flex items-center justify-center rounded-sm">
          <span className="text-black font-bold text-xs">+</span>
        </div>
      </div>

      {/* 3. Accuracy Column */}
      <div className="flex flex-col text-sm text-white/80">
        <span>79.5%</span>
        <span>91.3%</span>
      </div>

      {/* 4. Moves Column */}
      <div className="text-sm">
        <span>{game.movesCounter}</span>
      </div>

      {/* 5. Date Column */}
      <div className="text-sm text-white/50 text-right">
        <p>{game.history}</p>
      </div>
    </div>
  );
};

export const Games = () => {
  return (
    <div className="max-w-250 rounded-md md:mx-auto mx-5 bg-[#262521] text-white my-4 overflow-hidden">
      <div className="font-bold text-lg p-5">
        Game History (<span className='text-white/60'>2,500</span>)
      </div>
      
      {/* Table Header */}
      <div className="grid grid-cols-5 text-xs uppercase tracking-wider text-white/40 bg-black/20 py-3 px-4">
        <div>Players</div>
        <div>Result</div>
        <div>Accuracy</div>
        <div>Moves</div>
        <div className="text-right">Date</div>
      </div>

      {/* Table Body */}
      <div className="flex flex-col">
        <Game />
        {/* You can map through your games array here */}
      </div>
      <div className="h-screen"></div>
    </div>
  );
};
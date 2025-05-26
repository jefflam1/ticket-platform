'use client';

import ThemeButton from './ThemeButton';

function Header() {
  return (
    <div className='flex flex-row w-full h-16  '>
      <h1 className=' text-2xl text-title'>Header</h1>
      <ThemeButton />
    </div>
  );
}

export default Header;

'use client';

import Link from 'next/link';
// import ThemeButton from './ThemeButton';
import Image from 'next/image';
import logo from '@/public/images/logo.png';
import { SignedIn, SignInButton, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import SearchBar from './SearchBar';

function Header() {
  return (
    <div className='border-b border-gray-200'>
      <div className='flex flex-col lg:flex-row items-center gap-4 p-4'>
        <div className='flex items-center justify-between w-full lg:w-auto'>
          <Link href='/'>
            <Image
              className='w-24 lg:w-28'
              src={logo}
              alt='logo'
              width={100}
              height={100}
            />
          </Link>
          <div className='lg:hidden'>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode='modal'>
                <Button className='bg-primary-500 text-white hover:bg-primary-300'>
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>

        {/* Search Bar - Full width on mobile */}
        <div className='w-full lg:max-w-2xl'>
          <SearchBar />
        </div>

        {/* Desktop action buttons */}
        <div className='hidden lg:block ml-auto'>
          <SignedIn>
            <div className='flex items-center gap-3'>
              <Link href='/seller'>
                <Button className='bg-primary-500 text-white hover:bg-primary-300 rounded-lg transition'>
                  Sell Tickets
                </Button>
              </Link>

              <Link href='/tickets'>
                <Button className='bg-secondary-400 text-white hover:bg-secondary-200 rounded-lg transition'>
                  My Tickets
                </Button>
              </Link>
              <UserButton />
            </div>
          </SignedIn>

          <SignedOut>
            <SignInButton mode='modal'>
              <Button className='bg-primary-500 text-white hover:bg-primary-300'>
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Mobile action button */}
        <div className='lg:hidden w-full flex justify-center gap-3'>
          <SignedIn>
            <Link href='/seller' className='flex-1'>
              <Button className='w-full text-sm px-3 py-1.5 bg-primary-500 text-white hover:bg-primary-300 rounded-lg transition'>
                Sell Tickets
              </Button>
            </Link>

            <Link href='/tickets' className='flex-1'>
              <Button className='w-full text-sm px-3 py-1.5 bg-secondary-400 text-white hover:bg-secondary-200 rounded-lg transition'>
                My Tickets
              </Button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React, { memo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { logo, profileIcon } from './../../../public/';
import { Box } from '@radix-ui/themes';

const Header = memo(() => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="flex flex-col sm:flex-row items-center p-4 px-16 sm:px-18 md:px-20 lg:px-24 xl:px-28
         border-b border-background-elevation-2 mb-10">
            <Box>
                <Link className='' href="/">
                    <Image
                        className=""
                        src={logo}
                        alt="Logo"
                        height={32}
                        width={32}
                    />
                </Link>
            </Box>

            <Box id="navbar-header" className='flex flex-row justify-between items-center w-full ml-4'>
                <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                    <nav className={`w-full transition-transform duration-300 md:static md:flex md:w-auto md:space-x-6 ${isMenuOpen ? 'translate-x-0' : 'translate-x-150'} md:translate-x-0`}>
                        <ul className='flex flex-col sm:flex-row sm:my-2 sm:space-x-0'>
                            <li className='text-center'>
                                <Link href="/dashboard pl-4" className="font-semibold text-sm hover:text-primary-hover">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="text-center pl-4">
                                <Link href="/tasks" className="font-semibold text-sm hover:text-primary-hover">
                                    Tasks
                                </Link>
                            </li>
                            <li className="text-center pl-4">
                                <Link href="/badges" className="font-semibold text-sm hover:text-primary-hover">
                                    Badges
                                </Link>
                            </li>
                            <li className="text-center pl-4">
                                <Link href="/leaderboard" className="font-semibold text-sm hover:text-primary-hover">
                                    Leaderboard
                                </Link>
                            </li>
                            <li className="text-center pl-4">
                                <Link href="/connections" className="font-semibold text-sm hover:text-primary-hover">
                                    Connections
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {!isMenuOpen && (<button
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    data-collapse-toggle="navbar-header"
                    type="button"
                    aria-controls="navbar-header"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>)}

                <div className='flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 hidden md:flex'>
                    <Box className="bg-background-elevation-2 text-text-secondary cursor-pointer hover:bg-background-elevation-3 text-center p-2 border-2 border-primary-hover rounded-3xl font-semibold">
                        How It Works
                    </Box>

                    <Box className="bg-background-elevation-3 cursor-pointer hover:bg-background-elevation-2 rounded-3xl text-center p-2">
                        <Box className="flex items-center space-x-1">
                            <Image
                                src={profileIcon}
                                alt="Profile Picture"
                                width={18}
                                height={18}
                                className="rounded-full" />
                            <span className="font-semibold text-text-primary">
                                user.name
                            </span>
                        </Box>
                    </Box>
                </div>
            </Box>
        </header>
    )
});

export default Header;
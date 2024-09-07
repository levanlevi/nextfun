import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { logo, profileIcon } from './../../../public/';
import { Box } from '@radix-ui/themes';

const Header = memo(() => {
    return (
        <header className="flex flex-col sm:flex-row items-center justify-between p-4 px-16 sm:px-18 md:px-20 lg:px-24 xl:px-28
         border-b border-background-elevation-2 mb-10 space-x-1">
            <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
                <Link href="/">
                    <Image
                        className="mr-10 sm:mr-6"
                        src={logo}
                        alt="Logo"
                        height={32}
                        width={32}
                    />
                </Link>

                <nav className="w-full sm:w-auto">
                    <ul className="flex flex-wrap sm:flex-nowrap justify-between sm:justify-start space-y-2 sm:space-y-0 sm:space-x-6">
                        <li>
                            <Link href="/dashboard" className="font-semibold text-sm hover:text-primary-hover">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/tasks" className="font-semibold text-sm hover:text-primary-hover">
                                Tasks
                            </Link>
                        </li>
                        <li>
                            <Link href="/badges" className="font-semibold text-sm hover:text-primary-hover">
                                Badges
                            </Link>
                        </li>
                        <li>
                            <Link href="/leaderboard" className="font-semibold text-sm hover:text-primary-hover">
                                Leaderboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/connections" className="font-semibold text-sm hover:text-primary-hover">
                                Connections
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className='flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2'>
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
        </header>
    )
});

export default Header;
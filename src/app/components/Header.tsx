import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { logo, profileIcon } from './../../../public/';
import { Button } from '@radix-ui/themes';

const Header = memo(() => {
    return (
        <header className="p-4 flex items-center justify-between px-[112px] border-b-2 border-default mb-10">
            <div className="flex items-center space-x-4">
                <Link href="/">
                    <Image
                    className="mr-10"
                        src={logo}
                        alt="Logo"
                        height={32}
                        layout="intrinsic" />
                </Link>

                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/dashboard" className={`${styles.link} font-semibold`}>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/tasks" className={`${styles.link} font-semibold`}>
                                Tasks
                            </Link>
                        </li>
                        <li>
                            <Link href="/badges" className={`${styles.link} font-semibold`}>
                                Badges
                            </Link>
                        </li>
                        <li>
                            <Link href="/leaderboard" className={`${styles.link} font-semibold`}>
                                Leaderboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/connections" className={`${styles.link} font-semibold`}>
                                Connections
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className='flex'>
                <Button
                    className={`${styles.howBtn} mr-2`}
                    radius="full"
                    size="3"
                    variant="outline">
                    How It Works
                </Button>

                <Button
                    variant="soft"
                    radius="large"
                    size="3"
                    className={`${styles.profBtn} mr-2`}>
                    <div className="flex items-center space-x-2">
                        <Image
                            src={profileIcon}
                            alt="Profile Picture"
                            width={18}
                            height={18}
                            className="rounded-full mr-2" />
                        <span>
                            user.name
                        </span>
                    </div>
                </Button>
            </div>
        </header>
    )
});

export default Header;
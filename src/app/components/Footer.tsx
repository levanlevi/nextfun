import { DiscordLogoIcon, GitHubLogoIcon, Link1Icon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { Box } from '@radix-ui/themes';
import React, { memo } from 'react';
import Image from 'next/image';
import { poweredBy } from '../../../public';
import Link from 'next/link';

const Footer = memo(() => {
    return (
        <footer className='flex justify-between items-center mt-2 px-[112px]'
            style={{ backgroundColor: 'var(--gray-a2)' }}>
            <Box className='flex space-x-4'>
                <Link href='https://discord.com' target='_blank'>
                    <DiscordLogoIcon />
                </Link>
                <Link href='https://x.com' target='_blank'>
                    <TwitterLogoIcon />
                </Link>
                <Link href='https://github.com' target='_blank'>
                    <GitHubLogoIcon />
                </Link>
            </Box>
            <Box className='flex justify-center flex-grow'>
                <Image src={poweredBy} alt='Powered By Absinthe Labs' height={35} />
            </Box>
        </footer>
    );
});


export default Footer;
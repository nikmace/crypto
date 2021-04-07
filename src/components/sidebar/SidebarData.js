import React from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import { FcBullish, FcHome, FcCurrencyExchange, FcElectronics, FcAbout } from 'react-icons/fc';


export const SidebarData = [
    {
        title: 'Main',
        path: '/',
        icon: <FcHome />,
    },
    {
        title: 'News',
        path: '/news',
        icon: <FcBullish />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,

        subNav: [
            {
                title: 'A.I',
                path: '/news/ai',
                icon: <FcElectronics />,
            },
        ]
    },
    {
        title: 'Wallet',
        path: '/wallet',
        icon: <FcCurrencyExchange />,
        
    },
    {
        title: 'About',
        path: '/about',
        icon: <FcAbout />,
    }
]



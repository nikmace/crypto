import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Main',
        path: '/',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'News',
        path: '/news',
        icon: <AiIcons.AiOutlineLineChart />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'A.I',
                path: '/news/ai',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Watchlist',
        path: '/watchlist',
        icon: <AiIcons.AiFillHome />,
        
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaCartPlus />,
    }
]



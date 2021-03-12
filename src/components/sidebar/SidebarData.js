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
        title: 'Chart',
        path: '/chart',
        icon: <AiIcons.AiOutlineLineChart />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Report ',
                path: '/reports/report1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Report 2',
                path: '/overview/report2',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Report 3',
                path: '/overview/report3',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
    }
]



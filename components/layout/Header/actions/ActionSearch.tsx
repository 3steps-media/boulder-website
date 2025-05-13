'use client';

import {Spotlight, SpotlightActionData, SpotlightActionGroupData, spotlight} from '@mantine/spotlight';
import {IconDashboard, IconFileText, IconHome, IconSearch} from "@tabler/icons-react";
import UIActionIcon from "@/components/ui/ui-action-icon";

export default function ActionSearch() {

    const actions: (SpotlightActionGroupData | SpotlightActionData)[] = [
        {
            group: 'Pages',
            actions: [
                {
                    id: 'home',
                    label: 'Home',
                    description: 'Get to home page',
                    onClick: () => console.log('Home'),
                    leftSection: <IconHome size={24} stroke={1.5}/>,
                },
                {
                    id: 'dashboard',
                    label: 'Dashboard',
                    description: 'Get full information about current system status',
                    onClick: () => console.log('Dashboard'),
                    leftSection: <IconDashboard size={24} stroke={1.5}/>,
                },
                {
                    id: 'documentation',
                    label: 'Documentation',
                    description: 'Visit documentation to lean more about all features',
                    onClick: () => console.log('Documentation'),
                    leftSection: <IconFileText size={24} stroke={1.5}/>,
                }
            ]
        }
    ];

    return (
        <>
            <UIActionIcon
                size="lg"
                radius={'xl'}
                aria-label="Search"
                variant={'transparent'}
                onClick={spotlight.open}
            >
                <IconSearch width={'70%'} height={'70%'}/>
            </UIActionIcon>

            <Spotlight
                actions={actions}
                nothingFound="Nothing found..."
                highlightQuery
                searchProps={{
                    leftSection: <IconSearch size={20} stroke={1.5}/>,
                    placeholder: 'Search...',
                }}
            />
        </>
    )
}
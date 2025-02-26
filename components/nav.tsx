'use client'

import Link from "next/link";
import {usePathname} from 'next/navigation'

export default function Nav(props: {
    className?: string;
    items: Item[];
}) {
    const currentPath = usePathname();

    return (
        <nav className={props.className}>
            <ul>
                {
                    props.items.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                data-active={
                                    item.href === currentPath
                                    || (item.href !== '/' && currentPath.startsWith(item.href))
                                    || undefined
                                }
                            >
                                {item.text}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export interface Item {
    text: string;
    href: string;
}
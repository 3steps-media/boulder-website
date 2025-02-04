import Link from "next/link";
import {usePathname} from 'next/navigation'

export default function NavMenu(props: {
    className?: string;
    currentClassName?: string;
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
                                className={currentPath === `${item.href}` ? `${props.currentClassName}` : ''}
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
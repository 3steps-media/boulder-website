import {APP_NAME} from "@/lib/constants";
import {Image} from "@mantine/core";
import NextImage from "next/image";
import Link from "next/link";

type LogoProps = {
    isLink?: boolean;
    href?: string;
    linkClassName?: string;
    imageClassName?: string;
}

export default function Logo({isLink = false, href = '/', ...props}: LogoProps) {

    const logo = <Image
        component={NextImage}
        src='/images/logo.svg'
        alt={APP_NAME}
        width={64}
        height={64}
        className={props.imageClassName}
        priority
    />

    return (
        <>
            {isLink
                ? <Link
                    href={href}
                    title={'Home'}
                    className={props.linkClassName}
                    passHref>
                    {logo}
                </Link>
                : logo
            }
        </>
    )
}
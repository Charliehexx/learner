'use client'

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";





type Props = {
    label: string;
    iconSrc: string;
    href: string;
}


export const SidebarItem = ({ label, iconSrc, href }: Props) => {
    const pathname = usePathname()
    const active = pathname === href
    return (
        <Button variant={active ? "custom" : "ghost"}
            className='justify-center flex items-center h-[52px] font-bold w-full  tracking-wider rounded-md' asChild>

            <Link href={href}>

                {/* <Image src={iconSrc}
                    className='mr-0'
                    alt="image"
                    height={32}
                    width={32} />
                {label} */}
                {label}
            </Link>

        </Button >

    )
}
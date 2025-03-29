'use client'
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/ui/AppSlidebar";
import { Menu } from "lucide-react";

export default function Router() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    const toggleSidebar = () => setOpen(!open);

    return (
        <header className="fixed top-0 left-0 w-full z-40 shadow-md">
            <div className={`${isHome ? 'bg-fon-white' : 'bg-dark-header'} h-[70px] flex items-center lg:justify-center justify-start px-4`}>
                {/* Десктопная навигация */}
                <nav className="">
                    <ul className="flex items-center md:gap-[30px] lg:gap-[60px]">
                        <Link href="/">
                            <Image src={isHome ? '/logo.svg' : '/darkLogo.svg'} alt="-" width={63} height={66} className="cursor-pointer ml-[50px] lg:mr-[50px]" />
                        </Link>
                        <li><Link className={`${isHome ? 'text-header-ul' : 'text-text-white'} font-light text-[15px] font-raleway hidden lg:flex`} href="/aboutCompany">О компании</Link></li>
                        <li><Link className={`${isHome ? 'text-header-ul' : 'text-text-white'} font-light text-[15px] font-raleway hidden lg:flex`} href="/memory">Память</Link></li>
                        <li><Link className={`${isHome ? 'text-header-ul' : 'text-text-white'} font-light text-[15px] font-raleway hidden lg:flex`} href="/center">Районный ритуальный центр</Link></li>
                        <li><Link className={`${isHome ? 'text-header-ul' : 'text-text-white'} font-light text-[15px] font-raleway hidden lg:flex`} href="/contact">Контакты</Link></li>
                        <li><Link className={`${isHome ? 'text-header-ul' : 'text-text-white'} font-light text-[15px] font-raleway hidden lg:flex`} href="/details">Реквизиты</Link></li>
                        <li><Link className={`${isHome ? 'text-header-ul' : 'text-text-white'} font-light text-[15px] font-raleway hidden lg:flex`} href="/reviews">Отзывы</Link></li>
                    </ul>
                </nav>

                {/* Кнопка бургера (мобильная версия) */}
                <button
                    className="p-2 lg:hidden fixed top-4 right-4 z-50 bg-gray-900 text-white rounded-md"
                    onClick={toggleSidebar}
                >
                    <Menu />
                </button>
            </div>

            {/* Sidebar */}
            <AppSidebar isOpen={open} toggleSidebar={toggleSidebar} />
        </header>
    );
}

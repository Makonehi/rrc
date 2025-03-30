import React from 'react';
import Image from 'next/image'
import Link from "next/link";

export default function DownHeader() {
    return (
        <div
            className="w-screen h-[101px] bg-dark-header flex md:justify-center xs:justify-around items-center overflow-hidden">
            <div className="">
                <Link href="/">
                    <Image src="/darkLogo.svg" alt="-" width={77} height={88}/>
                </Link>
            </div>
            <div className="xs:hidden md:block md:ml-[50px] lg:ml-[130px] xl:ml-[165px]">
                <Link href="/aboutCompany">
                    <p className="font-raleway text-text-white font-thin text-[12px] mb-[17px]">О компании</p>
                </Link>
                <Link href="/memory">
                    <p className="font-raleway text-text-white font-thin text-[12px]">Память</p>
                </Link>
            </div>
            <div className="xs:hidden md:block md:ml-[25px] lg:ml-[50px] xl:ml-[81px]">
                <Link href="/center">
                    <p className="font-raleway text-text-white font-thin text-[12px] mb-[17px]">Районный ритуальный
                        центр</p>
                </Link>
                <Link href='/contact'>
                    <p className="font-raleway text-text-white font-thin text-[12px]">Контакты</p>
                </Link>
            </div>
            <div className="xs:hidden md:block md:ml-[38px] lg:ml-[64px] xl:ml-[84px]">
                <Link href='/details'>
                    <p className="font-raleway text-text-white font-thin text-[12px] mb-[17px]">Реквизиты</p>
                </Link>
                <Link href="/reviews">
                    <p className="font-raleway text-text-white font-thin text-[12px]">Отзывы</p>
                </Link>
            </div>
            <div className="flex">
                <div className="max-w-[146px] xs:items-start  md:ml-[40px] lg:ml-[127px] xl:ml-[147px]">
                    <p className="font-raleway text-text-white font-thin text-[12px]">Удмуртская республика</p>
                    <p className="font-raleway text-text-white font-thin text-[12px] text-end">п. Кез</p>
                    <p className="font-raleway text-text-white font-thin text-[12px] text-end">с. Дебесы</p>
                </div>
                <div className="xs:ml-[30px] xs:items-start lg:ml-[20px] xl:ml-[25px]">
                    <p className="font-raleway text-text-white font-thin text-[12px]"><a href="tel:+79501570533">+ 7 950
                        157 053 3</a></p>
                    <p className="font-raleway text-text-white font-thin text-[12px]"><a href="tel:+79508368876">+ 7 950
                        836 887 6</a></p>
                    <p className="font-raleway text-text-white font-thin text-[12px]"><a href="tel:+79120125085">+ 7 912
                        012 50 85</a></p>
                </div>
            </div>
        </div>
    );
}

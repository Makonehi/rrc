import React from 'react';
import Image from 'next/image'
export default function DownHeader() {
    return (
        <div className="w-screen h-[101px] bg-dark-header flex pl-[385px] items-center overflow-hidden">
            <div>
                <Image src="/darkLogo.svg" alt="-" width={77} height={88}/>
            </div>
            <div className="ml-[165px]">
                <p className="font-raleway text-text-white font-thin text-[12px] mb-[17px]">О компании</p>
                <p className="font-raleway text-text-white font-thin text-[12px]">Память</p>
            </div>
            <div className="ml-[81px]">
                <p className="font-raleway text-text-white font-thin text-[12px] mb-[17px]">Районный ритуальный центр</p>
                <p className="font-raleway text-text-white font-thin text-[12px]">Контакты</p>
            </div>
            <div className="ml-[84px]">
                <p className="font-raleway text-text-white font-thin text-[12px] mb-[17px]">Реквизиты</p>
                <p className="font-raleway text-text-white font-thin text-[12px]">Отзывы</p>
            </div>
            <div className="max-w-[146px] ml-[147px]">
                <p className="font-raleway text-text-white font-thin text-[12px]">Удмуртская республика</p>
                <p className="font-raleway text-text-white font-thin text-[12px] text-end">п. Кез</p>
                <p className="font-raleway text-text-white font-thin text-[12px] text-end">с. Дебесы</p>
            </div>
            <div className="ml-[25px]">
                <p className="font-raleway text-text-white font-thin text-[12px]">+ 7 950 157 053 3</p>
                <p className="font-raleway text-text-white font-thin text-[12px]">+ 7 950 836 887 6</p>
                <p className="font-raleway text-text-white font-thin text-[12px]">+ 7 912 012 50 85</p>
            </div>
        </div>
    );
}

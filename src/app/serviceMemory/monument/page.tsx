'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import DownHeader from '@/app/downHeader/page';

interface MonumentType {
    img: string;
    name: string;
}

export default function Monument() {
    const [visibleCount, setVisibleCount] = useState(8);

    const dataMonument: MonumentType[] = [
        { img: '', name: 'Памятник №1' },
        { img: '', name: 'Памятник №2' },
        { img: '', name: 'Памятник №3' },
        { img: '', name: 'Памятник №4' },
        { img: '', name: 'Памятник №5' },
        { img: '', name: 'Памятник №6' },
        { img: '', name: 'Памятник №7' },
        { img: '', name: 'Памятник №8' },
        { img: '', name: 'Памятник №9' },
    ];

    return (
        <div className="overflow-x-hidden w-full">
            <div
                className="bg-cover bg-no-repeat overflow-hidden py-10"
                style={{ backgroundImage: 'url("/Service.svg")' }}
            >
                <div className="max-w-[1225px] w-full mx-auto px-4 sm:px-6 md:px-8">
                    <p className="text-header-ul font-cormorant text-[55px] font-normal text-center">Памятники</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-center mt-8">
                        {dataMonument.slice(0, visibleCount).map((item, index) => (
                            <div key={index} className="flex flex-col items-center w-full max-w-[265px] mx-auto">
                                <div className="w-full h-[200px] border border-black rounded-[20px]">
                                    <Image src={item.img} alt="-" width={265} height={200} className="object-cover w-full h-full rounded-[20px]" />
                                </div>
                                <p className="mt-4 font-cormorant text-header-ul text-[24px] font-normal text-center">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {visibleCount < dataMonument.length && (
                    <div className="flex justify-center items-center">
                        <p
                            onClick={() => setVisibleCount((prev) => prev + 8)}
                            className="relative text-header-ul font-raleway text-[20px] mt-[70px] text-center font-thin hover:text-neutral-700 cursor-pointer
                                    before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[url('/arrow360.svg')] before:bg-no-repeat before:left-[-20px] before:top-[30%]"
                        >
                            Загрузить еще
                        </p>
                    </div>
                )}
            </div>
            <DownHeader />
        </div>
    );
}

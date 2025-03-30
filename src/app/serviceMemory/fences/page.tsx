'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import DownHeader from "@/app/downHeader/page";

interface dinerType {
    img: string;
    name: string;
}

export default function Fences() {
    const [visibleCount, setVisibleCount] = useState(8)

    const dataDiner: dinerType[] = [
        {img: "", name: "Ограда №1"},
        {img: "", name: "Ограда №2"},
        {img: "", name: "Ограда №3"},
        {img: "", name: "Ограда №4"},
        {img: "", name: "Ограда №5"},
        {img: "", name: "Ограда №6"},
        {img: "", name: "Ограда №7"},
        {img: "", name: "Ограда №8"},
        {img: "", name: "Ограда №9"},
    ]

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 8)
    }
    return (
        <div className="overflow-x-hidden flex justify-center">
            <div className="bg-cover bg-no-repeat w-screen overflow-hidden py-10"
                 style={{backgroundImage: 'url("/Service.svg")'}}>
                <div className="xl:w-[1225px] lg:w-[1100px] md:w-[900px] mx-auto px-7 mt-[50px]">
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] mb-[30px] font-normal">Ограды</p>
                    </div>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 xs:grid-cols-2 xs:gap-[20px] md:gap-[30px] lg:gap-[30px] xl:gap-[55px]">
                        {dataDiner.slice(0, visibleCount).map((item, index) => (
                            <div key={index} className={`sm:w-[265px] ss:w-[200px] sm:h-[255px] ss:h-[205px] xs:w-[160px] xs:h-[165px] gap-y-8`}>
                                <div className="sm:w-[265px] ss:w-[200px] sm:h-[200px] ss:h-[140px] xs:w-[160px] xs:h-[100px] border border-black rounded-[20px]">
                                    <Image src={item.img} alt="-"/>
                                </div>
                                <div>
                                    <p className="mt-[15px] font-cormorant text-header-ul text-[32px] font-normal">{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {visibleCount < dataDiner.length && (
                    <div className="flex justify-center items-center">
                        <p onClick={() => setVisibleCount(prev => prev + 8)}
                           className="relative text-header-ul font-raleway text-[20px] mt-[70px] text-center font-thin hover:text-neutral-700 cursor-pointer
                                    before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[url('/arrow360.svg')] before:bg-no-repeat before:left-[-20px]  before:top-[30%]">
                            Загрузить еще
                        </p>
                    </div>
                )}
            </div>
            <DownHeader/>
        </div>
    );
}


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
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden py-10"
                 style={{backgroundImage: 'url("/Service.svg")'}}>
                <div className="w-[1225px] mx-auto px-7">
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] font-normal">Ограды</p>
                    </div>
                    <div className="grid grid-cols-4 gap-[55px]">
                        {dataDiner.slice(0, visibleCount).map((item, index) => (
                            <div key={index} className={`w-[265px] h-[255px] gap-y-8`}>
                                <div className="w-[265px] h-[200px] border border-black rounded-[20px]">
                                    <Image src={item.img} alt="-" width={265} height={200}/>
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


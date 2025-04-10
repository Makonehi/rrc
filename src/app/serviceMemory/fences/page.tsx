'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import DownHeader from "@/app/downHeader/page";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";


interface dinerType {
    img: string;
    name: string;
}

function DialogTrriger() {
    return null;
}

export default function Fences() {
    const [visibleCount, setVisibleCount] = useState(8)

    const dataDiner: dinerType[] = [
        {img: "/icon/fence1.jpg", name: "Ограда №1"},
        {img: "/icon/fence2.jpg", name: "Ограда №2"},
        {img: "/icon/fence3.jpg", name: "Ограда №3"},
        {img: "/icon/fence4.jpg", name: "Ограда №4"},
        {img: "/icon/fence5.jpg", name: "Ограда №5"},
        {img: "/icon/fence6.jpg", name: "Ограда №6"},
        {img: "/icon/fence7.jpg", name: "Ограда №7"},
        {img: "/icon/fence8.png", name: "Ограда №8"},
        {img: "/icon/fence9.png", name: "Ограда №9"},
        {img: "/icon/fence10.png", name: "Ограда №10"},
        {img: "/icon/fence11.png", name: "Ограда №11"},
        {img: "/icon/fence12.png", name: "Ограда №12"},
        {img: "/icon/fence13.png", name: "Ограда №13"},
        {img: "/icon/fence14.png", name: "Ограда №14"},
        {img: "/icon/fence15.png", name: "Ограда №15"},
        {img: "/icon/fence16.png", name: "Ограда №16"},
        {img: "/icon/benchThee1.jpg", name: "Лавочки №1"},
        {img: "/icon/benchTree2.jpeg", name: "Лавочки №2"},
        {img: "/icon/benchTree3.jpg", name: "Лавочки №3"},
        {img: "/icon/benchTree4.jpg", name: "Лавочки №4"},
        {img: "/icon/tableTree.jpeg", name: "Стол №1"},
    ]
    //0533

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 8)
    }
    return (
        <div className="overflow-x-hidden flex justify-center">
            <div className="xs:bg-no-repeat ss:bg-repeat-y bg-[length:100%_auto] bg-top w-screen overflow-hidden py-10"
                 style={{backgroundImage: 'url("/Service.svg")'}}>
                <div className="xl:max-w-[1225px] lg:max-w-[1100px] md:max-w-[900px] mx-auto px-7 mt-[50px]">
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] mb-[30px] font-normal">Ограды</p>
                    </div>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 xs:grid-cols-2 xs:gap-[20px] md:gap-[30px] lg:gap-[30px] xl:gap-[55px]">
                        {dataDiner.slice(0, visibleCount).map((item, index) => (
                            <div key={index} className={`sm:w-[265px] ss:w-[200px] sm:h-[255px] ss:h-[205px] xs:w-[160px] xs:h-[165px] gap-y-8`}>
                                <div className="sm:w-[265px] ss:w-[200px] sm:h-[200px] ss:h-[140px] xs:w-[160px] xs:h-[100px] border border-black rounded-[20px] flex justify-center items-center overflow-hidden">
                                    <Dialog>
                                        <DialogTrigger>
                                            <Image src={item.img} alt="-" width={265} height={200} className=""/>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <Image src={item.img} alt="-" width={600} height={300} className=""/>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                                <div>
                                    <p className="mt-[15px] font-cormorant text-header-ul xs:text-[28px] ss:text-[32px] font-normal">{item.name}</p>
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


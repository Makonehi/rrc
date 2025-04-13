"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import DownHeader from "@/app/downHeader/page";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import Head from "next/head";


interface dinerType {
    img: string;
    name: string;
}

interface FencesProps {
    dataDiner: dinerType[];
}


export default function Fences({dataDiner}: FencesProps) {
    const [visibleCount, setVisibleCount] = useState(8)


    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 8)
    }
    return (
        <>
            <Head>
                <meta name="title" content="Ограды"/>
                <meta name="description" content="Ограды на могилу с установкой в Кезу. Изготовление металлических оград на заказ. Качественные, надёжные."/>
                <link rel="canonical" href="https://ritualkez.ru/serviceMemory/fences"/>
            </Head>
            <div className="overflow-x-hidden flex justify-center">
                <div
                    className="xs:bg-no-repeat ss:bg-repeat-y bg-[length:100%_auto] bg-top w-screen overflow-hidden py-10"
                    style={{backgroundImage: 'url("/Service.svg")'}}>
                    <div className="xl:max-w-[1225px] lg:max-w-[1100px] md:max-w-[900px] mx-auto px-7 mt-[50px]">
                        <div>
                            <p className="text-header-ul font-cormorant text-[55px] mb-[30px] font-normal">Ограды</p>
                        </div>
                        <div
                            className="grid xl:grid-cols-4 lg:grid-cols-3 xs:grid-cols-2 xs:gap-[20px] md:gap-[30px] lg:gap-[30px] xl:gap-[55px]">
                            {dataDiner.slice(0, visibleCount).map((item, index) => (
                                <div key={index}
                                     className={`sm:w-[265px] ss:w-[200px] sm:h-[255px] ss:h-[205px] xs:w-[160px] xs:h-[165px] gap-y-8`}>
                                    <div
                                        className="sm:w-[265px] ss:w-[200px] sm:h-[200px] ss:h-[140px] xs:w-[160px] xs:h-[100px] border border-black rounded-[20px] flex justify-center items-center overflow-hidden">
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
        </>
    );
}
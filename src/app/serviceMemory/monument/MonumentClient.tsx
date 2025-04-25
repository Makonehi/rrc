'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import DownHeader from '@/app/downHeader/page';
import {MonumentType} from "@/app/serviceMemory/monument/data";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import Head from "next/head";

interface MonumentProp {
    dataMonument: MonumentType[]
}

export default function Monument({dataMonument}: MonumentProp) {
    const [visibleCount, setVisibleCount] = useState(8);


    return (
        <>
            <Head>
                <meta name="title" content="Памятники"/>
                <meta name="description"
                      content="Изготовление памятников на могилу в Кезу. Простые и сложные формы. Гранит, черный гранит. Качественно."/>
                <link rel="canonical" href="https://ritualkez.ru/serviceMemory/monument"/>
            </Head>
            <main className="overflow-x-hidden w-full">
                <div
                    className="xs:bg-no-repeat ss:bg-repeat-y w-screen bg-[length:100%_auto] bg-top bg-no-repeat overflow-hidden py-10"
                    style={{backgroundImage: 'url("/Service.svg")', minHeight: "calc(100vh - 101px)"}}
                >
                    <div className="max-w-[1225px] w-full mx-auto px-4 sm:px-6 md:px-8 mt-[21px]">
                        <h1 className="text-header-ul font-cormorant text-[55px] font-normal text-center">Памятники</h1>

                        <div
                            className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-center mt-8">
                            {dataMonument.slice(0, visibleCount).map((item, index) => (
                                <div key={index} className="flex flex-col items-center w-full max-w-[265px] mx-auto">
                                    <div className="w-[265px] h-[200px] flex justify-center  bg-white rounded-[20px] overflow-hidden">
                                        <Dialog>
                                            <DialogTrigger>
                                                <Image src={item.img} alt="-"
                                                       width={285}
                                                       height={220}
                                                       className="w-full h-full object-cover"/>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <Image src={item.img} alt="-" width={1000} height={700}
                                                       className="object-cover w-full h-full rounded-[20px]"/>
                                            </DialogContent>
                                        </Dialog>
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
                <DownHeader/>
            </main>
        </>
    );
}

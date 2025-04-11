'use client'
import Image from "next/image";
import Crest from "./image/crest.svg";
import Link from "next/link";
import './memory.css';
import Carusel from "@/app/carusel/page";
import DownHeader from "@/app/downHeader/page";
import {useState} from "react";


export default function Memory() {

    return (
        <div className={`w-full bg-cover bg-no-repeat overflow-x-hidden`}
             style={{backgroundImage: 'url("/fonMemory.svg")', minHeight: "calc(100vh)"}}>
            <div className="flex justify-center w-screen h-[800px]">
                <div
                    className="lg:flex w-full xs:grid xs:place-items-center xs:place-content-center lg:justify-center lg:items-center lg:gap-[83px] xs:gap-[35px] xs:mt-[140px]">
                    <div
                        className="relative xs:order-2 xl:w-[530px] xl:h-[570px] lg:w-[430px] lg:h-[470px] xs:w-[330px] xs:h-[360px] bg-memory-card rounded-[20px] pl-[34px] lg:pt-[76px] xs:pt-[60px]">
                        <div
                            className="text-cart-title xl:text-[32px] xs:text-[29px] font-cormorant font-thin xl:pl-[25px] xl:pt-[4px] xl:pr-[29px] xs:pb-[7px] xs:pl-[20px] xs:pr-[24px] bg-memory-black absolute top-0 right-0 rounded-bl-[20px] rounded-tr-[20px]">Память
                        </div>
                        <p className="text-text-memory font-cormorant xl:text-[30px] lg:text-[25px] xs:text-[20px]  font-normal">Организация
                            похорон в
                            п.Кез
                            (с.Дебесы)</p>
                        <div className="xl:mt-[32px] xs:mt-[10px] pl-[20px]">
                            <Link href="/serviceMemory">
                                <p className="relative text-text-memory font-cormorant xl:text-[24px] xs:text-[20px] xl:mb-[15px] xs::mb-[10px] font-thin hover:text-neutral-700 cursor-pointer before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[url('/dot.svg')] before:bg-no-repeat before:right-full before:top-[45%]">ограды</p>
                            </Link>
                            <Link href="/serviceMemory">
                                <p className="relative text-text-memory font-cormorant xl:text-[24px] xs:text-[20px] xl:mb-[15px] xs:mb-[10px] font-thin hover:text-neutral-700 cursor-pointer before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[url('/dot.svg')] before:bg-no-repeat before:right-full before:top-[45%]">издделия
                                    из камня</p>
                            </Link>
                            <Link href="/serviceMemory">
                                <p className="relative text-text-memory font-cormorant xl:text-[24px] xs:text-[20px] xl:mb-[15px] xs:mb-[10px] font-thin hover:text-neutral-700 cursor-pointer before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[url('/dot.svg')] before:bg-no-repeat before:right-full before:top-[45%]">памятники</p>
                            </Link>
                            <Link href="/serviceMemory">
                                <p className="relative text-text-memory font-cormorant xl:text-[24px] xs:text-[20px] xl:mb-[15px] xs:mb-[10px] font-thin hover:text-neutral-700 cursor-pointer before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[url('/dot.svg')] before:bg-no-repeat before:right-full before:top-[45%]">поминальные
                                    обеды</p>
                            </Link>
                            <Link href="/serviceMemory">
                                <p className="relative text-text-memory font-cormorant xl:text-[24px] xs:text-[20px] xl:mb-[15px] xs:mb-[10px] font-thin hover:text-neutral-700 cursor-pointer before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[url('/dot.svg')] before:bg-no-repeat before:right-full before:top-[45%]">прощальный
                                    зал</p>
                            </Link>
                        </div>
                        <div className="flex sm:order-1 justify-center xl:mt-[15px] lg:mt-[3px]">
                            <Link href="/serviceMemory">
                                <div
                                    className="relative lg:w-[160px] lg:h-[44px] xs:w-[140px] xs:h-[30px] rounded-[25px] bg-text-white hover:bg-hover-phone transition-colors duration-300 flex items-center justify-center lg:mt-[45px] xs:mt-[3px] cursor-pointer"
                                >
                                    <p className="text-dark-text">Услуги</p>
                                    <Image src="/arrow.svg" alt="-" width={9} height={9}
                                           className="absolute lg:top-[18px] lg:right-[18px] xs:top-[12px] xs:right-[18px]"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="xl:w-[530px] xl:h-[570px] lg:w-[430px] lg:h-[470px] xs:w-[330px] xs:h-[360px] relative rounded-[20px] overflow-hidden">
                        <Image src={Crest} alt="-" fill placeholder="blur" className="object-center"/>
                    </div>
                </div>
            </div>
            <div className="opis sm:h-[910px] xs:h-[690px] mt-[105px] w-screen flex justify-center items-center">
                <div
                    className='lg:w-[772px] lg:h-[880px] md:w-[672px] md:h-[880px] sm:w-[572px] sm:h-[780px] xs:w-[350px] xs:h-[670px] bg-text-white rounded-[20px] xs:pl-[30px] md:pt-[30px] xs:pt-[10px]'>
                    <p className="font-cormorant lg:text-[30px] sm:text-[25px] font-normal text-dark-text">Порядок
                        опеределения
                        формы
                        памятника:</p>
                    <div className="lg:pl-[45px] md:pl-[35px] xs:pl-[20px]">
                        <div className="relative md:mt-[25px] sm:mt-[20px] xs:mt-[15px]">
                            <p className="absolute left-[-30px] top-[-5px] text-dark-text font-cormorant sm:text-[24px] xs:text-[17px] font-normal">1.</p>
                            <p className="text-zinc-950 font-thin sm:text-[20px] xs:text-[15px] font-raleway">Определение личных
                                предпочтений.</p>
                            <p className="text-zinc-950 font-thin sm:text-[20px] xs:text-[15px] font-raleway md:mt-[15px] xs:mt-[7px]">
                                Форма памятника должна отражать индивидуальность усопшего и
                                соответствовать эстетическим предпочтениям.
                            </p>
                        </div>
                        <div className="relative lg:mt-[50px] md:mt-[45px] xs:mt-[17px]">
                            <p className="absolute top-[-5px] left-[-30px] text-dark-text font-cormorant sm:text-[24px] xs:text-[17px] font-normal">2.</p>
                            <p className="text-zinc-950 font-thin sm:text-[20px] xs:text-[15px] font-raleway">Определение размеров
                                могилы
                                и участка для памятника. </p>
                            <p className="text-zinc-950 font-thin sm:text-[20px] xs:text-[15px] font-raleway md:mt-[15px] xs:mt-[7px]">Мемориал
                                должен
                                быть пропорционален размеру могилы и окружающей территории.</p>
                        </div>
                        <div className="relative lg:mt-[50px] md:mt-[45px] xs:mt-[17px]">
                            <p className="absolute top-[-5px] left-[-30px] text-dark-text font-cormorant sm:text-[24px] xs:text-[17px] font-normal">3.</p>
                            <p className="text-zinc-950 font-thin sm:text-[20px] xs:text-[15px] font-raleway">Изучение правил и
                                рекомендаций на кладбище или мемориальном комплексе.</p>
                            <p className="text-zinc-950 font-thin sm:text-[20px] xs:text-[15px] font-raleway md:mt-[15px] xs:mt-[7px]">Многие
                                места имеют
                                ограничения на параметры изделий, которые нужно учитывать.</p>
                        </div>
                        <div className="relative lg:mt-[50px] md:mt-[45px] xs:mt-[17px]">
                            <p className="absolute top-[-5px] left-[-30px] text-dark-text font-cormorant sm:text-[24px] xs:text-[17px] font-normal">4.</p>
                            <p className="text-zinc-950 font-thin sm:text-[20px] xs:text-[15px] font-raleway">Определение
                                бюджета.</p>
                            <p className="text-zinc-950 font-thin sm:text-[20px] xs:text-[15px] font-raleway md:mt-[15px] xs:mt-[7px]">Размер и
                                форма
                                памятника влияют на его стоимость: чем больше и сложнее изделие, тем выше
                                цена.</p>
                        </div>
                        <div className="relative lg:mt-[50px] md:mt-[45px] xs:mt-[17px]">
                            <p className="absolute top-[-5px] left-[-30px] text-dark-text font-cormorant sm:text-[24px] xs:text-[17px] font-normal">5.</p>
                            <p className="text-zinc-950 font-thin sm:text-[20px] xs:text-[15px] font-raleway">Учёт климатических
                                условий
                                региона.</p>
                            <p className="text-zinc-950 font-thin sm:text-[20px] xs:text-[15px] font-raleway md:mt-[15px] xs:mt-[7px]">Выбранный
                                материал
                                и форма памятника должны выдерживать климатические условия
                                региона.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Carusel/>
            <DownHeader/>
        </div>
    );
}


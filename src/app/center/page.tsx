import React from 'react';
import Image from 'next/image'
import Link from "next/link";
import Carusel from "@/app/carusel/page";
import DownHeader from "@/app/downHeader/page";

export default function Center() {
    return (
        <div className={`w-full overflow-x-hidden bg-cover bg-no-repeat`}
             style={{backgroundImage: 'url("/memory1.png")', minHeight: "calc(100vh - 70px)"}}

        >
            <div className="flex justify-center items-center gap-[83px] mt-[60px]">
                <div className="w-[530px] h-[570px] rounded-[20px]">
                    <Image src="/centrFoto.svg" alt="=" width={530} height={570}/>
                </div>
                <div className="relative w-[530px] h-[570px] bg-memory-card rounded-[20px] pl-[34px] pt-[76px]">
                    <div
                        className={`pl-[5px] pt-[2px] pr-[6px] pb-[11px] absolute top-0 right-0 max-w-[180px] h-auto bg-memory-black text-cart-title font-cormorant text-[30px] font-normal rounded-tr-[20px] rounded-bl-[20px]`}>Районный
                        ритуальный центр
                    </div>
                    <p className="max-w-[322px] text-text-memory font-cormorant text-[30px] font-normal overflow-x-hidden">Организация
                        похорон в п.Кез (с.Дебесы)</p>
                    <div className="mt-[32px] pl-[20px]">
                        <Link href="/serviceCenter">
                            <p className="relative text-text-memory font-cormorant text-[24px] mb-[15px] font-thin hover:text-neutral-700 cursor-pointer before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[url('/dot.svg')] before:bg-no-repeat before:right-full before:top-[45%]">кремация</p>
                        </Link>
                        <Link href="/serviceCenter">
                            <p className="relative text-text-memory font-cormorant text-[24px] mb-[15px] font-thin hover:text-neutral-700 cursor-pointer before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[url('/dot.svg')] before:bg-no-repeat before:right-full before:top-[45%]">катафалк</p>
                        </Link>
                        <Link href="/serviceCenter">
                            <p className="relative text-text-memory font-cormorant text-[24px] mb-[15px] font-thin hover:text-neutral-700 cursor-pointer before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[url('/dot.svg')] before:bg-no-repeat before:right-full before:top-[45%]">груз 200</p>
                        </Link>
                    </div>
                    <div className="flex justify-center mt-[110px] overflow-x-hidden">
                        <Link href="/serviceCenter">
                            <div
                                className="relative w-[160px] h-[44px] rounded-[25px] bg-text-white hover:bg-hover-phone transition-colors duration-300 flex items-center justify-center mt-[45px] cursor-pointer">
                                <p className="text-dark-text">Услуги</p>
                                <Image src="/arrow.svg" alt="-" width={9} height={9}
                                       className="absolute top-[18px] right-[18px]"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-[185px] overflow-x-hidden">
                <div className="w-[772px] h-[880px] bg-text-white rounded-[20px] m-auto pl-[55px] pt-[30px] pr-[53px]">
                    <p className="font-cormorant text-[30px] font-normal text-dark-text">Порядок действий при утрате
                        близкого человека:</p>
                    <div className="pl-[45px]">
                        <div className="relative mt-[25px]">
                            <p className="absolute left-[-30px] top-[-5px] text-dark-text font-cormorant text-[24px] font-normal">1.</p>
                            <p className="text-zinc-950 font-thin text-[20px] font-raleway">Вызов сотрудника полиции</p>
                            <p className="text-zinc-950 font-thin text-[20px] font-raleway mt-[15px]">
                                Мемориал должен быть пропорционален размеру могилы и окружающей территории.
                            </p>
                        </div>
                        <div className="relative mt-[50px]">
                            <p className="absolute top-[-5px] left-[-30px] text-dark-text font-cormorant text-[24px] font-normal">2.</p>
                            <p className="text-zinc-950 font-thin text-[20px] font-raleway">Обращение в поликлинику
                                и участка для памятника. </p>
                            <p className="text-zinc-950 font-thin text-[20px] font-raleway mt-[15px]">Для оформления
                                всех необходимых медицинских документов, обратитесь в поликлинику, к которой прикреплен
                                умерший.
                                Поликлиника выдаст справку, подтверждающую факт смерти.</p>
                        </div>
                        <div className="relative mt-[50px]">
                            <p className="absolute top-[-5px] left-[-30px] text-dark-text font-cormorant text-[24px] font-normal">3.</p>
                            <p className="text-zinc-950 font-thin text-[20px] font-raleway">Подготовка документов
                                умершего</p>
                            <p className="text-zinc-950 font-thin text-[20px] font-raleway mt-[15px]">Для оформления
                                официальных документов потребуется паспорт и медицинский полис умершего.</p>
                        </div>
                        <div className="relative mt-[50px] overflow-x-hidden">
                            <p className="absolute top-[-5px] left-[-30px] text-dark-text font-cormorant text-[24px] font-normal">4.</p>
                            <p className="text-zinc-950 font-thin text-[20px] font-raleway">Вызов ритуального
                                агента.</p>
                            <p className="text-zinc-950 font-thin text-[20px] font-raleway mt-[15px]">Чтобы организовать
                                все необходимые процедуры с профессиональной поддержкой, свяжитесь с нашим ритуальным
                                агентом.
                                Наши специалисты помогут вам в сложной ситуации и возьмут на себя все необходимые
                                действия.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Carusel/>
            <DownHeader/>
        </div>
    );
}


import React from 'react';
import Image from 'next/image'
import Link from "next/link";
import Carusel from "@/app/carusel/page";
import DownHeader from "@/app/downHeader/page";
import './center.css'
import Head from "next/head";

export default function Center() {
    return (
        <>
            <Head>
                <title>Районный ритуальный центр</title>
                <meta name="description"
                      content="«Районный ритуальный центр» — профессиональное похоронное бюро в п. Кез и Дебесах в Удмуртии. Оказываем весь спектр ритуальных услуг: организация похорон, кремация, услуги катафалка, груз 200, подготовка и хранение тела, священнослужитель, копка и благоустройство могил, эксгумация, уборка мест захоронений. Быстро, с уважением, в круглосуточном режиме. Круглосуточный телефон: +7 (950) 157-05-33"/>
                <meta name='keywords'
                      className="ритуальные услуги, похорона, ритуальное бюро, похоронное бюро, кремация, катафалк, груз 200, подготовка тела, копка могил, священнослужитель, хранение тела, эксгумация, уборка мест захоронений, похоронные услуги, ритуальные услуги в поселке Кез, подготовка тела, макияж, прическа, одежда, похоронные услуги в поселке Кез"/>
                <link rel="canonical" href="https://ritualkez.ru/memory"/>
            </Head>
            <main className={`w-full overflow-x-hidden bg-cover bg-no-repeat`}
                  style={{backgroundImage: 'url("/fonMemory.svg")'}}

            >
                <div className="flex justify-center w-screen h-[800px]">
                    <div
                        className="lg:flex w-full xs:grid xs:place-items-center xs:place-content-center lg:justify-center lg:items-center lg:gap-[83px] xs:gap-[35px] xs:mt-[100px]">
                        <div
                            className="xl:w-[530px] xl:h-[570px] lg:w-[430px] lg:h-[470px] xs:w-[330px] xs:h-[360px] relative rounded-[20px] overflow-hidden">
                            <Image src="/centrFoto.svg" alt="=" fill className="object-cover"/>
                        </div>
                        <div
                            className="relative xs:order-2 xl:w-[530px] xl:h-[570px] lg:w-[430px] lg:h-[470px] xs:w-[330px] xs:h-[360px] bg-memory-card rounded-[20px]">
                            <div className="pl-[34px] lg:pt-[90px] xs:pt-[60px]">
                                <div
                                    className={`xs:pl-[5px] xs:pt-[2px] xs:pr-[6px] xl:pb-[11px] xs:pb-[6px] absolute top-0 right-0 xl:max-w-[180px] lg:max-w-[250px] xs:max-w-[180px] h-auto bg-memory-black text-cart-title font-cormorant xl:text-[30px] lg:text-[25px] xs:text-[19px] font-normal rounded-tr-[20px] rounded-bl-[20px]`}>Районный
                                    ритуальный центр
                                </div>
                                <p className="max-w-[322px] text-text-memory font-cormorant text-[30px] font-normal overflow-x-hidden">Организация
                                    похорон в п.Кез (с.Дебесы)</p>
                                <div className="lg:mt-[32px] xs:mt-[20px] pl-[20px]">
                                    <Link href="/serviceCenter">
                                        <p className="relative text-text-memory font-cormorant text-[24px] mb-[15px] font-thin hover:text-neutral-700 cursor-pointer before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[url('/dot.svg')] before:bg-no-repeat before:right-full before:top-[45%]">кремация</p>
                                    </Link>
                                    <Link href="/serviceCenter">
                                        <p className="relative text-text-memory font-cormorant text-[24px] mb-[15px] font-thin hover:text-neutral-700 cursor-pointer before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[url('/dot.svg')] before:bg-no-repeat before:right-full before:top-[45%]">катафалк</p>
                                    </Link>
                                    <Link href="/serviceCenter">
                                        <p className="relative text-text-memory font-cormorant text-[24px] mb-[15px] font-thin hover:text-neutral-700 cursor-pointer before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[url('/dot.svg')] before:bg-no-repeat before:right-full before:top-[45%]">груз
                                            200</p>
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
                            </div>
                            <div className="flex justify-center xl:mt-[15px] lg:mt-[3px] overflow-x-hidden">
                                <Link href="/serviceCenter">
                                    <div
                                        className="relative lg:w-[160px] lg:h-[44px] xs:w-[140px] xs:h-[30px] rounded-[25px] bg-text-white hover:bg-hover-phone transition-colors duration-300 flex items-center justify-center xl:mt-[45px] lg:mt-[30px] cursor-pointer">
                                        <p className="text-dark-text">Услуги</p>
                                        <Image src="/arrow.svg" alt="-" width={9} height={9}
                                               className="absolute lg:top-[18px] lg:right-[18px] xs:top-[12px] xs:right-[18px]"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opis sm:h-[910px] xs:h-[910px] mt-[105px] w-screen flex justify-center items-center">
                    <div
                        className="lg:w-[772px] lg:h-[880px] md:w-[672px] md:h-[880px] sm:w-[572px] sm:h-[780px] xs:w-[350px] xs:h-[870px] bg-text-white rounded-[20px] xs:pl-[20px] md:pt-[30px] xs:pt-[10px]">
                        <p className="font-cormorant sm:text-[30px] xs:text-[20px] font-normal text-dark-text">Порядок
                            действий при утрате
                            близкого человека:</p>
                        <div className="pl-[45px]">
                            <div className="relative mt-[25px]">
                                <p className="absolute left-[-30px] top-[-5px] text-dark-text font-cormorant text-[24px] font-normal">1.</p>
                                <p className="text-zinc-950 font-thin xs:text-[17px] md:text-[20px] font-raleway">Вызов
                                    сотрудника полиции</p>
                                <p className="text-zinc-950 font-thin xs:text-[17px] md:text-[20px] font-raleway mt-[15px]">
                                    Мемориал должен быть пропорционален размеру могилы и окружающей территории.
                                </p>
                            </div>
                            <div className="relative xs:mt-[15px] sm:mt-[50px]">
                                <p className="absolute top-[-5px] left-[-30px] text-dark-text font-cormorant text-[24px] font-normal">2.</p>
                                <p className="text-zinc-950 font-thin xs:text-[17px] md:text-[20px] font-raleway">Обращение
                                    в поликлинику
                                    и участка для памятника. </p>
                                <p className="text-zinc-950 font-thin xs:text-[17px] md:text-[20px] font-raleway mt-[15px]">Для
                                    оформления
                                    всех необходимых медицинских документов, обратитесь в поликлинику, к которой
                                    прикреплен
                                    умерший.
                                    Поликлиника выдаст справку, подтверждающую факт смерти.</p>
                            </div>
                            <div className="relative xs:mt-[15px] sm:mt-[50px]">
                                <p className="absolute top-[-5px] left-[-30px] text-dark-text font-cormorant text-[24px] font-normal">3.</p>
                                <p className="text-zinc-950 font-thin xs:text-[17px] md:text-[20px] font-raleway">Подготовка
                                    документов
                                    умершего</p>
                                <p className="text-zinc-950 font-thin xs:text-[17px] md:text-[20px] font-raleway mt-[15px]">Для
                                    оформления
                                    официальных документов потребуется паспорт и медицинский полис умершего.</p>
                            </div>
                            <div className="relative xs:mt-[15px] sm:mt-[50px]">
                                <p className="absolute top-[-5px] left-[-30px] text-dark-text font-cormorant text-[24px] font-normal">4.</p>
                                <p className="text-zinc-950 font-thin xs:text-[17px] md:text-[20px] font-raleway">Вызов
                                    ритуального
                                    агента.</p>
                                <p className="text-zinc-950 font-thin xs:text-[17px] md:text-[20px] font-raleway mt-[15px]">Чтобы
                                    организовать
                                    все необходимые процедуры с профессиональной поддержкой, свяжитесь с нашим
                                    ритуальным
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
            </main>
        </>
    );
}


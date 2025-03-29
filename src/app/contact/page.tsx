import React from 'react';
import Link from "next/link";
import Image from "next/image";
import hallOne from "@/app/serviceMemory/hall/icon/hallOne.svg";
import hallTwo from "@/app/serviceMemory/hall/icon/hallTwo.svg";
import hallThree from "@/app/serviceMemory/hall/icon/hallThree.svg";
import DownHeader from "@/app/downHeader/page";

export default function Contact() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("/Service.svg")', minHeight: "calc(100vh - 171px)"}}>
                <div className="w-[1225px] mx-auto px-7">
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] font-normal">Контакты</p>
                        <p className="text-header-ul font-cormorant text-[55px] font-normal">Республика Удмуртия</p>
                    </div>
                    <div className="flex gap-[40px] mt-[80px]">
                        <div className="border border-dark-text w-[756px]">
                            <div className="flex h-[126px] gap-[115px] border-b border-dark-text items-center pl-[15px]">
                                <div>
                                    <p className="text-black font-raleway text-[24px] font-thin">«Районный ритуальный центр»</p>
                                    <p className="text-black font-raleway text-[24px] font-thin"> п. Кез, ул. Больничный городок Д. 4б</p>
                                </div>
                                <div>
                                    <p className="text-black font-raleway text-[24px] font-thin">+7 (950)-157-053-3</p>
                                </div>
                            </div>
                            <div className="flex h-[126px] items-center pl-[15px] gap-[110px]">
                                <div>
                                    <p className="text-header-ul font-raleway text-[24px] font-thin">«Память» изготовление памятников,</p>
                                    <p className="text-header-ul font-raleway text-[24px] font-thin">п. Кез , ул. Кирова, д. 6а </p>
                                </div>
                                <div>
                                    <p className="text-header-ul font-raleway text-[24px] font-thin">+7 (950)-836-887-6</p>
                                </div>
                            </div>
                            <div className="flex h-[126px] border-t border-dark-text items-center pl-[15px] gap-[89px]">
                                <div>
                                    <p className="text-header-ul font-raleway text-[24px] font-thin">«Районный ритуальный центр»</p>
                                    <p className="text-header-ul font-raleway text-[24px] font-thin max-w-[434px]">Удмуртская республика, с. Дебесы, ул. Андронова, д 20б</p>
                                </div>
                                <div>
                                    <p className="text-header-ul font-raleway text-[24px] font-thin">+7 (912)-012-50-85</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[368px] h-[319px] bg-memory-black rounded-[60px] px-[29px] py-[30px]">
                            <p className="text-text-white font-normal font-cormorant text-[36px] text-center">Свяжитесь с нами</p>
                            <p className="max-w-[309px] font-raleway text-[15px] text-text-white font-thin mt-[15px]">Позвоните или напишите нам сообщение. Мы проконсультируем и поможем вам по любому вопросу.</p>
                            <div className="mt-[33px]">
                                <p className="text-micro-text font-thin text-[15px] font-raleway mt-[20px]">Телефон:</p>
                                <p className="text-text-white font-thin text-[15px] font-raleway">+7 (950)-157-053-3</p>
                                <p className="text-text-white font-thin text-[15px] font-raleway">+7 (950)-836-887-6</p>
                                <p className="text-text-white font-thin text-[15px] font-raleway">+7 (912)-012-50-85</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


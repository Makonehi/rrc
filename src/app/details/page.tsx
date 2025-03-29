import React from 'react';
import Link from "next/link";
import Image from "next/image";
import hallOne from "@/app/serviceMemory/hall/icon/hallOne.svg";
import hallTwo from "@/app/serviceMemory/hall/icon/hallTwo.svg";
import hallThree from "@/app/serviceMemory/hall/icon/hallThree.svg";
import DownHeader from "@/app/downHeader/page";

export default function Details() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("/Service.svg")', minHeight: "calc(100vh - 171px)"}}>
                <div className="w-[1225px] mx-auto px-7">
                    <div className="">
                        <p className="text-header-ul font-cormorant text-[55px] font-normal">Реквизиты</p>
                    </div>
                    <div className="w-[1144px] h-[867px] border border-black mb-[30px] flex">
                        <div className="border-r border-black w-[572px] h-[867px]">
                            <p className="text-zero font-raleway text-[32px] font-thin">Полное наименование:</p>
                            <p className="text-zero font-raleway text-[32px] font-thin mt-[40px]">Сокращенное наименование:</p>
                            <p className="text-zero font-raleway text-[32px] font-thin mt-[40px]">ИНН:</p>
                            <p className="text-zero font-raleway text-[32px] font-thin mt-[40px]">ОГРНИП:</p>
                            <p className="text-zero font-raleway text-[32px] font-thin mt-[40px]">Юридический адрес:</p>
                            <p className="text-zero font-raleway text-[32px] font-thin mt-[40px]">Фактический адрес:</p>
                            <p className="text-zero font-raleway text-[32px] font-thin mt-[40px]">Телефон, факс:</p>
                            <p className="text-zero font-raleway text-[32px] font-thin mt-[40px]">Электронная почта:</p>
                            <p className="text-zero font-raleway text-[32px] font-thin mt-[40px]">Банковские реквизиты:</p>
                        </div>
                        <div className="w-[572px] h-[867px]">
                            <p className="text-zero font-raleway text-[24px] font-thin">Индивидуальный предприниматель Лекомцев Кирилл </p>
                            <p className="text-zero font-raleway text-[24px] font-thin mt-[25px]">ИП Лекомцев Кирилл </p>
                            <p className="text-zero font-raleway text-[24px] font-thin mt-[50px]">100000000002</p>
                            <p className="text-zero font-raleway text-[24px] font-thin mt-[58px]">300000000000001</p>
                            <p className="text-zero font-raleway text-[24px] font-thin mt-[35px]">400003, Удмурская Республика , п. Кез ул. Кирова 6д</p>
                            <p className="text-zero font-raleway text-[24px] font-thin mt-[20px]">400003, Удмурская Республика , п. Кез ул. Кирова 6д</p>
                            <p className="text-zero font-raleway text-[24px] font-thin mt-[23px]">+7 (950) - 157 - 053 - 3</p>
                            <p className="text-zero font-raleway text-[24px] font-thin mt-[48px]">retyal@mail.ru</p>
                            <p className="text-zero font-raleway text-[24px] font-thin mt-[35px]">Банковские реквизиты:</p>
                            <p className="text-zero font-raleway text-[24px] font-thin">БИК 000000003</p>
                            <p className="text-zero font-raleway text-[24px] font-thin">Р/С № 10000000000000000000</p>
                            <p className="text-zero font-raleway text-[24px] font-thin">Отделение</p>
                            <p className="text-zero font-raleway text-[24px] font-thin">Кор/счет</p>
                        </div>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


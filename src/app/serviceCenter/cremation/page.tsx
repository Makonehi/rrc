import React from 'react';
import Image from "next/image";
import hallOne from "@/app/serviceMemory/hall/icon/hallOne.svg";
import hallTwo from "@/app/serviceMemory/hall/icon/hallTwo.svg";
import hallThree from "@/app/serviceMemory/hall/icon/hallThree.svg";
import DownHeader from "@/app/downHeader/page";

export default function Cremation() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("fonCenter.svg")', minHeight: "calc(100vh - 171px)"}}>
                <div className="w-[1225px] mx-auto px-7">
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] font-normal">Кремация</p>
                    </div>
                    <div className="">
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[35px]">При выборе услуги кремации в нашем бюро всегда можно подобрать красивую урну для праха.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[55px]">Мы сотрудничаем только с лицензированными крематориями и осуществляем все организационные мероприятия по услуге кремации.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[35px]">Где бы вы не находились, мы доставим урну с прахом покойного по любому указанному адресу.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[35px]">Для получения бесплатной консультации звоните на наш указаный номер.</p>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


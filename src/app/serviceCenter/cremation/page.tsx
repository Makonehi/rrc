import React from 'react';
import DownHeader from "@/app/downHeader/page";

export default function Cremation() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("fonCenter.svg")', minHeight: "calc(100vh)"}}>
                <div className="max-w-[1225px] w-full mx-auto px-8 mt-[80px]">
                    <div>
                        <p className="text-header-ul font-cormorant xl:text-[55px] lg:text-[48px] md:text-[42px] sm:text-[36px] ss:text-[30px] xs:text-[26px] font-normal">Кремация</p>
                    </div>
                    <div className="">
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">При выборе услуги кремации в нашем бюро всегда можно подобрать красивую урну для праха.</p>
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[55px]">Мы сотрудничаем только с лицензированными крематориями и осуществляем все организационные мероприятия по услуге кремации.</p>
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">Где бы вы не находились, мы доставим урну с прахом покойного по любому указанному адресу.</p>
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">Для получения бесплатной консультации звоните на наш указаный номер.</p>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


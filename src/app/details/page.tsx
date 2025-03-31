import React from 'react';
import DownHeader from "@/app/downHeader/page";

export default function Details() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("/Service.svg")', minHeight: "calc(100vh)"}}>
                <div className="max-w-[1225px] flex justify-center w-full mx-auto px-7 mt-[80px]">
                    <div>
                        <div className="">
                            <p className="text-header-ul font-cormorant text-[55px] lg:text-[48px] md:text-[42px] sm:text-[36px] ss:text-[30px] xs:text-[26px] font-normal">Реквизиты</p>
                        </div>
                        <div className="max-w-[1144px] xl:h-[867px] xs:max-h-[1500px] mx-auto mb-[30px] mt-[30px] xl:flex">
                            <div className="xl:border xs:border-2 border-black pl-[10px] xl:pl-0 xs:max-w-[572px] xl:w-[572px] xl:h-[867px]">
                                <div>
                                    <p className="text-zero font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin">Полное
                                        наименование:</p>
                                    <p className="text-zero font-raleway xl:hidden xs:block lg:text-[24px] md:text-[22px] ss:text-[20px] xs:text-[18px] font-extralight">
                                        Индивидуальный предприниматель Лекомцев Кирилл
                                    </p>
                                </div>
                                <div>
                                    <p className="text-zero font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[40px]">
                                        Сокращенное наименование:
                                    </p>
                                    <p className="text-zero font-raleway xl:hidden xs:block lg:text-[24px] md:text-[22px] ss:text-[20px] xs:text-[18px] font-extralight">
                                        ИП Лекомцев Кирилл
                                    </p>
                                </div>
                                <div>
                                    <p className="text-zero font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[40px]">
                                        ИНН:
                                    </p>
                                    <p className="text-zero font-raleway xl:hidden xs:block lg:text-[24px] md:text-[22px] ss:text-[20px] xs:text-[18px] font-extralight">
                                        100000000002
                                    </p>
                                </div>
                                <div>
                                    <p className="text-zero font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[40px]">
                                        ОГРНИП:
                                    </p>
                                    <p className="text-zero font-raleway xl:hidden xs:block lg:text-[24px] md:text-[22px] ss:text-[20px] xs:text-[18px] font-extralight">
                                        300000000000001
                                    </p>
                                </div>
                                <div>
                                    <p className="text-zero font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[40px]">
                                        Юридический адрес:
                                    </p>
                                    <p className="text-zero font-raleway xl:hidden xs:block lg:text-[24px] md:text-[22px] ss:text-[20px] xs:text-[18px] font-extralight">
                                        400003, Удмурская Республика , п. Кез ул. Кирова 6д
                                    </p>
                                </div>
                                <div>
                                    <p className="text-zero font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[40px]">
                                        Фактический адрес:
                                    </p>
                                    <p className="text-zero font-raleway xl:hidden xs:block lg:text-[24px] md:text-[22px] ss:text-[20px] xs:text-[18px] font-extralight">
                                        400003, Удмурская Республика , п. Кез ул. Кирова 6д
                                    </p>
                                </div>
                                <div>
                                    <p className="text-zero font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[40px]">
                                        Телефон, факс:
                                    </p>
                                    <p className="text-zero font-raleway xl:hidden xs:block lg:text-[24px] md:text-[22px] ss:text-[20px] xs:text-[18px] font-extralight">
                                        +7 (950) - 157 - 053 - 3
                                    </p>
                                </div>
                                <div>
                                    <p className="text-zero font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[40px]">
                                        Электронная почта:
                                    </p>
                                    <p className="text-zero font-raleway xl:hidden xs:block lg:text-[24px] md:text-[22px] ss:text-[20px] xs:text-[18px] font-extralight">
                                        retyal@mail.ru
                                    </p>
                                </div>
                                <div>
                                    <p className="text-zero font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[40px]">
                                        Банковские реквизиты:
                                    </p>
                                    <p className="text-zero font-raleway xl:hidden xs:block lg:text-[24px] md:text-[22px] ss:text-[20px] xs:text-[18px] font-extralight">
                                        БИК 000000003
                                    </p>
                                    <p className="text-zero font-raleway xl:hidden xs:block lg:text-[24px] md:text-[22px] ss:text-[20px] xs:text-[18px] font-extralight">
                                        Отделение
                                    </p>
                                    <p className="text-zero font-raleway xl:hidden xs:block lg:text-[24px] md:text-[22px] ss:text-[20px] xs:text-[18px] font-extralight">
                                        Кор/счет
                                    </p>
                                </div>
                            </div>
                            <div
                                className="hidden xl:block border-t border-r border-b border-black w-[572px] h-[867px]">
                                <p className="text-zero font-raleway text-[24px] font-thin">
                                    Индивидуальный предприниматель Лекомцев Кирилл
                                </p>
                                <p className="text-zero font-raleway text-[24px] font-thin mt-[25px]">
                                    ИП Лекомцев Кирилл
                                </p>
                                <p className="text-zero font-raleway text-[24px] font-thin mt-[50px]">
                                    100000000002
                                </p>
                                <p className="text-zero font-raleway text-[24px] font-thin mt-[58px]">
                                    300000000000001
                                </p>
                                <p className="text-zero font-raleway text-[24px] font-thin mt-[35px]">
                                    400003, Удмурская Республика , п. Кез ул. Кирова 6д
                                </p>
                                <p className="text-zero font-raleway text-[24px] font-thin mt-[20px]">
                                    400003, Удмурская Республика , п. Кез ул. Кирова 6д
                                </p>
                                <p className="text-zero font-raleway text-[24px] font-thin mt-[23px]">
                                    +7 (950) - 157 - 053 - 3
                                </p>
                                <p className="text-zero font-raleway text-[24px] font-thin mt-[48px]">
                                    retyal@mail.ru
                                </p>
                                <p className="text-zero font-raleway text-[24px] font-thin mt-[35px]">
                                    Банковские реквизиты:
                                </p>
                                <p className="text-zero font-raleway text-[24px] font-thin">
                                    БИК 000000003
                                </p>
                                <p className="text-zero font-raleway text-[24px] font-thin">
                                    Р/С № 10000000000000000000
                                </p>
                                <p className="text-zero font-raleway text-[24px] font-thin">
                                    Отделение
                                </p>
                                <p className="text-zero font-raleway text-[24px] font-thin">
                                    Кор/счет
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


import React from 'react';
import Link from "next/link";
import Image from "next/image";
import hallOne from "@/app/serviceCenter/hall/icon/hallOne.svg";
import hallTwo from "@/app/serviceCenter/hall/icon/hallTwo.svg";
import hallThree from "@/app/serviceCenter/hall/icon/hallThree.svg";
import DownHeader from "@/app/downHeader/page";

export default function Exhumation() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("/fonCenter.svg")', minHeight: "calc(100vh)"}}>
                <div className="max-w-[1225px] mx-auto px-8 mt-[80px]">
                    <div>
                        <p className="text-header-ul font-cormorant xl:text-[55px] lg:text-[48px] md:text-[42px] sm:text-[36px] ss:text-[30px] xs:text-[26px] font-normal">Эксгумация</p>
                    </div>
                    <div className="mb-[30px]">
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">По законодательству РФ эксгумация возможна в двух случаях:</p>
                        <div className="pl-[20px]">
                            <p className="text-black font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">1. Если родственники решили перезахоронить тело.</p>
                            <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">2. Если требуется провести судебно-медицинскую экспертизу или опознание.</p>
                        </div>
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">Чтобы заказать эксгумацию, нужно предоставить пакет документов:</p>
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">1. Документ, подтверждающий, что у вас есть место на кладбище или ячейка в колумбарии в месте перезахоронения. Без него провести эксгумацию нельзя.</p>
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">2. Справка СЭС (Санэпидемнадзор) об отсутствии возражений на эксгумацию и перевозку тела.</p>
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">3. Разрешение полиции на эксгумацию.</p>
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">4. Разрешение администрации кладбища по месту текущего захоронения на эксгумацию.</p>
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">При наличии полного пакета документов, администрация кладбища не вправе отказать в выдаче разрешения на эксгумацию.</p>
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[55px]">Если остались вопросы звоните по указанному номеру в <Link href="/contact"><span className="hover:text-micro-text border-b border-dark-text hover:border-micro-text">контактах</span></Link>.</p>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


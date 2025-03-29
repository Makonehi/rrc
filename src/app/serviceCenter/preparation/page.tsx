import React from 'react';
import Link from "next/link";
import DownHeader from "@/app/downHeader/page";

export default function Preparation() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("/fonCenter.svg")', minHeight: "calc(100vh - 171px)"}}>
                <div className="w-[1225px] mx-auto px-7">
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] font-normal">Подготовка тела</p>
                    </div>
                    <div className="mb-[30px]">
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[55px]">Предпохоронная подготовка тела умершего - услуга, которая обязательно делается перед захоронением человека.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[70px]">В услугу танатопрактика, подготовки тела умершего, входит:</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[20px]">Омовение - санитарно гигиеническая норма, в том числе относится и к религиозным обрядам.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[20px]">Бальзамирование - позволяет предотвратить гниение тела умершего или отдельных его частей (органов).</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[20px]">Парикмахерские услуги - включают в себя стрижку, укладку, бритье лица, маникюр и т.д..</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[20px]">Реставрация тела умершего -  отдельная и одна из наиболее сложных работ в процессе подготовки тела умершего, услуга.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[70px]">По все интересующим вопросам звоните по указанному номеру в <Link href="/contact"><span className="hover:text-micro-text border-b border-dark-text hover:border-micro-text">контактах</span></Link>.</p>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


import React from 'react';
import Link from "next/link";
import DownHeader from "@/app/downHeader/page";

export default function Dig() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("fonCenter.svg")', minHeight: "calc(100vh - 171px)"}}>
                <div className="w-[1225px] mx-auto px-7">
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] font-normal">Прощальный зал</p>
                    </div>
                    <div className="">
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[35px]">Наши сотрудники обладают достаточным опытом в данной сфере, зная все аспекты и нюансы грамотной копки могил для организации прощания. Для нас не существует секретов в этой области: используя современное оборудование и свои навыки, мы гарантируем быстрое выполнение любой поставленной задачи.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[55px]">Мы поможем вам подготовите качественное место для захоронения в самые сжатые сроки.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[55px]">По заказу копки могилы звоните по указанному номеру в <Link href="/contact"><span className="hover:text-micro-text border-b border-dark-text hover:border-micro-text">контактах</span></Link>.</p>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


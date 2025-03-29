import React from 'react';
import Link from "next/link";
import Image from "next/image";
import hallOne from "@/app/serviceMemory/hall/icon/hallOne.svg";
import hallTwo from "@/app/serviceMemory/hall/icon/hallTwo.svg";
import hallThree from "@/app/serviceMemory/hall/icon/hallThree.svg";
import DownHeader from "@/app/downHeader/page";

export default function Storage() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("/fonCenter.svg")', minHeight: "calc(100vh - 171px)"}}>
                <div className="w-[1225px] mx-auto px-7">
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] font-normal">Прощальный зал</p>
                    </div>
                    <div className="">
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[35px]">Очень часто в услугах холодильной камеры могут нуждаться при необходимости долгого хранения тела для дальнейшего захоронения в конкретный день, которая требует времени. По этому у нас свои холодильники на такой случай.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[55px]">Для обеспепчения хранения тела звоните по указанному номеру в <Link href="/contact"><span className="hover:text-micro-text border-b border-dark-text hover:border-micro-text">контактах</span></Link>.</p>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


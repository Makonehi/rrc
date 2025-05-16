import React from 'react';
import Link from "next/link";
import Image from "next/image";
import hallOne from "@/app/serviceCenter/hall/icon/hallOne.svg";
import hallTwo from "@/app/serviceCenter/hall/icon/hallTwo.svg";
import hallThree from "@/app/serviceCenter/hall/icon/hallThree.svg";
import DownHeader from "@/app/downHeader/page";

export default function Storage() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("/fonCenter.svg")', minHeight: "calc(100vh)"}}>
                <div className="max-w-[1225px] mx-auto px-8 mt-[80px]">
                    <div>
                        <p className="text-header-ul font-cormorant xl:text-[55px] lg:text-[48px] md:text-[42px] sm:text-[36px] ss:text-[30px] xs:text-[26px] font-normal">Хранения тела</p>
                    </div>
                    <div className="">
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">Очень часто в услугах холодильной камеры могут нуждаться при необходимости долгого хранения тела для дальнейшего захоронения в конкретный день, которая требует времени. По этому у нас свои холодильники на такой случай.</p>
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[55px]">Для обеспепчения хранения тела звоните по указанному номеру в <Link href="/contact"><span className="hover:text-micro-text border-b border-dark-text hover:border-micro-text">контактах</span></Link>.</p>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


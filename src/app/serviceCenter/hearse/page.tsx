import React from 'react';
import Image from "next/image";
import DownHeader from "@/app/downHeader/page";
import HearseOne from "./icon/hearseOne.svg";
import HearseTwo from "./icon/hearseTwo.svg";
import HearseThree from "./icon/hearseThree.svg";
import Link from "next/link";


export default function Hearse() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("/fonCenter.svg")', minHeight: "calc(100vh - 171px)"}}>
                <div className="w-[1225px] mx-auto px-7">
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] font-normal">Катафалк</p>
                    </div>
                    <div className="mb-[20px]">
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[55px]">У нас собственный транспорт-катафалк и для церемонии прощания с близким человеком это для нас важная и очень ответственная часть при организации похоронной процессии.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[80px]">Мы готовы позаботиться о том, чтобы обеспечить все достойные и качественные прощания с близким человеком. Для бронирования машины звоните по указанному номеру в <Link href="/contact"><span className="hover:text-micro-text border-b border-dark-text hover:border-micro-text">контактах</span></Link>.</p>
                        <div className="flex gap-[32px] mt-[30px]">
                            <Image src={HearseOne} alt="-" width={360} height={310}/>
                            <Image src={HearseTwo} alt="-" width={360} height={310}/>
                            <Image src={HearseThree} alt="-" width={360} height={310}/>
                        </div>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


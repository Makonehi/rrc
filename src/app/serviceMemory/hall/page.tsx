import React from 'react';
import Image from "next/image";
import DownHeader from "@/app/downHeader/page";
import hallOne from './icon/hallOne.svg';
import hallTwo from './icon/hallTwo.svg';
import hallThree from './icon/hallThree.svg';
import Link from "next/link";
export default function Hall() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden mt-[50px] pt-10"
                 style={{backgroundImage: 'url("/Service.svg")', minHeight: "calc(100vh)"}}>
                <div className="max-w-[1225px] w-full mx-auto px-7">
                    <div>
                        <p className="text-header-ul font-cormorant text-[40px] ss:text-[55px] font-normal">Прощальный зал</p>
                    </div>
                    <div className="">
                        <p className="text-header-ul font-raleway text-[28px] ss:text-[32px] font-thin mt-[35px]">Для обеспечения достойного прощания с умершим необходимо тщательно подготовиться и правильно организовать церемонию,</p>
                        <p className="text-header-ul font-raleway text-[28px] ss:text-[32px] font-thin mt-[55px]">По поводу адреса и бронирования прощального зала звоните по указанному номеру в <Link href="/contact"><span className="hover:text-micro-text border-b border-dark-text hover:border-micro-text">контактах</span></Link>.</p>
                        <div className="justify-center grid lg:flex gap-[32px] mt-[30px]">
                            <Image src={hallOne} alt="-" width={360} height={310}/>
                            <Image src={hallTwo} alt="-" width={360} height={310}/>
                            <Image src={hallThree} alt="-" width={360} height={310}/>
                        </div>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


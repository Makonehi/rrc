import React from 'react';
import Image from "next/image";
import DownHeader from "@/app/downHeader/page";
import HearseOne from "./icon/hearseOne.svg";
import HearseTwo from "./icon/hearseTwo.svg";
import HearseThree from "./icon/hearseThree.svg";
import Link from "next/link";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

export default function Hearse() {
    const images = [HearseOne, HearseTwo, HearseThree];

    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{ backgroundImage: 'url("/fonCenter.svg")', minHeight: "100vh" }}>
                <div className="max-w-[1225px] w-full mx-auto px-7 mt-[70px]">
                    <p className="text-header-ul font-cormorant xs:text-[40px] sm:text-[45px] md:text-[55px] font-normal">Катафалк</p>

                    <p className="text-header-ul font-raleway xs:text-[25px] sm:text-[28px] md:text-[32px] font-thin mt-[55px]">
                        У нас собственный транспорт-катафалк и для церемонии прощания с близким человеком это для нас важная и очень ответственная часть при организации похоронной процессии.
                    </p>
                    <p className="text-header-ul font-raleway xs:text-[25px] sm:text-[28px] md:text-[32px] font-thin mt-[80px]">
                        Мы готовы позаботиться о том, чтобы обеспечить все достойные и качественные прощания с близким человеком.
                        Для бронирования машины звоните по указанному номеру в <Link href="/contact">
                        <span className="hover:text-micro-text border-b border-dark-text hover:border-micro-text">контактах</span>
                    </Link>.
                    </p>

                    {/* Грид для ПК */}
                    <div className="hidden md:flex gap-[32px] mt-[30px]">
                        {images.map((img, index) => (
                            <Dialog key={index}>
                                <DialogTrigger>
                                    <Image src={img} alt="Катафалк" width={360} height={310} className="cursor-pointer"/>
                                </DialogTrigger>
                                <DialogContent className="max-w-[90vw]">
                                    <Image src={img} alt="Катафалк" width={700} height={600} className="w-full h-auto"/>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>

                    {/* Вертикальные фото для мобилки */}
                    <div className="md:hidden flex flex-col gap-5 mt-[30px]">
                        {images.map((img, index) => (
                            <Dialog key={index}>
                                <DialogTrigger>
                                    <Image src={img} alt="Катафалк" width={360} height={310} className="w-full h-auto cursor-pointer"/>
                                </DialogTrigger>
                                <DialogContent className="max-w-[90vw]">
                                    <Image src={img} alt="Катафалк" width={700} height={600} className="w-full h-auto"/>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}

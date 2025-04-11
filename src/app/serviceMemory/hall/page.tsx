import React from 'react';
import Image from "next/image";
import DownHeader from "@/app/downHeader/page";
import hallOne from './icon/hallOne.svg';
import hallTwo from './icon/hallTwo.svg';
import hallThree from './icon/hallThree.svg';
import Link from "next/link";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
export default function Hall() {
    return (
        <div className="overflow-x-hidden">
            <main className="bg-cover bg-no-repeat overflow-hidden mt-[50px] pt-10"
                 style={{backgroundImage: 'url("/Service.svg")', minHeight: "calc(100vh - 151px)"}}>
                <div className="max-w-[1225px] w-full mx-auto px-7">
                    <div>
                        <h1 className="text-header-ul font-cormorant xl:text-[55px] lg:text-[48px] md:text-[42px] sm:text-[36px] ss:text-[30px] xs:text-[26px] font-normal">Прощальный зал</h1>
                    </div>
                    <div className="">
                        <p className="text-header-ul font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">Для обеспечения достойного прощания с умершим необходимо тщательно подготовиться и правильно организовать церемонию,</p>
                        <p className="text-header-ul font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[55px]">По поводу адреса и бронирования прощального зала звоните по указанному номеру в <Link href="/contact"><span className="hover:text-micro-text border-b border-dark-text hover:border-micro-text">контактах</span></Link>.</p>
                        <div className="justify-center grid lg:flex gap-[32px] mt-[30px]">
                            <Dialog>
                                <DialogTrigger>
                                    <Image src={hallOne} alt="-" width={360} height={310}/>
                                </DialogTrigger>
                                <DialogContent>
                                    <Image src={hallOne} alt="-" width={600} height={500}/>
                                </DialogContent>
                            </Dialog>
                            <Dialog>
                                <DialogTrigger>
                                    <Image src={hallTwo} alt="-" width={360} height={310}/>
                                </DialogTrigger>
                                <DialogContent>
                                    <Image src={hallTwo} alt="-" width={600} height={500}/>
                                </DialogContent>
                            </Dialog>
                            <Dialog>
                                <DialogTrigger>
                                    <Image src={hallThree} alt="-" width={360} height={310}/>
                                </DialogTrigger>
                                <DialogContent>
                                    <Image src={hallThree} alt="-" width={600} height={500}/>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </main>
            <DownHeader/>
        </div>
    );
}


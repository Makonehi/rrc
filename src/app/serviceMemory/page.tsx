import React from 'react';
import Image from 'next/image';
import Dinner from './icon/dinner.svg';
import Fences from './icon/fences.svg';
import Hall from './icon/hall.svg';
import Monument from './icon/monument.svg';
import Products from './icon/products.svg'
import DownHeader from "@/app/downHeader/page";
import Link from "next/link";

export default function ServiceMemory() {
    return (
        <div>
            <div className="min-w-screen bg-cover bg-no-repeat overflow-x-hidden flex justify-center items-center"
                 style={{backgroundImage: 'url("/Service.svg")', minHeight: "calc(100vh - 171px)"}}>
                <div className="max-w-[1225px]">
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] font-normal">Память</p>
                    </div>
                    <div className="flex flex-wrap gap-[55px]">
                        <Link href="/serviceMemory/fences">
                            <div
                                className="w-[265px] h-[200px] border border-black rounded-[20px] flex justify-center items-center">
                                <div>
                                    <Image src={Fences} alt="-" width={70} height={70} className="m-auto"/>
                                    <p className="text-header-ul font-cormorant text-[32px] font-normal mt-[35]">Ограды</p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/serviceMemory/products">
                            <div className="w-[265px] h-[200px] border border-black rounded-[20px] pt-[35px]">
                                <Image src={Products} alt="-" width={70} height={70} className="m-auto"/>
                                <p className="text-header-ul font-cormorant text-[32px] font-normal mt-[10px] text-center">Изделия из камня</p>
                                <p className="text-micro-text font-raleway text-[12px] font-thin text-center">столы, -
                                    лавочки, - каркасы, - цветники, - плитка</p>
                            </div>
                        </Link>
                        <Link href="/serviceMemory/dinner">
                            <div className="w-[265px] h-[200px] border border-black rounded-[20px] pt-[35px]">
                                <div>
                                    <Image src={Dinner} alt="-" width={70} height={70} className="m-auto"/>
                                    <p className="text-header-ul font-cormorant text-[32px] font-normal text-center mt-[16px] leading-[85%]">Поминальные
                                        обеды</p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/serviceMemory/monument">
                            <div className="w-[265px] h-[200px] border border-black rounded-[20px] pt-[35px]">
                                <Image src={Monument} alt="-" width={70} height={70} className="m-auto"/>
                                <p className="text-header-ul font-cormorant text-[32px] font-normal text-center mt-[20px]">Памятник</p>
                                <p className="text-micro-text font-raleway text-[11px] font-thin text-center">Из
                                    гранита, -
                                    крошки</p>
                            </div>
                        </Link>
                        <Link href="/serviceMemory/hall">
                            <div className="w-[265px] h-[200px] border border-black rounded-[20px] pt-[35px] ml-[185%]">
                                <Image src={Hall} alt="-" width={70} height={70} className="m-auto"/>
                                <p className="text-header-ul font-cormorant text-[32px] font-normal text-center mt-[20px]">Прощальный зал</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}

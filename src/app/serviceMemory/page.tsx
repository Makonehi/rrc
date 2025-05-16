import React from 'react';
import Image from 'next/image';
import Fences from './icon/fences.svg';
import Monument from './icon/monument.svg';
import Products from './icon/products.svg'
import DownHeader from "@/app/downHeader/page";
import Link from "next/link";

export default function ServiceMemory() {
    return (
        <header>
            <main className="min-w-screen bg-cover bg-no-repeat overflow-x-hidden flex justify-center items-center"
                 style={{backgroundImage: 'url("/Service.svg")', minHeight: "calc(100vh - 101px)"}}>
                <div className="max-w-[1225px]">
                    <div>
                        <h1 className="text-header-ul font-cormorant text-[55px] font-normal">Память</h1>
                    </div>
                    <div className="xl:flex xl:flex-wrap xs:grid lg:grid-cols-3 xs:grid-cols-2 gap-[55px] mt-[30px]">
                        <Link href="/serviceMemory/fences">
                            <div
                                className="ss:w-[200px] md:w-[265px] ss:h-[135px] md:h-[200px] xs:w-[160px] xs:h-[100px]  border border-black rounded-[20px] xs:pt-[15px] ss:pt-[20px] md:pt-[35px]">
                                <div>
                                    <div className='ss:w-[50px] md:w-[70px] ss:h-[50px] md:h-[70px] xs:w-[40px] xs:h-[40px] m-auto'>
                                        <Image src={Fences} alt="-" className="mx-auto"/>
                                    </div>
                                    <p className="text-header-ul font-cormorant xs:text-[25px] ss:text-[28px] md:text-[32px] text-center font-normal xs:mt-[10px] ss:mt-[20px] md:mt-[35]">Ограды</p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/serviceMemory/products">
                            <div
                                className="ss:w-[200px] md:w-[265px] ss:h-[135px] md:h-[200px] xs:w-[160px] xs:h-[100px] border border-black rounded-[20px] xs:pt-[5px] md:pt-[35px] ss:pt-[15px]">
                                <div className="mx-auto md:w-[70px] md:h-[70px] ss:w-[50px] ss:h-[50px] xs:w-[40px] xs:h-[40px]">
                                    <Image src={Products} alt="-" className="mx-auto"/>
                                </div>
                                <p className="text-header-ul font-cormorant xs:text-[20px] ss:text-[25px] ms:text-[32px] leading-[85%] font-normal xs:mt-[3px] ss:mt-[5px] md:mt-[10px] text-center">Изделия
                                    из камня</p>
                                <p className="text-micro-text font-raleway text-[12px] font-thin text-center">столы, -
                                    лавочки, - каркасы, - цветники, - плитка</p>
                            </div>
                        </Link>
                        <Link href="/serviceMemory/monument">
                            <div
                                className="ss:w-[200px] md:w-[265px] ss:h-[135px] md:h-[200px] xs:w-[160px] xs:h-[100px] border border-black rounded-[20px] xs:pt-[5px] ss:pt-[20px] md:pt-[35px]">
                                <div className="md:w-[70px] md:h-[70px] ss:w-[50px] ss:h-[50px] xs:w-[40px] xs:h-[40px] mx-auto">
                                    <Image src={Monument} alt="-" className="m-auto"/>
                                </div>
                                <p className="text-header-ul font-cormorant xs:text-[23px] ss:text-[27px] md:text-[32px] font-normal text-center xs:mt-[3px] ss:mt-[7px] md:mt-[20px]">Памятник</p>
                                <p className="text-micro-text font-raleway text-[11px] font-thin text-center">Из
                                    гранита, -
                                    крошки</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
            <DownHeader/>
        </header>
    );
}

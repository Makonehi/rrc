import React from 'react';
import Link from "next/link";
import Image from "next/image";
import DownHeader from "@/app/downHeader/page";
import {data, dataType} from "@/app/carusel/data";

export default function Reviews() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("/Service.svg")', minHeight: "calc(100vh - 171px)"}}>
                <div className="w-[1225px] mx-auto grid grid-cols-2 gap-[87px] py-[81px]">
                    {data.map((item, index) => {
                        return (
                            <div className="">
                                {item.status !== "Благодарственное письмо"?(
                                <div key={index}
                                     className="relative w-[500px] h-[425px] bg-memory-card rounded-[20px] pt-[21px] pl-[43px]">
                                    <div
                                        className={`${item.status === "Память" ? "pl-[25px] pt-[4px] pr-[29px] pb-[7px]" : "pl-[5px] pt-[2px] pr-[6px] pb-[11px]"} absolute top-0 right-0 max-w-[180px] h-auto bg-memory-black text-cart-title font-cormorant text-[30px] font-normal rounded-tr-[20px] rounded-bl-[20px]`}>{item.status}</div>
                                    <div>
                                        <p className="text-header-ul font-cormorant font-normal text-[16px]">{item.data}</p>
                                        <p className="text-dark-text font-thin text-[20px] font-raleway">{item.name}</p>
                                    </div>
                                    <div
                                        className="mt-[73px] text-dark-text max-w-[419px] font-raleway text-[20px]">{item.coment}</div>
                                    <div className="">
                                        <Link href="/reviews">
                                            <div
                                                className="relative w-[318px] h-[44px] rounded-[25px] bg-memory-black hover:bg-hover-phone transition-colors duration-300 flex items-center justify-center mt-[45px] cursor-pointer">
                                                <p className="text-text-white text-[20px] font-thin">Читать
                                                    отзыв полностью</p>
                                                <Image src="/arrowWhite.svg" alt="-" width={9} height={9}
                                                       className="absolute top-[19px] right-[18px]"/>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                ) : (
                                    <div key={index} className="relative w-[500px] h-[500px] rounded-[20px]">
                                        <div className="px-[5px] py-[10px] absolute top-0 right-0 max-w-[240px] h-auto bg-memory-black text-cart-title font-cormorant text-[30px] font-normal rounded-tr-[20px] rounded-bl-[20px]">Благодарственное письмо</div>
                                        <Image src={item.img} alt="-" width={500} height={500}/>
                                    </div>
                                )}
                            </div>
                        )
                    })}

                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


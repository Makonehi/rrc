import React from 'react';
import Link from "next/link";
import Image from "next/image";
import DownHeader from "@/app/downHeader/page";
import {data, dataType} from "@/app/carusel/data";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";

interface ReviewsProp{
    data: dataType[]
}

export default function Reviews({data}: ReviewsProp) {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-no-repeat overflow-hidden pt-10 flex justify-center"
                 style={{backgroundImage: 'url("/Service.svg")', minHeight: "calc(100vh)"}}>
                <div className="max-w-[1225px] mx-auto grid xl:grid-cols-2 xs:grid-cols-1 gap-[87px] py-[81px] px-10">
                    {data.map((item, index) => {
                        return (
                            <div className="">
                                {item.status !== "Благодарственное письмо"?(
                                    <div key={index}
                                         className="relative xs:max-w-[500px] sm:w-[500px] h-[380px] bg-memory-card rounded-[20px] pt-[21px] pl-[43px] xs:pr-5 sm:pr-0">
                                        <div
                                            className={`${item.status === "Память" ? "pl-[25px] pt-[4px] pr-[29px] pb-[7px] text-[30px]" : "pl-[5px] pt-[2px] pr-[6px] pb-[11px] ss:text-[30px] xs:text-[20px] xs:max-w-[118px] ss:max-w-[180px]"} absolute top-0 right-0 max-w-[180px] h-auto bg-memory-black text-cart-title font-cormorant font-normal rounded-tr-[20px] rounded-bl-[20px]`}>{item.status}</div>
                                        <div>
                                            <p className="text-header-ul font-cormorant font-normal sm:text-[16px] xs:text-[14px]">{item.data}</p>
                                            <p className="text-dark-text font-thin sm:text-[20px] xs:text-[17px] font-raleway">{item.name}</p>
                                        </div>
                                        <div
                                            className="mt-[73px] text-dark-text max-w-[419px] font-raleway sm:text-[20px] xs:text-[17px]">{item.coment}
                                        </div>

                                    </div>
                                ) : (
                                    <div key={index} className="relative sm:w-[500px] xs:max-w-[500px] h-[600px] rounded-[20px] overflow-hidden">
                                        <div className="px-[5px] py-[10px] absolute top-0 right-0 ss:max-w-[240px] xs:max-w-[200px] h-auto bg-memory-black text-cart-title font-cormorant ss:text-[30px] xs:text-[25px] font-normal rounded-tr-[20px] rounded-bl-[20px]">Благодарственное письмо</div>
                                        <Dialog>
                                            <DialogTrigger>
                                                <Image src={item.img as string} alt="-" width={500} height={700}/>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <Image src={item.img as string} alt="-" width={700} height={600}/>
                                            </DialogContent>
                                        </Dialog>
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


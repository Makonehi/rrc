import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Fences from "@/app/serviceMemory/icon/fences.svg";
import Products from "@/app/serviceMemory/icon/products.svg";
import Dinner from "@/app/serviceMemory/icon/dinner.svg";
import Monument from "@/app/serviceMemory/icon/monument.svg";
import Hall from "@/app/serviceMemory/icon/hall.svg";
import DownHeader from "@/app/downHeader/page";
import Cremation from './icon/cremation.svg';
import Hearse from './icon/hearse.svg';
import CargoTwo from './icon/cargoTwo.svg';
import Preparation from './icon/preparation.svg';
import Dig from './icon/dig.svg';
import Clergyman from './icon/clergyman.svg';
import Storage from './icon/storege.svg';
import Exhumation from './icon/exhumation.svg';
import Cleaning from './icon/cleaning.svg';

interface CenterType {
    img: string;
    name: string;
    link: string;
}

export default function ServiceCenter() {
    const dataCenter: CenterType[] = [
        {img: Cremation, name: "Кремация", link: "/serviceCenter/cremation"},
        {img: Hearse, name: "Катафалк", link: "/serviceCenter/hearse"},
        {img: CargoTwo, name: "Груз 200", link: "/serviceCenter/cargoTwo"},
        {img: Preparation, name: "Подготовка тела", link: "/serviceCenter/preparation"},
        {img: Dig, name: "Копка могил", link: "/serviceCenter/dig"},
        {img: Clergyman, name: "Священнослужитель", link: "/serviceCenter/clergyman"},
        {img: Storage, name: "Хранение тела", link: "/serviceCenter/storage"},
        {img: Exhumation, name: "Эксгумация", link: "/serviceCenter/exhumation"},
        {img: Cleaning, name: "Уборка мест захоронений", link: "/serviceCenter/cleaning"},
    ]
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover min-h-screen bg-no-repeat overflow-x-hidden"
                 style={{backgroundImage: 'url("/Service.svg")'}}>
                <div className="w-[1300px] mx-auto px-7">
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] font-normal mt-[80px]">Районный ритуальный центр</p>
                    </div>
                    <div className="flex flex-wrap gap-[55px] mt-[80px] mb-[80px]">
                        {dataCenter.map((item, index) => {
                            return(
                                <div key={index} className="last:m-auto">
                                    <Link href={item.link}>
                                        <div
                                            className="w-[265px] h-[200px] border border-black rounded-[20px] flex justify-center items-center">
                                            <div>
                                                <Image src={item.img} alt="-" className="m-auto"/>
                                                <p className={`text-header-ul ${item.name === "Священнослужитель"? "text-[28px]": "text-[32px]"} font-cormorant font-normal mt-[25] text-center leading-[85%]`}>{item.name}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


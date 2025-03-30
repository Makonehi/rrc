import React from 'react';
import Link from "next/link";
import Image from "next/image";
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
        <div className="overflow-x-hidden bg-cover bg-no-repeat flex flex-col items-center justify-center"
             style={{ backgroundImage: 'url("/Service.svg")', minHeight: "100vh" }}>
            <div className="overflow-x-hidden">
                <div>
                    <p className="text-header-ul font-cormorant xs:text-[30px] ss:text-[40px] md:text-[55px] font-normal mt-[80px]">Районный ритуальный центр</p>
                </div>
                <div className="xl:max-w-[1300px] md:max-w-[1000px] w-full px-7 flex flex-col items-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[55px] mt-[80px] mb-[80px] place-items-center">
                        {dataCenter.map((item, index) => (
                            <Link key={index} href={item.link}
                                  className={`flex justify-center ${index === dataCenter.length - 1 ? "xl:col-span-4 xl:justify-self-center xs:col-span-2 md:col-span-1 xs:justify-self-center" : ""}`}>
                                <div className="lg:w-[265px] lg:h-[200px] ss:w-[215px] ss:h-[150px] xs:w-[180px] xs:h-[120px] border border-black rounded-[20px] flex justify-center items-center">
                                    <div>
                                        <Image src={item.img} alt={item.name} className="m-auto"/>
                                        <p className={`text-header-ul ${item.name === "Священнослужитель" ? "lg:text-[28px] ss:text-[22px] xs:text-[18px]" : "sm:text-[32px] ss:text-[29px] xs:text-[20px]"} font-cormorant font-normal ss:mt-[25px] xs:mt-[10px] text-center leading-[85%]`}>
                                            {item.name}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


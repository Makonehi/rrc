import React from 'react';
import Link from "next/link";
import Image from "next/image";
import hallOne from "@/app/serviceMemory/hall/icon/hallOne.svg";
import hallTwo from "@/app/serviceMemory/hall/icon/hallTwo.svg";
import hallThree from "@/app/serviceMemory/hall/icon/hallThree.svg";
import DownHeader from "@/app/downHeader/page";

export default function CargoTwo() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("/fonCenter.svg")', minHeight: "calc(100vh - 171px)"}}>
                <div className="w-[1300px] mx-auto px-7">
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] font-normal">Груз 200</p>
                    </div>
                    <div className="">
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[35px]">Груз 200 - транспортировка тела умершего (погибшего) в специальном герметичном цинковом гробу. Транспортировка осуществляется до места захоронения или места прощания с родственниками.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[35px]">Если необходима перевозка катафалком - обращайтесь к нам. Наши катафалки оборудованы всем необходимым и отвечают всем требованиям безопасности перевозок. Водители авто имеют многолетний опыт работы с перевозкой груз-200 и гарантируют профессиональное отношение к поставленным задачам. Сотрудничая с нами, можно быть уверенным в том, что перевозка будет осуществлена профессионально, в срок и без лишних хлопот.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[35px]">Для осуществелия перевозки груза 200 звоните по указанному номеру в <Link href="/contact"><span className="hover:text-micro-text border-b border-dark-text hover:border-micro-text">контактах</span></Link>.</p>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


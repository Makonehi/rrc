import React from 'react';
import Link from "next/link";
import DownHeader from "@/app/downHeader/page";

export default function CargoTwo() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("/fonCenter.svg")', minHeight: "calc(100vh)"}}>
                <div className="max-w-[1300px] mx-auto px-8 mt-[80px]">
                    <div>
                        <p className="text-header-ul font-cormorant xl:text-[55px] lg:text-[48px] md:text-[42px] sm:text-[36px] ss:text-[30px] xs:text-[26px] font-normal">Груз 200</p>
                    </div>
                    <div className="">
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">Груз 200 - транспортировка тела умершего (погибшего) в специальном герметичном цинковом гробу. Транспортировка осуществляется до места захоронения или места прощания с родственниками.</p>
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">Если необходима перевозка катафалком - обращайтесь к нам. Наши катафалки оборудованы всем необходимым и отвечают всем требованиям безопасности перевозок. Водители авто имеют многолетний опыт работы с перевозкой груз-200 и гарантируют профессиональное отношение к поставленным задачам. Сотрудничая с нами, можно быть уверенным в том, что перевозка будет осуществлена профессионально, в срок и без лишних хлопот.</p>
                        <p className="text-header-ul font-raleway xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">Для осуществелия перевозки груза 200 звоните по указанному номеру в <Link href="/contact"><span className="hover:text-micro-text border-b border-dark-text hover:border-micro-text">контактах</span></Link>.</p>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


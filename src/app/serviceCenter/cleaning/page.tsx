import React from 'react';
import Link from "next/link";
import DownHeader from "@/app/downHeader/page";

export default function Cleaning() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("/Service.svg")', minHeight: "calc(100vh - 171px)"}}>
                <div className="w-[1225px] mx-auto px-7">
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] font-normal">Уборка мест захоронений</p>
                    </div>
                    <div className="">
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[35px]">Случается, что родственники не могут ухаживать за могилой усопшего. Приходится искать альтернативные варианты, выбирать исполнителя, выполняющего запрос к конкретной дате, поддерживающего чистоту на участке захоронения на протяжении года. Нашей услугой по уборке могил вы можете воспользоваться в любое время года.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[55px]">По окончании выполнения уборки предоставляем фото и видео отчет до и после.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[55px]">Мы берем на себя заботы по наведению чистоты и порядка на участке захоронения для уборки места звоните по указанному номеру в <Link href="/contact"><span className="hover:text-micro-text border-b border-dark-text hover:border-micro-text">контактах</span></Link>.</p>

                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


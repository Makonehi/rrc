'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import DownHeader from "@/app/downHeader/page";
import {ProductsType} from "@/app/serviceMemory/products/data";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"


interface ProductProp {
    dataProduct: ProductsType[];
}

export default function Products({dataProduct}: ProductProp) {
    const [activeTab, setActiveTab] = useState<ProductsType["product"]>("vase");
    const [visibleCount, setVisibleCount] = useState(8);


    const filteredProducts = dataProduct.filter(item => item.product === activeTab);

    return (
        <main className="overflow-x-hidden">
            <div
                className="xs:bg-no-repeat ss:bg-repeat-y bg-[length:100%_auto] bg-top w-screen overflow-hidden py-10 px-4 sm:px-8 md:px-12"
                style={{backgroundImage: 'url("/Service.svg")', minHeight: ("100vh")}}>
                <div className="max-w-[1230px] mx-auto">
                    <h1 className="text-header-ul font-cormorant text-[32px] sm:text-[40px] md:text-[55px] mt-6 sm:mt-8">
                        Изделия из камня
                    </h1>

                    {/* Кнопки табов */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-5 mt-6">
                        {["vase", "slabs", "lamps", "plate", "statues"].map((tab) => (
                            <div key={tab}
                                 className={`w-full h-[45px] sm:h-[50px] rounded-lg cursor-pointer bg-gray-200 border border-gray-400 flex justify-center items-center ${activeTab === tab ? "bg-gray-500 text-white" : "hover:bg-gray-300"}`}
                                 onClick={() => setActiveTab(tab as ProductsType["product"])}>
                                <h1 className="text-[16px] font-cormorant sm:text-[18px] md:text-[20px]">
                                    {
                                        tab === "lamps" ? "Лампады" :
                                            tab === "statues" ? "Статуи" :
                                                tab === "plate" ? "Плитка" :
                                                    tab === "vase" ? "Вазы" :
                                                        tab === "slabs" ? "Столы - Скамейки" : "Статуи"

                                    }
                                </h1>
                            </div>
                        ))}
                    </div>

                    {/* Товары */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-6">
                        {filteredProducts.slice(0, visibleCount).map((item, index) => (
                            <div key={index} className="w-full">
                                <div
                                    className="w-full h-[180px] sm:h-[200px] border border-black rounded-lg flex items-center justify-center overflow-hidden">
                                    <Dialog>
                                        <DialogTrigger asChild
                                                       className="w-full h-[180px] sm:h-[200px] border border-black rounded-lg flex items-center justify-center">
                                            <button>
                                                <Image
                                                    src={item.img}
                                                    alt={item.name}
                                                    width={130}
                                                    height={130}
                                                    className="object-contain cursor-pointer"

                                                />
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-3xl p-0 flex justify-center items-center">
                                            <Image
                                                src={item.img}
                                                alt={item.name}
                                                width={600} // Указываешь, какой размер нужен для увеличенного фото
                                                height={600}
                                                className="object-contain"
                                            />
                                        </DialogContent>
                                    </Dialog>
                                </div>
                                <p className="mt-3 text-center font-cormorant text-[18px] sm:text-[20px]">{item.name}</p>
                            </div>
                        ))}
                    </div>

                    {/* Кнопка "Загрузить ещё" */}
                    {visibleCount < filteredProducts.length && (
                        <div className="flex justify-center items-center mt-8">
                            <button onClick={() => setVisibleCount(prev => prev + 8)}
                                    className="text-[18px]">
                                Загрузить еще
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <DownHeader/>
        </main>
    );
}

'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import DownHeader from "@/app/downHeader/page";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


interface ProductsType {
    product: "bench" | "table" | "vase" | "slabs" | "kits";
    img: string;
    name: string;
}

export default function Products() {
    const [activeTab, setActiveTab] = useState<ProductsType["product"]>("bench");
    const [visibleCount, setVisibleCount] = useState(8);

    const dataProduct: ProductsType[] = [
        {product: 'bench', img: "/logo.svg", name: "Лавочка №1"},
        {product: 'bench', img: "/", name: "Лавочка №2"},
        {product: 'bench', img: "/", name: "Лавочка №3"},
        {product: 'bench', img: "/", name: "Лавочка №4"},
        {product: 'bench', img: "/", name: "Лавочка №5"},
        {product: 'bench', img: "/", name: "Лавочка №6"},
        {product: 'bench', img: "/", name: "Лавочка №7"},
        {product: 'bench', img: "/", name: "Лавочка №8"},
        {product: 'bench', img: "/", name: "Лавочка №9"},
        {product: 'table', img: "/", name: "Стол №1"},
        {product: 'table', img: "/", name: "Стол №2"},
        {product: 'table', img: "/", name: "Стол №3"},
        {product: 'table', img: "/", name: "Стол №4"},
    ];

    const filteredProducts = dataProduct.filter(item => item.product === activeTab);

    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover min-h-screen w-full bg-no-repeat py-10 px-4 sm:px-8 md:px-12"
                 style={{backgroundImage: 'url("/Service.svg")'}}>
                <div className="max-w-[1230px] mx-auto">
                    <p className="text-header-ul font-cormorant text-[32px] sm:text-[40px] md:text-[55px] mt-6 sm:mt-8">
                        Изделия из камня
                    </p>

                    {/* Кнопки табов */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-5 mt-6">
                        {["bench", "table", "vase", "slabs", "kits"].map((tab) => (
                            <div key={tab}
                                 className={`w-full h-[45px] sm:h-[50px] rounded-lg cursor-pointer bg-gray-200 border border-gray-400 flex justify-center items-center ${activeTab === tab ? "bg-gray-500 text-white" : "hover:bg-gray-300"}`}
                                 onClick={() => setActiveTab(tab as ProductsType["product"])}>
                                <p className="text-[16px] font-cormorant sm:text-[18px] md:text-[20px]">
                                    {tab === "bench" ? "Лавочки" :
                                        tab === "table" ? "Столы" :
                                            tab === "vase" ? "Вазы" :
                                                tab === "slabs" ? "Плиты" : "Комплекты"}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Товары */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-6">
                        {filteredProducts.slice(0, visibleCount).map((item, index) => (
                            <div key={index} className="w-full">
                                <div
                                    className="w-full h-[180px] sm:h-[200px] border border-black rounded-lg flex items-center justify-center">
                                    <Dialog>
                                        <DialogTrigger className="w-full h-[180px] sm:h-[200px] border border-black rounded-lg flex items-center justify-center">
                                            <Image
                                                src={item.img}
                                                alt={item.name}
                                                width={180}
                                                height={180}
                                                className="object-contain cursor-pointer"
                                            />
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
        </div>
    );
}

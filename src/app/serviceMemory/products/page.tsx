'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import DownHeader from "@/app/downHeader/page";

interface ProductsType {
    product: "bench" | "table" | "vase" | "slabs" | "kits";
    img: string;
    name: string;
}

export default function Products() {
    const [activeTab, setActiveTab] = useState<ProductsType["product"]>("bench");
    const [visibleCount, setVisibleCount] = useState(8);

    const dataProduct: ProductsType[] = [
        {product: 'bench', img: "/", name: "Лавочка №1"},
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
        {product: 'table', img: "/", name: "Стол №5"},
        {product: 'table', img: "/", name: "Стол №6"},
        {product: 'table', img: "/", name: "Стол №7"},
        {product: 'table', img: "/", name: "Стол №8"},
        {product: 'table', img: "/", name: "Стол №9"},
        {product: 'vase', img: "/", name: "Ваза №1"},
        {product: 'vase', img: "/", name: "Ваза №2"},
        {product: 'vase', img: "/", name: "Ваза №3"},
        {product: 'vase', img: "/", name: "Ваза №4"},
        {product: 'vase', img: "/", name: "Ваза №5"},
        {product: 'vase', img: "/", name: "Ваза №6"},
        {product: 'vase', img: "/", name: "Ваза №7"},
        {product: 'vase', img: "/", name: "Ваза №8"},
        {product: 'vase', img: "/", name: "Ваза №9"},
        {product: "slabs", img: "/", name: "Плита №1"},
        {product: "slabs", img: "/", name: "Плита №2"},
        {product: "slabs", img: "/", name: "Плита №3"},
        {product: "slabs", img: "/", name: "Плита №4"},
        {product: "slabs", img: "/", name: "Плита №5"},
        {product: "slabs", img: "/", name: "Плита №6"},
        {product: "slabs", img: "/", name: "Плита №7"},
        {product: "slabs", img: "/", name: "Плита №8"},
        {product: "slabs", img: "/", name: "Плита №9"},
        {product: "kits", img: "/", name: "Комплект №1"},
        {product: "kits", img: "/", name: "Комплект №2"},
        {product: "kits", img: "/", name: "Комплект №3"},
        {product: "kits", img: "/", name: "Комплект №4"},
        {product: "kits", img: "/", name: "Комплект №5"},
        {product: "kits", img: "/", name: "Комплект №6"},
        {product: "kits", img: "/", name: "Комплект №7"},
        {product: "kits", img: "/", name: "Комплект №8"},
        {product: "kits", img: "/", name: "Комплект №9"},
    ]

    // Фильтруем товары по активному табу
    const filteredProducts = dataProduct.filter(item => item.product === activeTab);

    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden py-10"
                 style={{backgroundImage: 'url("/Service.svg")'}}>
                <div className="w-[1225px] mx-auto px-7">
                    <p className="text-header-ul font-cormorant text-[55px] font-normal">
                        Изделия из камня
                    </p>

                    {/* Кнопки табов */}
                    <div className="flex items-center gap-[25px] mt-[30px]">
                        {["bench", "table", "vase", "slabs", "kits"].map((tab) => (
                            <div key={tab}
                                 className="w-[255px] h-[50px] rounded-[10px] cursor-pointer bg-input-product border border-dark-text flex justify-center items-center"
                                 onClick={() => setActiveTab(tab as ProductsType["product"])}>
                                <p className={`font-normal text-[24px] font-cormorant hover:text-[#C0C0C0] ${
                                    activeTab === tab ? "text-[#C0C0C0]" : "text-header-ul"
                                }`}>
                                    {tab === "bench" ? "Лавочки" :
                                        tab === "table" ? "Столы" :
                                            tab === "vase" ? "Вазы" :
                                                tab === "slabs" ? "Плиты" :
                                                    "Комплекты"}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Отображение товаров */}
                    <div className="grid grid-cols-4 gap-[55px] mt-[43px]">
                        {filteredProducts.slice(0, visibleCount).map((item, index) => (
                            <div key={index} className="w-[265px] h-[255px] gap-y-8">
                                <div className="w-[265px] h-[200px] border border-black rounded-[20px]">
                                    <Image src={item.img} alt="-" width={265} height={200}/>
                                </div>
                                <p className="mt-[15px] font-cormorant text-header-ul text-[32px] font-normal">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Кнопка "Загрузить ещё" */}
                    {visibleCount < filteredProducts.length && (
                        <div className="flex justify-center items-center">
                            <p onClick={() => setVisibleCount(prev => prev + 8)}
                               className="relative text-header-ul font-raleway text-[20px] mt-[70px] text-center font-thin hover:text-neutral-700 cursor-pointer
                                    before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[url('/arrow360.svg')] before:bg-no-repeat before:left-[-20px]  before:top-[30%]">
                                Загрузить еще
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}



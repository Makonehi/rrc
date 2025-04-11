'use client'
import Image from "next/image";
import './glav.css'
import Link from "next/link";

export default function Home() {

    return (
        <header className="home-page prew ss:flex ss:justify-center ss:items-center relative"
             style={{minHeight: "calc(100vh)" }}
        >
            <main className="xs:mx-auto xs:pt-[100px]">
                <div className="md:flex xs:grid lg:gap-24 xs:gap-10">
                    <div className="xl:w-[550px] xl:h-[370px] lg:w-[450px] lg:h-[320px] ss:w-[350px] md:h-[220px] ss:h-[240px] xs:w-[300px] xs:h-[160] xs:rounded-[40px] ss:rounded-[60px]  bg-cart ss:px-[61px] ss:pt-[41px] xs:px-[40px] xs:pt-[20px]">
                        <h1 className="text-cart-title xl:text-[50px] lg:text-[40px] md:text-[30px] ss:text-[30px] xs:text-[30px] font-cormorant font-normal tracking-[0px] leading-[123%] text-center">Память</h1>
                        <h1 className="text-text-white font-raleway font-thin xl:text-[32px] lg:text-[22px] md:text-[19px] ss:text-[19px] text-center xl:mt-[68px] lg:mt-[48px] md:mt-[28px] ss:mt-[28px] xs:mt-[15px]">Изготовление
                            памятника</h1>
                        <div className="flex justify-center">
                            <Link href="/memory">
                                <div
                                    className="relative xs:w-[150px] xs:h-[30px] ss:w-[200px] ss:h-[38px] rounded-[25px] bg-bg-phone hover:bg-hover-phone transition-colors duration-300 flex items-center justify-center lg:mt-[83px] md:mt-[33px] ss:mt-[40px] xs:mt-[15px] cursor-pointer">
                                    <p className="text-header-ul">Подробнее</p>
                                    <Image src="/arrow.svg" alt="-" width={9} height={9}
                                           className="absolute ss:top-[15px] ss:right-[19px] xs:top-[11px] xs:right-[14px]"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="xl:w-[550px] xl:h-[370px] lg:w-[450px] lg:h-[320px] ss:w-[350px] md:h-[220px] ss:h-[240px] xs:w-[300px] xs:h-[160] xs:rounded-[40px] ss:rounded-[60px] bg-cart ss:px-[61px] ss:pt-[12px] xs:px-[26px] xs:pt-[12px]">
                        <h1 className="text-cart-title xl:text-[50px] lg:text-[40px] md:text-[30px] ss:text-[30px] xs:text-[21px] ss:w-[250px] xs:w-[200px] xs:m-auto md:w-[250px] lg:w-[350px] xl:w-[450px] font-cormorant font-normal tracking-[0px] leading-[123%] text-center">
                            Районный ритуальный центр</h1>
                        <h1 className="text-text-white font-raleway font-thin xl:text-[30px] lg:text-[20px] md:text-[15px] ss:text-[20px] text-center xl:mt-[30px] lg:mt-[25px] md:mt-[20px] ss:mt-[20px]">Организация
                            и
                            проведение похорон</h1>
                        <div className="flex justify-center">
                            <Link href="/center">
                                <div
                                    className="relative xs:w-[150px] xs:h-[30px] ss:w-[200px] ss:h-[38px] rounded-[25px] bg-bg-phone hover:bg-hover-phone transition-colors duration-300 flex items-center justify-center xl:mt-[45px] lg:mt-[60px] md:mt-[18px] ss:mt-[18px] xs:mt-[10px] cursor-pointer">
                                    <p className="text-header-ul">Подробнее</p>
                                    <Image src="/arrow.svg" alt="-" width={9} height={9}
                                           className="absolute ss:top-[15px] ss:right-[19px] xs:top-[11px] xs:right-[14px]"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center relative items-center">
                    <div className="absolute md:top-[150px] ss:top-[50px] xs:top-[40px] w-[373px] h-[73px] bg-dark-header rounded-[25px] pt-[7px]">
                        <p className="text-text-white font-raleway text-[20px] font-bold text-center">
                            Круглосуточный телефон
                        </p>
                        <p className="text-text-white font-raleway text-[20px] font-bold text-center">
                            <a href="tel:+79120125085" rel="noopener noreferrer" >
                                +7 (950) 157-05-33
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </header>
    );
}

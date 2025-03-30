import React from 'react';
import DownHeader from "@/app/downHeader/page";

export default function Contact() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("/Service.svg")', minHeight: "calc(100vh)"}}>
                <div className="max-w-[1225px] w-full mx-auto px-9 mt-[80px]">
                    <div>
                        <p className="text-header-ul font-cormorant xs:text-[35px] sm:text-[45px] md:text-[50px] lg:text-[55px] font-normal">Контакты</p>
                        <p className="text-header-ul font-cormorant xs:text-[30px] sm:text-[45px] md:text-[50px] lg:text-[55px] font-normal">Республика Удмуртия</p>
                    </div>
                    <div className="lg:flex xs:grid gap-[40px] mt-[80px]">
                        <div className="border border-dark-text max-w-[756px]">
                            <div className="sm:flex xs:grid justify-between h-[126px] border-b border-dark-text items-center pl-[15px] pr-[20px]">
                                <div className="">
                                    <p className="text-black font-raleway xs:text-[17px] ss:text-[19px] md:text-[24px] font-thin">«Районный ритуальный центр»</p>
                                    <p className="text-black font-raleway xs:text-[17px] ss:text-[19px] md:text-[24px] font-thin"> п. Кез, ул. Больничный городок Д. 4б</p>
                                </div>
                                <div className="">
                                    <p className="text-black font-raleway xs:text-[19px] md:text-[24px] xs:font-normal sm:font-thin"><a href="tel:+79501570533">+7 (950)-157-053-3</a></p>
                                </div>
                            </div>
                            <div className="sm:flex xs:grid justify-between h-[126px] items-center pl-[15px] pr-[20px]">
                                <div>
                                    <p className="text-header-ul font-raleway xs:text-[19px] md:text-[24px] font-thin">«Память» изготовление памятников,</p>
                                    <p className="text-header-ul font-raleway xs:text-[19px] md:text-[24px] font-thin">п. Кез , ул. Кирова, д. 6а </p>
                                </div>
                                <div>
                                    <p className="text-header-ul w-full font-raleway xs:text-[19px] md:text-[24px] xs:font-normal sm:font-thin"><a href="tel:+79508368876">+7 (950)-836-887-6</a></p>
                                </div>
                            </div>
                            <div className="sm:flex xs:grid justify-between h-[126px] border-t border-dark-text items-center pl-[15px] pr-[20px]">
                                <div>
                                    <p className="text-header-ul font-raleway xs:text-[17px] ss:text-[19px] md:text-[24px] font-thin">«Районный ритуальный центр»</p>
                                    <p className="text-header-ul font-raleway xs:text-[17px] ss:text-[19px] md:text-[24px] font-thin max-w-[434px]">Удмуртская республика, с. Дебесы, ул. Андронова, д 20б</p>
                                </div>
                                <div>
                                    <p className="text-header-ul font-raleway xs:text-[18px] md:text-[24px] xs:font-normal sm:font-thin"><a href="tel:+79120125085">+7 (912)-012-50-85</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-[368px] lg:w-[340px] xl:h-[319px] lg:h-[299px] xs:max-w-[768px] w-full bg-memory-black rounded-[60px] px-[29px] py-[30px]">
                            <p className="text-text-white font-normal leading-[85%] font-cormorant text-[36px] text-center">Свяжитесь с нами</p>
                            <p className="max-w-[309px] font-raleway text-[15px] text-text-white font-thin mt-[15px]">Позвоните или напишите нам сообщение. Мы проконсультируем и поможем вам по любому вопросу.</p>
                            <div className="xl:mt-[33px] lg:20px">
                                <p className="text-micro-text font-thin text-[15px] font-raleway mt-[20px]">Телефон:</p>
                                <p className="text-text-white font-thin text-[15px] font-raleway"><a href="tel:+79501570533">+7 (950)-157-053-3</a></p>
                                <p className="text-text-white font-thin text-[15px] font-raleway"><a href="tel:+79508368876">+7 (950)-836-887-6</a></p>
                                <p className="text-text-white font-thin text-[15px] font-raleway"><a href="tel:+79120125085">+7 (912)-012-50-85</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


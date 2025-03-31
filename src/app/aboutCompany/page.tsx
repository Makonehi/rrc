import React from 'react';
import Link from "next/link";
import Image from "next/image";
import DownHeader from "@/app/downHeader/page";
import AboutOne from './icon/aboutOne.svg';
import AboutTwo from './icon/aboutTwo.svg'
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";

export default function AboutCompany() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("/aboutFon.svg")', minHeight: "calc(100vh)"}}>
                <div className="max-w-[1225px] mx-auto w-full px-10 mb-[30px] mt-[80px]">
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] xs:text-[26px] sm:text-[36px] md:text-[42px] font-normal">О компании</p>

                        <p className="text-header-ul font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">Наша компания
                            работает в посёлке Кез, а так же селе Дебессы (Республика Удмуртия) и предлагает широкий
                            спектр ритуальных услуг. Мы организуем похороны, предоставляя помощь людям в тяжелую минуту.
                            Мы понимаем, насколько это важно - и готовы вам помочь достойно провести прощание с
                            ушедшим.</p>
                        <p className="text-header-ul font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">Мы оказываем комплекс
                            услуг, которые полностью охватывают подготовку и проведение похорон.</p>
                        <p className="text-header-ul font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[35px]">Наше похоронное бюро
                            нацелено на результат. Мы постоянно улучшаем качество предоставляемых услуг и развиваемся в
                            новых направлениях. Доверие наших клиентов мы ценим высоко. Всегда идём на встречу их
                            разумным потребностям, стараясь сделать всё необходимое для удовлетворения запросов
                            заказчика. Наша команда профессионалов, гарантирует тактичный подход, добросовестное
                            выполнение договорённостей и обязательств, а также своевременное исполнение заказанных
                            услуг.</p>
                        <p className="text-header-ul font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[55px]">Если у вас возникли
                            любые вопросы или требуется более объёмная консультация по предлагаемым нами услугам - Вы
                            можете обратиться к нам по контактным телефонам <Link href="/contact"><span
                                className="hover:text-micro-text border-b border-dark-text hover:border-micro-text">контактным телефонам</span></Link>,
                            которые указанны на сайте.</p>
                    </div>
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] xs:text-[26px] sm:text-[36px] md:text-[42px] mt-[55px] font-normal">Сотрудничество</p>
                        <p className="text-header-ul font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[55px]">Наша компания всегда
                            стремится к долгосрочному и взаимовыгодному сотрудничеству с надежными и профессиональными
                            партнерами. Мы ценим ваш вклад в совместный успех и уверены, что только благодаря тесному
                            взаимодействию можем предложить нашим клиентам качественные и своевременные услуги.</p>
                        <p className="text-header-ul font-raleway text-[32px] lg:text-[28px] md:text-[24px] sm:text-[22px] ss:text-[20px] xs:text-[18px] font-thin mt-[55px]">Мы приглашаем вас к
                            продолжению и расширению нашего партнерства, уверенны, что это приведет к взаимной выгоде и
                            стабильному росту. Благодарим за ваш профессионализм и поддержку, и рассчитываем на
                            дальнейшее успешное сотрудничество!</p>
                    </div>
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] xs:text-[26px] sm:text-[36px] md:text-[42px] font-normal mt-[55px]">Галерея</p>
                        <div className="flex justify-center mx-auto mt-[30px] w-full">
                            <div className="grid grid-cols-1 ss:grid-cols-2 gap-[20px] w-full max-w-[1120px]">
                                <div className="w-full">
                                    <Dialog>
                                        <DialogTrigger>
                                            <Image
                                                src={AboutOne}
                                                alt="-"
                                                className="w-full h-auto max-w-[560px] ss:max-w-[480px] sm:max-w-[500px] xs:max-w-[300px] object-cover"
                                            />
                                        </DialogTrigger>
                                        <DialogContent>
                                            <Image src={AboutOne} alt="-" width={700} height={600} className="object-cover" />
                                        </DialogContent>
                                    </Dialog>
                                </div>
                                <div className="w-full">
                                    <Dialog>
                                        <DialogTrigger>
                                            <Image
                                                src={AboutTwo}
                                                alt="-"
                                                className="w-full h-auto max-w-[560px] ss:max-w-[480px] sm:max-w-[500px] xs:max-w-[300px] object-cover"
                                            />
                                        </DialogTrigger>
                                        <DialogContent>
                                            <Image src={AboutTwo} alt="-" width={700} height={600} className="object-cover" />
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <DownHeader/>
        </div>
    )
        ;
}


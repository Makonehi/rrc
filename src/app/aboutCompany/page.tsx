import React from 'react';
import Link from "next/link";
import Image from "next/image";
import DownHeader from "@/app/downHeader/page";
import AboutOne from './icon/aboutOne.svg';
import AboutTwo from './icon/aboutTwo.svg'

export default function AboutCompany() {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10"
                 style={{backgroundImage: 'url("/aboutFon.svg")', minHeight: "calc(100vh - 171px)"}}>
                <div className="w-[1225px] mx-auto px-7 mb-[30px]">
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] font-normal">О компании</p>

                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[35px]">Наша компания работает в посёлке Кез, а так же селе Дебессы (Республика Удмуртия) и предлагает широкий спектр ритуальных услуг. Мы организуем похороны, предоставляя помощь людям в тяжелую минуту. Мы понимаем, насколько это важно - и готовы вам помочь достойно провести прощание с ушедшим.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[35px]">Мы оказываем комплекс услуг, которые полностью охватывают подготовку и проведение похорон.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[35px]">Наше похоронное бюро нацелено на результат. Мы постоянно улучшаем качество предоставляемых услуг и развиваемся в новых направлениях. Доверие наших клиентов мы ценим высоко. Всегда идём на встречу их разумным потребностям, стараясь сделать всё необходимое для удовлетворения запросов заказчика. Наша команда профессионалов, гарантирует тактичный подход, добросовестное выполнение договорённостей и обязательств, а также своевременное исполнение заказанных услуг.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[55px]">Если у вас возникли любые вопросы или требуется более объёмная консультация по предлагаемым нами услугам - Вы можете обратиться к нам по контактным телефонам <Link href="/contact"><span className="hover:text-micro-text border-b border-dark-text hover:border-micro-text">контактным телефонам</span></Link>, которые указанны на сайте.</p>
                    </div>
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] mt-[55px] font-normal">Сотрудничество</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[55px]">Наша компания всегда стремится к долгосрочному и взаимовыгодному сотрудничеству с надежными и профессиональными партнерами. Мы ценим ваш вклад в совместный успех и уверены, что только благодаря тесному взаимодействию можем предложить нашим клиентам качественные и своевременные услуги.</p>
                        <p className="text-header-ul font-raleway text-[32px] font-thin mt-[55px]">Мы приглашаем вас к продолжению и расширению нашего партнерства, уверенны, что это приведет к взаимной выгоде и стабильному росту. Благодарим за ваш профессионализм и поддержку, и рассчитываем на дальнейшее успешное сотрудничество!</p>
                    </div>
                    <div>
                        <p className="text-header-ul font-cormorant text-[55px] font-normal mt-[55px]">Галерея</p>
                        <div className="flex gap-[32px] mt-[30px]">
                            <Image src={AboutOne} alt="-" width={560} height={460}/>
                            <Image src={AboutTwo} alt="-" width={560} height={460}/>
                        </div>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}


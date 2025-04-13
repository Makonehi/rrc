import Cremation from './icon/cremation.svg';
import Hearse from './icon/hearse.svg';
import CargoTwo from './icon/cargoTwo.svg';
import Preparation from './icon/preparation.svg';
import Dig from './icon/dig.svg';
import Clergyman from './icon/clergyman.svg';
import Storage from './icon/storege.svg';
import Exhumation from './icon/exhumation.svg';
import Cleaning from './icon/cleaning.svg';

export interface CenterType {
    img: string;
    name: string;
    link: string;
}

export const dataCenter: CenterType[] = [
    {img: Cremation, name: "Кремация", link: "/serviceCenter/cremation"},
    {img: Hearse, name: "Катафалк", link: "/serviceCenter/hearse"},
    {img: CargoTwo, name: "Груз 200", link: "/serviceCenter/cargoTwo"},
    {img: Preparation, name: "Подготовка тела", link: "/serviceCenter/preparation"},
    {img: Dig, name: "Копка могил", link: "/serviceCenter/dig"},
    {img: Clergyman, name: "Священнослужитель", link: "/serviceCenter/clergyman"},
    {img: Storage, name: "Хранение тела", link: "/serviceCenter/storage"},
    {img: Exhumation, name: "Эксгумация", link: "/serviceCenter/exhumation"},
    {img: Cleaning, name: "Уборка мест захоронений", link: "/serviceCenter/cleaning"},
]
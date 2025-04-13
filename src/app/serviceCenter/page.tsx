import React from 'react';
import CenterClient from"./CenterClient"
import {dataCenter} from "@/app/serviceCenter/data";

export default function CenterProp() {
    return <CenterClient dataCenter={dataCenter}/>
}


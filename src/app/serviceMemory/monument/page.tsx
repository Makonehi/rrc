import React from 'react';
import MonumentClient from "./MonumentClient"
import {dataMonument} from "@/app/serviceMemory/monument/data";

export default function MonumentPage() {
    return <MonumentClient dataMonument={dataMonument}/>
}


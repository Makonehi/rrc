import React from 'react';
import {dataProduct} from "@/app/serviceMemory/products/data";
import ProductClient from './ProductClient';


export default function ProductsPage() {
    return <ProductClient dataProduct={dataProduct}/>
}


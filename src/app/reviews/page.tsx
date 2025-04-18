import React from 'react';
import Reviews from "@/app/reviews/ClientReviews";
import {data} from "@/app/carusel/data";

export default function Page() {
    return (
        <Reviews data={data}/>
    );
}


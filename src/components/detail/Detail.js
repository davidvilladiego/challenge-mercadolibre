import React from 'react';
import {useParams} from "react-router-dom";

export const DetailComponent = () => {

    const params = useParams();
    console.log(params)

    return (
        <h3>detalle</h3>
    )
}

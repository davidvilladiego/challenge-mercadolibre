/***
 * ResultComponent componente donde muestra la lista de productos
 * @type {string} location: variable que captura el query de la url
 * @type {string} search: variable que guarda el queryString
 ***/

import React from 'react';
import queryString from 'query-string';
import {ResultListComponent} from "./ResultList";
import {useLocation} from "react-router-dom";

export const ResultComponent = () => {

    const location = useLocation();

    const {search=''} = queryString.parse(location.search);

    return (
        <ResultListComponent
            query={search}
        />
    )
}

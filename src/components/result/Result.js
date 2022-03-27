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

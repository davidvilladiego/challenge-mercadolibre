import React from 'react';
import {Routes, Route, BrowserRouter, Redirect} from "react-router-dom";
import {SearchComponent} from "../components/search/Search";
import {ResultComponent} from "../components/result/Result";
import {DetailComponent} from "../components/detail/Detail";

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <SearchComponent />
            <Routes>
                <Route path="/" element={<SearchComponent/>}/>
                <Route path="/items?search=" element={<ResultComponent/>}/>
                <Route path="/detail" element={<DetailComponent/>}/>
            </Routes>
        </BrowserRouter>
    )
}

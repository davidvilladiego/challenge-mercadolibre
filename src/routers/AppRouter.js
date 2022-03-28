import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {SearchComponent} from "../components/search/Search";
import {ResultComponent} from "../components/result/Result";
import {DetailComponent} from "../components/detail/Detail";

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <SearchComponent/>
            <div className='container bg-gray'>
                <Routes>
                    <Route path="/items" element={<ResultComponent/>}/>
                    <Route path="/items/:id" element={<DetailComponent/>}/>
                    <Route path="/" element={<></>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

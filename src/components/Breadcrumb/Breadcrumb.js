/***
 * BreadcrumbComponent componente donde se pinta y se valida el breadcrumb
 * @type {array} array: array donde se guardan cada una de las categorias
 ***/

import React from 'react';
import './Breadcrumb.css';

export const BreadcrumbComponent = ({categories}) => {
    let array = categories && categories.splice(0, 5)
    if (!array) {

        array = [{
            id: "1",
            name: "Tecnologia"
        }, {
            id: "2",
            name: "Apple"
        }, {
            id: "3",
            name: "iOS"
        }, {
            id: "4",
            name: "iPhone 11"
        }];
    }
    return (
        array && (
            <ul className='list'>
                {
                    array.map((category, index) => (
                        <li key={category.id}>
                            <a href="" className={`${index === 4 ? "fw-bolder" : ""}`}>{category.name} <span
                                className={`${index === 4 ? "display" : ""}`}>></span></a>
                        </li>
                    ))
                }
            </ul>)
    )
}

import React from 'react';
import './Breadcrumb.css';

export const BreadcrumbComponent = ({categories}) => {
    const array = categories && categories.splice(0, 5)
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

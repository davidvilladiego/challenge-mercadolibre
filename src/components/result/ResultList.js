import React from 'react';
import {useFetchProducts} from "../../hooks/useFetchProducts";
import {ResultItemComponent} from "./ResultItem";
import {BreadcrumbComponent} from "../Breadcrumb/Breadcrumb";

export const ResultListComponent = (query) => {

    const {listProducts, loading} = useFetchProducts(query);
    const {author, categories, items} = listProducts
    return (
        <div className='row'>
            {loading && (<h3>cargando...</h3>)}
            {items && (
                <>
                    <BreadcrumbComponent categories={categories} />
                    {
                        items.map(product => (
                            <ResultItemComponent
                                key={product.id}
                                {...product}
                            />
                        ))
                    }
                </>
            )}
        </div>
    )
}

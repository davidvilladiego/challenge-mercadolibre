import React from 'react';
import {useFetchProducts} from "../../hooks/useFetchProducts";
import {ResultItemComponent} from "./ResultItem";

export const ResultListComponent = (query) => {

    const {listProducts, loading} = useFetchProducts(query);
    const {author, categories, items} = listProducts
console.log(items)
    return (
        <div className='row bg-danger'>
            {loading && (<h3>cargando...</h3>)}
            {items && (
                <>
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

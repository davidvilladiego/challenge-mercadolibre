import React from 'react';
import {useFetchProducts} from "../../hooks/useFetchGifs";
import {ResultItemComponent} from "./ResultItem";

export const ResultListComponent = (query) => {

    const {products, loading} = useFetchProducts(query);

    return (
        <div className='row bg-danger'>
            {loading && (<h3>cargando...</h3>)}
            {products && (
                <>
                    {
                        products.map(product => (
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

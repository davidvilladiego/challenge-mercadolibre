import React from 'react';
import {useFetchProducts} from "../../hooks/useFetchProducts";
import {ResultItemComponent} from "./ResultItem";
import {BreadcrumbComponent} from "../Breadcrumb/Breadcrumb";

export const ResultListComponent = (query) => {

    const {listProducts, loading} = useFetchProducts(query);
    const {categories, items} = listProducts
    const validateData = items && items.length > 0;
    const message = !validateData && !loading;
    console.log(message);
    return (
        <div className='row'>
            {loading && (
                <div className='text-center spinner'>
                    <div className="spinner-border cl-gray" role="status">
                    </div>
                    <span className="spinner-text">Cargando...</span>
                </div>

            )}
            {message && (
                <div className='text-center text-none'>
                    ¡Producto no encontrado intente nuevamente!
                </div>
            )}
            {validateData && (
                <>
                    <BreadcrumbComponent categories={categories}/>
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

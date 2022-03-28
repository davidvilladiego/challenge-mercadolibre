/***
 * ResultListComponent componente donde itera la información de cada producto
 * @type {object} listProducts: objecto que contiene informacion de toda el api rest search?query=''
 * @type {boolean} loading: variable que se utiliza para mnostrar el cargando
 * @type {array} categories: array donde se guardar cada una de las categorias
 * @type {object} items: objeto que contiene la informaición de todos los productos
 * @type {boolean} validateData: variable que se utiliza para validar los datos de entrada
 * @type {boolean} message: variable que se utiliza para validar el mensaje de productos no encontrado
 ***/

import React from 'react';
import {useFetchProducts} from "../../hooks/useFetchProducts";
import {ResultItemComponent} from "./ResultItem";
import {BreadcrumbComponent} from "../Breadcrumb/Breadcrumb";

export const ResultListComponent = (query) => {

    const {listProducts, loading} = useFetchProducts(query);
    const {categories, items} = listProducts
    const validateData = items && items.length > 0;
    const message = !validateData && !loading;
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
                    ¡No se encontraron productos intente nuevamente!
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

/***
 * @param {function} useFetchProducts: hook para obtener la informacion de productos
 ***/

import {useState, useEffect} from 'react'
import {getListProducts} from "../services/getListProducts";
import {mapListProduct} from "../helpers/mapRsProducts";


export const useFetchProducts = ({query}) => {

    const [state, setState] = useState({
        listProducts: [],
        loading: true
    });

    useEffect(() => {
        getListProducts(query)
            .then(resp => {
                const listProducts = mapListProduct(resp);
                setState({
                    listProducts: {...listProducts},
                    loading: false,
                });
            })

    }, [query])


    return state; // { data:[], loading: true };


}



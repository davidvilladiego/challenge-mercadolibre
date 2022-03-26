/***
 * @param {function} useFetchProducts: hook para ingresar la informacion de productos en un estado nuevo
 ***/

import {useState, useEffect} from 'react'
import {getListProducts} from "../services/getListProducts";


export const useFetchProducts = ({query}) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getListProducts(query)
            .then(resp => {
                setState({
                    products: resp.results,
                    loading: false,
                });
            })

    }, [query])


    return state; // { data:[], loading: true };


}



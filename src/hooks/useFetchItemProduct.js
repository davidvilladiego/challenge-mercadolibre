/***
 * @param {function} useFetchItemProduct: hook para obtener el detalle y descripcion de un productos
 ***/

import {useState, useEffect} from 'react'
import {getProductByDescription} from "../services/getListProducts";
import {mapItemProduct} from "../helpers/mapRsProducts";


export const useFetchItemProduct = (idProduct) => {

    const [state, setState] = useState({
        itemProduct: {},
        loading: true
    });

    useEffect(async () => {
        const response = await getProductByDescription(idProduct);
        const itemProduct = mapItemProduct(response);
        setState({
            itemProduct: {...itemProduct},
            loading: false,
        });

    }, [idProduct])


    return state; // { data:[], loading: true };


}



/***
 * @param {function} getListProducts: Servicio para obtener la información de los productos
 ***/
import {environment} from "../environments/environments";

export const getListProducts = async (product) => {

    const url = `${environment.endpoint}/sites/MLA/search?q=${product}`;
    const resp = await fetch(url);
    const response = await resp.json();

    return response;

}

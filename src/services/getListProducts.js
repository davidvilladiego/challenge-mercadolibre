/***
 * @param {function} getListProducts: Servicio para obtener la información de los productos
 ***/
import {environment} from "../environments/environments";

export const getListProducts = async (product) => {

    const url = `${environment.endpoint}/sites/MLA/search?q=${product}&limit=4`;
    const resp = await fetch(url);
    const response = await resp.json();

    return response;

}
/***
 * @param {function} getProductByDescription: Servicio para obtener la información de un producto y descripcion
 ***/
export const getProductByDescription = async (idProduct) => {
    return new Promise(resolve => {
        getProduct(idProduct).then(detail => {
            getProductDescription(idProduct).then(description => {
                resolve({detail, description});
            }).catch(() => resolve({}));
        }).catch(() => resolve({}));
    })
}
/***
 * @param {function} getProduct: Servicio para obtener la información de un producto
 ***/
const getProduct = async (idProduct) => {

    const url = `${environment.endpoint}/items/${idProduct}`;
    const resp = await fetch(url);
    const response = await resp.json();

    return response;

}

/***
 * @param {function} getProductDescription: Servicio para obtener la descripcion de un producto
 ***/
const getProductDescription = async (idProduct) => {

    const url = `${environment.endpoint}/items/${idProduct}/description`;
    const resp = await fetch(url);
    const response = await resp.json();

    return response;

}

/***
 * SearchComponent componente que se utiliza para realizar la busqueda de un producto
 * @type {function} mapListProduct: funcion que sirve para crear el objeto de la lista de productos
 * @type {function} mapItemProduct: funcion que sirve para crear el objeto del detalle de productos
 * @type {function} getResultsItem: funcion que sirve para mapaer la respuesta de la api de lista de productos
 * @type {function} getResultsItemByDescrip: funcion que sirve para mapaer la respuesta de la api de detalle de productos
 * @type {function} getValueByKey: funcion que sirve para retornar el valor de un tag dentro de array object
 ***/

export const mapListProduct = (response) => {
    const rs = {
        author: {
            name: 'Manuel David ',
            lastname: 'Villadiego Echenique'
        },
        categories: getValueByKey(response.available_filters, 'Categories'),
        items: getResultsItem(response.results)
    }
    return rs;
}

export const mapItemProduct = (response) => {
    const rs = {
        author: {
            name: 'Manuel David ',
            lastname: 'Villadiego Echenique'
        },
        item: getResultsItemByDescrip(response)
    }
    return rs;
}

function getResultsItem(results) {
    const products = []
    results.map(item => {
        products.push({
            id: item.id,
            title: item.title,
            price: {currency: item.currency_id, amount: item.price, decimals: 0},
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            address: item.address.city_name
        })
    })

    return products;

}

function getResultsItemByDescrip({detail, description}) {
    const products = {
        id: detail.id,
        title: detail.title,
        price: {currency: detail.currency_id, amount: detail.price, decimals: 0},
        picture: detail.thumbnail,
        condition: detail.condition,
        free_shipping: detail.shipping.free_shipping,
        sold_quantity: detail.sold_quantity,
        description: description.plain_text,
        categories: detail.attributes
    };

    return products;

}

function getValueByKey(array, key) {
    var value = '';
    var foundItem = '';
    if (array) {
        foundItem = array.find(function (element) {
            return element.name === key;
        });
    }
    if (foundItem) {
        value = foundItem.values;
    }

    return value;
}

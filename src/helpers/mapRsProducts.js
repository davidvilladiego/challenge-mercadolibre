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
        description: description.plain_text
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

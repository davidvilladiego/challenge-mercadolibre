/***
 * @param {function} currencyFormat: funcion para dar formato al precio
 ***/
export const currencyFormat = (num, decimals) => {
    return '$' + num.toFixed(decimals).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

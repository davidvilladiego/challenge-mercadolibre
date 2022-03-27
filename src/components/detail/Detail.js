import React from 'react';
import {useParams} from "react-router-dom";
import {useFetchItemProduct} from "../../hooks/useFetchItemProduct";

export const DetailComponent = () => {

    const {id} = useParams();
    const {itemProduct, loading} = useFetchItemProduct(id);
    console.log(itemProduct)
    const {item} = itemProduct;
    return (
        <>
            {item && (
                <div className=''>
                    <div className='row'>
                        <div className='col-8'>
                            <img src={item.picture} className='card-image' alt='image'/>
                        </div>
                        <div className='col-4'>
                            <p>{item.condition} - {item.sold_quantity} vendidos</p>
                            <h3>{item.title}</h3>
                            <h2>{item.price.amount}</h2>
                            <button type="button" className="btn btn-primary">Comprar</button>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h2>Descripción del producto</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>)}
        </>
    )
}

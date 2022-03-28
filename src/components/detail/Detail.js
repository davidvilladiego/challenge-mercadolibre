import React from 'react';
import {useParams} from "react-router-dom";
import {useFetchItemProduct} from "../../hooks/useFetchItemProduct";
import './Detail.css';
import {BreadcrumbComponent} from "../Breadcrumb/Breadcrumb";
import {currencyFormat} from "../../helpers/utilsFuncions";

export const DetailComponent = () => {

    const {id} = useParams();
    const {itemProduct} = useFetchItemProduct(id);
    const {item} = itemProduct;
    const categories = item && item.categories;
    return (
        <>
            {item && (
                <>
                    <BreadcrumbComponent categories={categories}/>
                    <div className='bg-white'>
                        <div className='row'>
                            <div className='col-8'>
                                <img src={item.picture} className='image-detail' alt='image'/>
                            </div>
                            <div className='col-4'>
                                <p className='quantity'>{item.condition} - {item.sold_quantity} vendidos</p>
                                <p className='title'>{item.title}</p>
                                <p className='price'>{currencyFormat(item.price.amount, 2)}</p>
                                <button type="button" className="btn btn-pay">Comprar</button>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-8">
                                <h2 className='title-product'>Descripción del producto</h2>
                                <p className='description'>{item.description}</p>
                            </div>
                        </div>
                    </div>
                </>)}
        </>
    )
}

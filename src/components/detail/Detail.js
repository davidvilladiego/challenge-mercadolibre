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
                            <div className='col-12 col-xxl-8 col-xl-8 col-lg-7 col-md-6 col-sm-12 p-right animated bounceInLeft'>
                                <img src={item.picture} className='image-detail' alt='image'/>
                            </div>
                            <div className='col-12 col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-12 p-right animated bounceInRight'>
                                <p className='quantity'>{item.condition} - {item.sold_quantity} vendidos</p>
                                <p className='title'>{item.title}</p>
                                <p className='price'>{currencyFormat(item.price.amount, 2)}</p>
                                <button type="button" className="btn btn-pay">Comprar</button>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-12 col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 animated bounceInUp">
                                <h2 className='title-product'>Descripción del producto</h2>
                                <p className='description'>{item.description}</p>
                            </div>
                        </div>
                    </div>
                </>)}
        </>
    )
}

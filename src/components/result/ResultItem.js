import React from 'react';
import {useNavigate} from "react-router-dom";
import {currencyFormat} from "../../helpers/utilsFuncions";
import shipping from '../../assets/images/ic_shipping2x.png';
import './Result.css';


export const ResultItemComponent = ({id, title, price, picture, address}) => {

    const navigate = useNavigate();
    const viewDetails = (e) => {
        e.preventDefault();
        navigate(`/items/${id}`);
    }

    return (
        <div className="col-12" onClick={viewDetails}>
            <div className='card card-item border-card animated fadeInLeft'>
                <div className='row '>
                    <div className='col-12 col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-12 image-align'>
                        <img src={picture} className='card-image-item' alt='image'/>
                    </div>
                    <div className='col-6 col-xxl-8 col-xl-8 col-lg-7 col-md-4 col-sm-6 card-item'>
                        <div className='card-body'>
                            <h5 className='p-btn'>
                                {currencyFormat(price.amount, 0)}
                                <img src={shipping} className='image-car' alt='image'/>
                            </h5>
                            <p className='f-size'>{title}</p>
                        </div>
                    </div>
                    <div className='col-6 col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6'>
                        <div className='address'>
                            <p className='f-size-ad'>{address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

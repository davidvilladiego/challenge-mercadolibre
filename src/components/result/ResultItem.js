import React from 'react';
import './Result.css';
import {useNavigate} from "react-router-dom";
import {currencyFormat} from "../../helpers/utilsFuncions";
import shipping from '../../assets/images/ic_shipping2x.png';


export const ResultItemComponent = ({id, title, price, picture, address}) => {

    const navigate = useNavigate();
    const viewDetails = (e) => {
        e.preventDefault();
        navigate(`/items/${id}`);
    }

    return (
        <div className="col-12" onClick={viewDetails}>
            <div className='card card-item border-card'>
                <div className='row'>
                    <div className='col-2'>
                        <img src={picture} className='card-image-item' alt='image'/>
                    </div>
                    <div className='col-8 card-item'>
                        <div className='card-body'>
                            <h5 className='p-btn'>
                                {currencyFormat(price.amount, 0)}
                                <img src={shipping} className='image-car' alt='image'/>
                            </h5>
                            <p className='f-size'>{title}</p>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='address'>
                            <p className='f-size-ad'>{address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

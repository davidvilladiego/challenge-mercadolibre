import React from 'react';
import './Result.css';
import {useNavigate} from "react-router-dom";

export const ResultItemComponent = ({id, title, price, picture, address}) => {

    const navigate = useNavigate();
    const viewDetails = (e) => {
        e.preventDefault();
        navigate(`/items/${id}`);
    }

    return (
        <div className="col-12" onClick={viewDetails}>
            <div className='card'>
                <div className='row'>
                    <div className='col-4 bg-secondary'>

                        <img src={picture} className='card-image' alt='image'/>
                    </div>
                    <div className='col-6'>
                        <div className='card-body'>
                            <h5>{price.amount}</h5>
                            <p>{title}</p>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='card-body'>
                            <p>{address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Search.css';
import searchIcon from '../../assets/images/ic_Search2x.png';
import logo from '../../assets/images/Logo_ML2x.png';

export const SearchComponent = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const search = (e) => {
        e.preventDefault();
        navigate(`/items?search=${inputValue}`, {replace: true});
    }

    return (
        <nav className="navbar navbar-expand-lg bg-nav">
            <div className="container-fluid">
                <form className="d-flex center" onSubmit={search}>
                    <img src={logo} alt='icon' className='logo'/>
                    <input className="input-search" type="text" placeholder="Nunca dejes de buscar"
                           onChange={handleInputChange}/>
                    <button className="btn btn-search" type="submit" onClick={search}>
                        <img src={searchIcon} alt='icon'/>
                    </button>
                </form>
            </div>
        </nav>
    )
}

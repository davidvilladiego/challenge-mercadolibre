/***
 * SearchComponent componente que se utiliza para realizar la busqueda de un producto
 * @type {object} navigate: hook que se utiliza para navegar dentro del router
 * @type {string} inputValue: variable que guarda el estado de la caja de texto
 * @type {function} setInputValue: funcion que sirve para cambiar el estado inicial
 * @type {function} handleInputChange: funcion que sirve para obtener el valor de la caja de texto
 * @type {function} search: funcion que sirve para realizar la busqueda de un producto y activa una ruta
 ***/

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

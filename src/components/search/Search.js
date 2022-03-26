import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>

                <form className="d-flex" onSubmit={search}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                           onChange={handleInputChange}/>
                    <button className="btn btn-outline-success" type="submit" onClick={search}>Search</button>
                </form>
            </div>
        </nav>
    )
}

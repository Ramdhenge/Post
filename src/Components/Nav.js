import React from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate();
    const handleLogout = (e)=>{
        e.preventDefault();
        localStorage.clear();
        navigate('/login');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 " style={{zIndex:"1", position:"fixed", top: "0"}}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand ms-5" to="/feeds">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/feeds">Home</NavLink>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <button type="button" className="ms-5 btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav

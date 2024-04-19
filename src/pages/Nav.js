import React from 'react'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Nav({Toggle}) {
    
    useEffect(() => {
        import('bootstrap/js/dist/dropdown');
        import('bootstrap/js/dist/collapse');
    }, []);
    return (
    <nav className="navbar navbar-expand-sm navbar-black bg-transparent">
        <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <i className='bi bi-justify'></i>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item dropdown">
                    <a className="bi bi-person fs-5 me-3 nav-link dropdown-toggle text-black" href="#" id="dropdownId
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                        <a className="dropdown-item" href="#">Profile</a>
                        <a className="dropdown-item" href="#">Setting</a>
                        <a className="dropdown-item" href="#">Logout</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    )
}
export default Nav;

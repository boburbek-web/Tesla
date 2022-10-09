import React from 'react';
import logo from '../../img/logo.svg'

import "./navbar.css"
const Navbar = () => {
    return (
        <>
            <div className=" navbar d-flex justify-content-evenly">
                <img src={logo} style={{ width: "130px",marginTop:"-10px"}} />

                <ul class="navbarMenu">
                    <a href="#" class="menuItems text-dark">Model S</a>
                    <a href="#" class="menuItems text-dark">Model 3</a>
                    <a href="#" class="menuItems text-dark">Model X</a>
                    <a href="#" class="menuItems text-dark">Model Y</a>

                    <a href="#" class="menuItems text-dark">Solor Roof</a>
                    <a href="#" class="menuItems text-dark">Solor Panel</a>
                </ul>

                <ul className='d-flex navbarLink'>
                    <li className='m-3 list-unstyled'>Shop</li>
                    <li className='m-3 list-unstyled'>Acount</li>
                    <li className='m-3 list-unstyled'>Menu</li>
                </ul>

            </div>

        </>
    );
};

export default Navbar;
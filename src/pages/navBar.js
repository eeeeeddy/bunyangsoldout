import React from 'react';
import { PC, Mobile } from "../components/responsive";

function navbar() {
    return (
        <div>
            <PC>
                <nav id="navbar-example2" className="navbar bg-dark px-3 fixed-top">
                    <ul className="nav mx-auto justify-content-center">
                        <li className='nav-item'>
                            <a className='nav-link text-white' href='#sec01' style={{ paddingTop: '0px', paddingBottom: '0px'}}>
                                <img src={`${process.env.PUBLIC_URL}/favicon.png`} alt="logo" style={{ width: '44px', height: 'auto' }}/>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-white' href='#sec02'>가격 안내</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-white' href='#sec03'>샘플 안내</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-white' href='#sec04'>드리는 말</a>
                        </li>
                    </ul>
                </nav>
            </PC>

            <Mobile>
                <nav id="navbar-example2" className="navbar bg-dark pe-1 fixed-top">
                    <ul className="nav mx-auto justify-content-center">
                        <li className='nav-item'>
                            <a className='nav-link text-white pe-1' href='#sec01' style={{ paddingTop: '4px', paddingLeft: '8px'}}>
                                <img src={`${process.env.PUBLIC_URL}/favicon.png`} alt="logo" style={{ width: '34px', height: 'auto' }}/>
                            </a> 
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-white pe-1' href='#sec02'>가격 안내</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-white pe-1' href='#sec03'>샘플 안내</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-white pe-1' href='#sec04'>드리는 말</a>
                        </li>
                    </ul>
                </nav>
            </Mobile>
        </div>
    );
}

export default navbar;
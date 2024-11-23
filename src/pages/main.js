import React from 'react';
import '../css/Main.css';
import { PC, Mobile } from "../components/responsive";
import NavBar from './NavBar';
import ActionButton from './ActionButton';

function Main() {
    return (
        <div className='' style={{ fontFamily: 'Nanum Gothic' }}>
            <div className='Navbar'>
                <NavBar />
            </div>

            <PC>
                <div className="scrollspy-example bg-white p-3 rounded-2 mt-5" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex={0}>
                    <div className='image-container'>
                        <div id="sec01" className='mb-5'></div>
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/001.jpg`} alt="img001"/>
                        </a>
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/002.jpg`} alt="img002"/>
                        </a>
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/003.png`} alt="img003"/>                        
                        </a>
                        <a href="tel:010-2344-7356">
                        <img src={`${process.env.PUBLIC_URL}/images/004.jpg`} alt="img004"/>
                        </a>

                        {/* 가격 안내 */}
                        <div id="sec02" className='mb-4'></div> 
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/005.png`} alt="img005"/>
                        </a>

                        {/* 샘플 안내 */}
                        <div id="sec03" className='mb-4'></div>
                        <a href="https://bunyangsoldout.imweb.me" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/images/006.jpg`} alt="img006"/>
                        </a>
                        <a href="https://bunyangsoldout.imweb.me" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/images/007.jpg`} alt="img007"/>
                        </a>
                        <a href="https://bunyangsoldout.imweb.me" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/images/008.jpg`} alt="img008"/>
                        </a>
                        <a href="https://bunyangsoldout.imweb.me" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/images/009.jpg`} alt="img009"/>
                        </a>
                        <a href="https://bunyangsoldout.imweb.me" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/images/010.jpg`} alt="img010"/>
                        </a>
                        <a href="https://bunyangsoldout.imweb.me" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/images/011.jpg`} alt="img011"/>
                        </a>
                        <a href="https://bunyangsoldout.imweb.me" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/images/012.jpg`} alt="img012"/>
                        </a>
                        <a href="https://bunyangsoldout.imweb.me" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/images/013.jpg`} alt="img013"/>
                        </a>
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/014.jpg`} alt="img014"/>
                        </a>
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/015.jpg`} alt="img015"/>
                        </a>
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/016.jpg`} alt="img016"/>
                        </a>

                        {/* 드리는말 */}
                        <div id="sec04" className='mb-4'></div>
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/017.jpg`} alt="img017"/>
                        </a>
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/018.jpg`} alt="img018"/>
                        </a>
                    </div>
                </div>
            </PC>

            <Mobile>
                <div className="scrollspy-example bg-white p-3 rounded-2 mt-5" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex={0}>
                <div className='image-container'>
                        <div id="sec01" className='mb-5'></div>
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/001.jpg`} alt="img001"/>
                        </a>
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/002.jpg`} alt="img002"/>
                        </a>
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/003.png`} alt="img003"/>                        
                        </a>
                        <a href="tel:010-2344-7356">
                        <img src={`${process.env.PUBLIC_URL}/images/004.jpg`} alt="img004"/>
                        </a>

                        {/* 가격 안내 */}
                        <div id="sec02" className='mb-3'></div> 
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/005.png`} alt="img005"/>
                        </a>

                        {/* 샘플 안내 */}
                        <div id="sec03" className='mb-3'></div>
                        <a href="https://bunyangsoldout.imweb.me">
                            <img src={`${process.env.PUBLIC_URL}/images/006.jpg`} alt="img006"/>
                        </a>
                        <a href="https://bunyangsoldout.imweb.me">
                            <img src={`${process.env.PUBLIC_URL}/images/007.jpg`} alt="img007"/>
                        </a>
                        <a href="https://bunyangsoldout.imweb.me">
                            <img src={`${process.env.PUBLIC_URL}/images/008.jpg`} alt="img008"/>
                        </a>
                        <a href="https://bunyangsoldout.imweb.me">
                            <img src={`${process.env.PUBLIC_URL}/images/009.jpg`} alt="img009"/>
                        </a>
                        <a href="https://bunyangsoldout.imweb.me">
                            <img src={`${process.env.PUBLIC_URL}/images/010.jpg`} alt="img010"/>
                        </a>
                        <a href="https://bunyangsoldout.imweb.me">
                            <img src={`${process.env.PUBLIC_URL}/images/011.jpg`} alt="img011"/>
                        </a>
                        <a href="https://bunyangsoldout.imweb.me">
                            <img src={`${process.env.PUBLIC_URL}/images/012.jpg`} alt="img012"/>
                        </a>
                        <a href="https://bunyangsoldout.imweb.me">
                            <img src={`${process.env.PUBLIC_URL}/images/013.jpg`} alt="img013"/>
                        </a>
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/014.jpg`} alt="img014"/>
                        </a>
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/015.jpg`} alt="img015"/>
                        </a>
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/016.jpg`} alt="img016"/>
                        </a>

                        {/* 드리는말 */}
                        <div id="sec04" className='mb-3'></div>
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/017.jpg`} alt="img017"/>
                        </a>
                        <a href="tel:010-2344-7356">
                            <img src={`${process.env.PUBLIC_URL}/images/018.jpg`} alt="img018"/>
                        </a>
                    </div>
                </div>
            </Mobile>

            <ActionButton />
        </div>
    )
}

export default Main;
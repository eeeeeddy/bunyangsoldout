import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PC, Mobile } from "../components/responsive";
import Navbar from './navBar';
import ActionButton from './actionButton';

function RegistSuccess() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className='' style={{ fontFamily: 'Nanum Gothic' }}>
            <div className='Navbar'>
                <Navbar />
            </div>

            <div style={{height: '100px'}}/>

            <PC>
                <div className='justify-content-center mt-5'>
                    <div className='mt-5'>
                        <p className='h2'>관심 고객 등록이 완료되었습니다. </p>
                        <p className='h2'>감사합니다.</p>
                    </div>
                    <button className="btn btn-dark mt-5" onClick={goToHome}>Home으로</button>
                </div>
            </PC>

            <Mobile>
            </Mobile>

            <ActionButton />
        </div>
    );
}

export default RegistSuccess;
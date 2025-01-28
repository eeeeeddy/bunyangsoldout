import React from 'react';
import '../css/actionButton.css';
import { useNavigate } from 'react-router-dom';

function ActionButton() {
    const navigate = useNavigate();

    const fnGoRegist = (e) => {
        navigate("/regist");
    }

    return (
        <div>
            <div className="reg_customer" target="_blank" onClick={fnGoRegist} style={{ cursor: 'pointer' }}>
                <div class="reg_customer_div">
                    <p class="reg_customer_p">관심고객 등록</p>
                </div>
            </div>
            <a className="kakao_icon" href="https://open.kakao.com/o/sAOffRXg">
                <img src="https://cdn.imweb.me/upload/S20201113a52cd05d66515/f0e3a46da4bba.png" alt="kakao"/>
            </a>
            <a className="call_icon" href="tel:1600-7356">
                <img src="https://cdn.imweb.me/upload/S20201113a52cd05d66515/8311e9fdac74f.png" alt="phone"/>
            </a>
        </div>
    );
}

export default ActionButton;
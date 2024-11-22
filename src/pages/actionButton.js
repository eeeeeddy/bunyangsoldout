import React from 'react';
import '../css/actionButton.css';

function actionButton() {
    return (
        <div>
            <a class="kakao_icon" href="https://open.kakao.com/o/sAOffRXg">
                <img src="https://cdn.imweb.me/upload/S20201113a52cd05d66515/f0e3a46da4bba.png" alt="kakao"/>
            </a>
            <a class="call_icon" href="tel:1600-7356">
                <img src="https://cdn.imweb.me/upload/S20201113a52cd05d66515/8311e9fdac74f.png" alt="phone"/>
            </a>
        </div>
    );
}

export default actionButton;
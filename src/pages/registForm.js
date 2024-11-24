import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { PC, Mobile } from "../components/responsive";
import Navbar from './navBar';
import ActionButton from './actionButton';

function RegistForm() {
    const [telNo1, setTelNo1] = useState('');
    const [telNo2, setTelNo2] = useState('');
    const [telNo3, setTelNo3] = useState('');
    // const navigate = useNavigate();

    const policyPhrase = '나무기획(이하 ‘회사’라 한다)은 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다. \n\n'
                        + '제1조 (개인정보의 처리목적) \n'
                        + '회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다. \n'
                        + '1. 홈페이지 회원 가입 및 관리 \n'
                        + '회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정 이용 방지, 만 14세 미만 아동의 개인정보처리 시 법정대리인의 동의 여부 확인, 각종 고지․통지, 고충 처리 등을 목적으로 개인정보를 처리합니다. \n'
                        + '2. 재화 또는 서비스 제공 \n'
                        + '물품 배송, 서비스 제공, 계약서 및 청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금 결제 및 정산, 채권추심 등을 목적으로 개인정보를 처리합니다. \n'
                        + '3. 고충 처리 \n'
                        + '민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리 결과 통보 등의 목적으로 개인정보를 처리합니다. \n\n'
                        + '제2조 (개인정보의 처리 및 보유기간) \n'
                        + '① 회사는 법령에 따른 개인정보 보유, 이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용 기간 내에서 개인정보를 처리, 보유합니다. \n'
                        + '② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다. \n'
                        + '1. 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴 시까지 \n'
                        + '다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지 \n'
                        + '1) 관계 법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사, 조사 종료 시까지 \n'
                        + '2) 홈페이지 이용에 따른 채권 및 채무관계 잔존 시에는 해당 채권, 채무 관계 정산 시까지'

    const handleTelNoChange = (e) => {
        const { id, value } = e.target;

        // 각각의 입력 필드 업데이트
        if (id === 'telNo1') setTelNo1(value);
        if (id === 'telNo2') setTelNo2(value);
        if (id === 'telNo3') setTelNo3(value);
    };

    const fnSubmit = (e) => {
        const checkbox = document.getElementById("agreeCheck");
        if (!checkbox.checked) {
            e.preventDefault();
            alert("개인정보 수집 및 이용에 동의해야 합니다.");
            return;
        }

        // 경고창 띄운 후 폼을 제출
        alert("폼이 성공적으로 제출되었습니다!");
        // Netlify 폼 제출을 진행
        e.target.submit();
    }

    const fnTelNoValidation = (e) => {
        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
    }

    return (
        <div className='' style={{ fontFamily: 'Nanum Gothic' }}>
            <div className='Navbar'>
                <Navbar />
            </div>

            <div style={{height: '100px'}}/>

            <PC>
                <div className='justify-content-center mt-5'>
                    <div className='mt-5'>
                        <p className='h1'>관심 고객 등록</p>
                    </div>
                    <form className='mt-5' name="contact" method="POST" data-netlify="true" style={{ maxWidth: '75%', width: '100%', margin: '0 auto', textAlign: 'left'}} onSubmit={fnSubmit}>
                        <input type="hidden" name="contact" value="contact" />
                        <div className="form-group mb-3">
                            <label className='text-start' for="name">이름</label>
                            <input type="text" className="form-control mt-1" id="name" name="name" aria-describedby="emailHelp" placeholder="" required/>
                        </div>
                        <div className="form-group mb-3">
                            <label for="telNo">연락처</label>
                            <div className="d-flex align-items-center gap-2 mt-1" style={{width: "50%"}}>
                                <input type="hidden" className="mt-1" name="telNo" value={`${telNo1}-${telNo2}-${telNo3}`}/>
                                <select className="form-control mt-1" id="telNo1" value={telNo1} onChange={handleTelNoChange} required>
                                    <option value="">선택</option>
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="018">018</option>
                                    <option value="019">019</option>
                                </select>
                                <input type="text" className="form-control mt-1" id="telNo2" value={telNo2} onChange={handleTelNoChange} maxLength="4" onInput={fnTelNoValidation} required/>
                                <input type="text" className="form-control mt-1" id="telNo3" value={telNo3} onChange={handleTelNoChange} maxLength="4" onInput={fnTelNoValidation} required/>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label>개인 정보 수집 및 이용 동의</label>
                            <textarea className="form-control mt-1" placeholder={policyPhrase} style={{ height: '200px', overflowY: 'scroll', resize: 'none' }}/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="agreeCheck" />
                            <label className="form-check-label" for="agreeCheck">개인정보 수집 및 이용에 동의합니다.</label>
                        </div>
                        
                        <button type="submit" className="btn btn-dark mt-3">작성</button>
                    </form>
                </div>
            </PC>

            <Mobile>
            </Mobile>

            <ActionButton />
        </div>
    );
}

export default RegistForm;
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PC, Mobile } from "../components/responsive";
// import Navbar from './navBar';
import ActionButton from './actionButton';
import emailjs from '@emailjs/browser';

function RegistForm() {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY
    
    const navigate = useNavigate();
    const form = useRef();

    const [customerName, setCustomerName] = useState('');
    const [telNo1, setTelNo1] = useState('');
    const [telNo2, setTelNo2] = useState('');
    const [telNo3, setTelNo3] = useState('');

    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

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

    const fnSetTelNo = (e) => {
        const { id, value } = e.target;

        // 각각의 입력 필드 업데이트
        if (id === 'telNo1') setTelNo1(value);
        if (id === 'telNo2') setTelNo2(value);
        if (id === 'telNo3') setTelNo3(value);
    };

    const fnSetCustomerName = (e) => {
        setCustomerName(e.target.value);
    };

    const fnSendEmail = (e) => {
        e.preventDefault();

        const checkbox = document.getElementById("agreeCheck");
        if (!checkbox.checked) {
            e.preventDefault();
            alert("개인정보 수집 및 이용에 동의해야 합니다.");
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
            result => {
                if (window.Kakao) {
                    fnSendKakao();
                    fnSendSMS();
                    navigate("/registSuccess");
                } else {
                    alert("등록에 실패하였습니다. 다시 등록해주세요.")
                }
                // navigate("/registSuccess");
            },
            error => {
                console.log(error)
                alert("등록에 실패하였습니다. 다시 등록해주세요.")
            }
        );
    };

    const fnSendKakao = (e) =>{ // 전송 시 친구 목록에서 선택하여 보내야하므로 비활성화 - 25.01.29
        // window.Kakao.Share.sendCustom({
        //     templateId: 116790,
        //     templateArgs: {
        //         site_name: "분양완판",
        //         customer_name: customerName,
        //         customer_telNo: `${telNo1}-${telNo2}-${telNo3}`
        //     },
        //     serverCallbackArgs: {
        //         isSendSuccess: "yes"
        //     }
        // });
    };

    async function fnSendSMS() { // 발신번호 등록 후 재 테스트 - 25.02.02

        // Web Name, Date, Customer Name, Tel No
        console.log('분양완판', formattedDate, customerName, `${telNo1}-${telNo2}-${telNo3}`)

        // const response = await fetch("/.netlify/functions/sendSms", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         type: "SMS",
        //         countryCode: "82",
        //         from: process.env.REACT_APP_NCP_SEND_NUM,
        //         to: [process.env.REACT_APP_NCP_RECEIVE_NUM],
        //         content: "테스트 메시지",
        //     }),
        // });

        // const data = await response.json();
        // console.log(data);
    }

    const fnTelNoValidation = (e) => {
        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
    };

    return (
        <div className='' style={{ fontFamily: 'Nanum Gothic' }}>
            <div className='Navbar'>
                <nav id="navbar-example2" className="navbar bg-dark px-3 fixed-top">
                    <ul className="nav mx-auto justify-content-center">
                        <li className='nav-item'>
                            <a className='nav-link text-white' href='/' style={{ paddingTop: '0px', paddingBottom: '0px'}}>
                                <img src={`${process.env.PUBLIC_URL}/favicon.png`} alt="logo" style={{ width: '44px', height: 'auto' }}/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div style={{height: '100px'}}/>

            <PC>
                <div className='justify-content-center mt-5'>
                    <div className='mt-5'>
                        <p className='h1'>관심 고객 등록</p>
                    </div>
                    <form className='mt-5' ref={form} style={{ maxWidth: '75%', width: '100%', margin: '0 auto', textAlign: 'left'}} onSubmit={fnSendEmail}>
                        <input type="hidden" className='text-center' name="site_name" value={`분양완판`}></input>
                        <input type="hidden" className='text-center' name="date" value={`${formattedDate}`}></input>
                        <div className="form-group mb-3">
                            <label className='text-start'>이름</label>
                            <input type="text" className="form-control mt-1" name="customer_name" placeholder="" onChange={fnSetCustomerName} required/>
                        </div>
                        <div className="form-group mb-3">
                            <label>연락처</label>
                            <div className="d-flex align-items-center gap-2 mt-1" style={{width: "50%"}}>
                                <input type="hidden" className="mt-1" name="customer_telNo" value={`${telNo1}-${telNo2}-${telNo3}`}/>
                                <select className="form-control mt-1" id="telNo1" value={telNo1} onChange={fnSetTelNo} required>
                                    <option value="">선택</option>
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="018">018</option>
                                    <option value="019">019</option>
                                </select>
                                <input type="text" className="form-control mt-1" id="telNo2" value={telNo2} onChange={fnSetTelNo} maxLength="4" onInput={fnTelNoValidation} required/>
                                <input type="text" className="form-control mt-1" id="telNo3" value={telNo3} onChange={fnSetTelNo} maxLength="4" onInput={fnTelNoValidation} required/>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label>개인 정보 수집 및 이용 동의</label>
                            <textarea className="form-control mt-1" placeholder={policyPhrase} style={{ height: '200px', overflowY: 'scroll', resize: 'none' }} readOnly={true}/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="agreeCheck" />
                            <label className="form-check-label">개인정보 수집 및 이용에 동의합니다.</label>
                        </div>
                        
                        <button type="submit" className="btn btn-dark mt-3">작성</button>
                    </form>
                </div>
            </PC>

            <Mobile>
                <div className='justify-content-center mt-5'>
                    <div className='mt-5'>
                        <p className='h1'>관심 고객 등록</p>
                    </div>
                    <form className='mt-5' ref={form} style={{ maxWidth: '75%', width: '100%', margin: '0 auto', textAlign: 'left'}} onSubmit={fnSendEmail}>
                        <input type="hidden" className='text-center' name="site_name" value={`분양완판`}></input>
                        <input type="hidden" className='text-center' name="date" value={`${formattedDate}`}></input>
                        <div className="form-group mb-3">
                            <label className='text-start'>이름</label>
                            <input type="text" className="form-control mt-1" name="customer_name" placeholder="" onChange={fnSetCustomerName} required/>
                        </div>
                        <div className="form-group mb-3">
                            <label>연락처</label>
                            <div className="d-flex align-items-center gap-2 mt-1" style={{width: "100%"}}>
                                <input type="hidden" className="mt-1" name="customer_telNo" value={`${telNo1}-${telNo2}-${telNo3}`}/>
                                <select className="form-control mt-1" id="telNo1" value={telNo1} onChange={fnSetTelNo} required>
                                    <option value="">선택</option>
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="018">018</option>
                                    <option value="019">019</option>
                                </select>
                                <input type="text" className="form-control mt-1" id="telNo2" value={telNo2} onChange={fnSetTelNo} maxLength="4" onInput={fnTelNoValidation} required/>
                                <input type="text" className="form-control mt-1" id="telNo3" value={telNo3} onChange={fnSetTelNo} maxLength="4" onInput={fnTelNoValidation} required/>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label>개인 정보 수집 및 이용 동의</label>
                            <textarea className="form-control mt-1" placeholder={policyPhrase} style={{ height: '200px', overflowY: 'scroll', resize: 'none' }} readOnly={true}/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="agreeCheck" />
                            <label className="form-check-label">개인정보 수집 및 이용에 동의합니다.</label>
                        </div>
                        
                        <button type="submit" className="btn btn-dark mt-3">작성</button>
                    </form>
                    <div style={{height: '150px'}}/>
                </div>
            </Mobile>

            <ActionButton />
        </div>
    );
}

export default RegistForm;
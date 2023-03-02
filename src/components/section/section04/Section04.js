import styled from './section.module.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import Checkbox from '../../common/Checkbox/Checkbox';
import React from 'react';
import usePopup from '../../../hooks/usePopup';
import AlertTemplate from '../../common/Alert/template/AlertTemplate';
import AlertPrivate from '../../common/Alert/template/AlertPrivate';

export default function Section04() {
  const { openPopup } = usePopup();
  const [form, setForm] = React.useState({
    phone: '',
    certification: '',
    privateCheck: false,
    up9Check: false,
    aceprojectCheck: false
  });
  const allCheck = React.useMemo(() => {
    return form.privateCheck && form.up9Check && form.aceprojectCheck
  }, [form]);
  const [phoneCheck, setPhoneCheck] = React.useState(false);

  const changePhone = (e) => {
    const { value } = e.target;

    setForm({
      ...form,
      phone: value.replace(/[\D]/, '').substring(0, 8)
    });
  };

  const changeCertification = (e) => {
    const { value } = e.target;

    setForm({
      ...form,
      certification: value.replace(/^[\D]$/, '')
    });
  };

  const clickButton = () => {
    if (!form.phone.match(/^[\d]{7,8}$/)) {
      openPopup(<AlertTemplate>휴대폰 번호를 다시 한 번 확인해주세요.</AlertTemplate>);
      return;
    }

    if (!form.privateCheck || !form.up9Check) {
      openPopup(<AlertTemplate>필수 동의 항목에 모두 동의해주세요.</AlertTemplate>);
      return;
    }

    /* 이미 완료된 번호인 경우 */
    if (false) {
      openPopup(<AlertTemplate><p className={styled.compelete}>사전등록을 완료한</p><br />휴대폰 번호입니다.</AlertTemplate>);
      return;
    }

    setPhoneCheck(true);
  }

  const handleChanceCheck = (e) => {
    const { checked, name } = e.target;
    setForm({
      ...form,
      [name]: checked
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.phoneCheck) {
      openPopup(<AlertTemplate>인증을 완료해주시기 바랍니다.</AlertTemplate>);
      return;
    }

    /* 잘못 된 번호 입력시 */
    if (false) {
      openPopup(<AlertTemplate>잘못된 인증 번호입니다.</AlertTemplate>);
      return;
    }

    /* 유효 기간 */
    if (false) {
      openPopup(<AlertTemplate>유효 기간이 만료되었습니다.<br/>다시 요청해주세요.</AlertTemplate>);
      return;
    }

    openPopup(<AlertTemplate>휴대폰 사전등록을 완료하였습니다.<br />9UP 프로야구를 기대해주세요!</AlertTemplate>);
  }

  const openDetail = () => {
    openPopup(<AlertPrivate />)
  }

  const checkAll = () => {
    const check = !allCheck;
    setForm({
      ...form,
      up9Check: check,
      aceprojectCheck: check,
      privateCheck: check
    })
  };

  return (
    <section className={styled.section}>
      <div>
        <form>
          <div className={styled.input}>
            <Input placeholder="숫자만 입력해주세요" label='010-' onChange={changePhone} value={form.phone}
              button={<Button width={250} onClick={clickButton}>인증번호 받기</Button>} disabled={phoneCheck}/>
            <Input placeholder="인증번호를 입력해주세요" onChange={changeCertification} value={form.certification} />
          </div>
          <div className={styled.check}>
            <div className={styled.all}>
              <Checkbox value={allCheck} onChange={checkAll}><span className={styled.check_span}>아래 내용을 모두 확인했으며, 모두 동의합니다</span></Checkbox>
            </div>
            <div className={styled.subcheck}>
              <div>
                <Checkbox value={form.privateCheck} onChange={handleChanceCheck} name="privateCheck">
                  <span className={styled.check_span}>(필수) 개인정보 수집 및 이용 동의<a onClick={openDetail}>자세히보기</a></span>
                </Checkbox>
              </div>
              <div>
                <Checkbox value={form.up9Check} onChange={handleChanceCheck} name="up9Check">
                  <span className={styled.check_span}>(필수) 9UP 프로야구 정보 수신 동의</span>
                  </Checkbox>
                </div>
              <div>
                <Checkbox value={form.aceprojectCheck} onChange={handleChanceCheck} name="aceprojectCheck">
                  <span className={styled.check_span}>(선택) 에이스프로젝트 게임 관련 정보 수신 동의</span>
                  </Checkbox>
                </div>
            </div>
          </div>
          <div className={styled.button}>
            <Button onClick={handleSubmit} border>사전 등록</Button>
          </div>
        </form>
      </div>
    </section>
  )
}
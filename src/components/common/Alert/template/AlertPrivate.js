import styled from './alert.template.module.css'

export default function AlertPrivate() {
  return (
    <div className={styled.alert}>
      <h1>개인정보 수집 및 이용</h1>
      <h2>에이스프로젝트는 이벤트 진행을 위해 다음과 같이 개인정보를 수집합니다.</h2>
      <ul>
        <li>개인정보 수집 및 이용목적 : 게임 관련 소식 안내 및 이벤트 참여</li>
        <li>수집하는 개인정보 항목 : 휴대폰 번호</li>
        <li>개인정보 보유 및 이용 기간 : 사전등록 보상 발송 완료 후 1년</li>
      </ul>
      <p>수집된 개인정보는 동의 기간 도래 시 즉시 파기됩니다.<br />개인정보 수집 동의에 대해 거부하실 수 있으며, 거부시 이벤트에 참여하실 수 없습니다.</p>
    </div>
  );
}
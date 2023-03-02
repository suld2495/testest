import styled from './alert.template.module.css'

export default function AlertTemplate({ children }) {
  return (
    <div className={styled.alert}>
      <p className={styled.template}>{children}</p>
    </div>
  );
}
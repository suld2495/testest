import useBackgrund from '../../../hooks/useBackground';
import styled from './section.module.css';

export default function Section01() {
  const [height, backgroundImage] = useBackgrund('1681px', {
    pc: 'url(/images/bg05.jpg)',
    mobile: 'url(/images/mobile/bg05_m.jpg)',
    mobileHeight: 1131
  });

  return (
    <section className={styled.section}>
      <div className={styled.background} style={{ backgroundImage, height }}></div>
      <div className={styled.text}>
        <div className={styled.title}>
          <img src="/images/title04.png" alt='EVENT2' />
        </div>
      </div>
    </section>
  )
}
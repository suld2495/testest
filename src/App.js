import React from 'react';
import Alert from './components/common/Alert/Alert';
import AlertTemplate from './components/common/Alert/template/AlertTemplate';
import Header from './components/layout/Header';
import Section01 from './components/section/section01/Section01';
import Section02 from './components/section/section02/Section02';
import Section03 from './components/section/section03/Section03';
import Section04 from './components/section/section04/Section04';
import Section05 from './components/section/section05/Section05';
import Section06 from './components/section/section06/Section06';
import Section07 from './components/section/section07/Section07';

const initialValue = {
  popup: false,
  setPopupContent: () => {},
  popupContent: () => {},
  changePopup: () => {}
}

export const Context = React.createContext(initialValue);

function App() {
  const link = '링크';
  const [popup, setPopup] = React.useState(false);
  const [popupContent, setPopupContent] = React.useState();

  const changePopup = (value) => {
    setPopup(value);
  }

  const clickLink = () => {
    setPopup(true);
    setPopupContent(<AlertTemplate>복사되었습니다.<br /> 원하는 곳에 붙여넣기 해 주세요.</AlertTemplate>);
    navigator.clipboard.writeText('링크');
  };

  return (
    <Context.Provider value={{
      popup,
      changePopup,
      setPopupContent
    }}>
      <div className="App">
        <Header />
        <main>
          <Section01 />
          <Section02 />
          <Section03 />
          <Section04 />
          <Section05 />
          <Section06 />
          <Section07 />
          <Alert>{popupContent}</Alert>
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;

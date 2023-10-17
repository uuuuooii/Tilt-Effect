import { useState } from 'react';
import * as S from './style';

function App() {
  const [isLightActive, setIsLightActive] = useState(false);
  const [rotateValues, setRotateValues] = useState({ x: 0, y: 0 });
  const [lightPosition, setLightPosition] = useState({ top: 0, left: 0 });

  // 마우스가 카드 위에 움직일 때 실행됨
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    // getBoundingClientRect는 DOM요소의 현재 위치 및 크기에 대한 정보를 제공하는 메서드
    const cardRect = card.getBoundingClientRect();

    // e.clientX - cardRect.left이렇게 계산하는 이유는 e.clientX가 브라우저의 X측과 카드 위치 cardRect.left을 뺴면
    // 카드에서 현재 위치를 정확하게 알 수 있음
    // cardRect.width / 2 는 카드 요소의 가로 길이의 반 즉 카드의 중심을 알 수 있음
    const x = e.clientX - cardRect.left - cardRect.width / 2;
    const y = e.clientY - cardRect.top - cardRect.height / 2;

    console.log(`e.clientX:${e.clientX}`);
    console.log(`cardRect.left: ${cardRect.left}`);
    console.log(`cardRect.width: ${cardRect.width / 2}`);
    console.log(e.clientX - cardRect.left - cardRect.width / 2);

    const left = e.clientX - cardRect.left;
    const top = e.clientY - cardRect.top;

    // 회전 강도
    const intensityX = 10;
    const intensityY = 10;

    const convertX = (x * intensityX) / (cardRect.width / 2);
    const convertY = (y * intensityY) / (cardRect.height / 2);
    console.log(convertX, convertY);
    setIsLightActive(true);
    if (isLightActive) {
      setRotateValues({ x: convertY, y: convertX * -1 });
      setLightPosition({ top, left });
    }
  };
  const handleMouseLeave = () => {
    setIsLightActive(false);
    setRotateValues({ x: 0, y: 0 });
  };

  return (
    <S.Container>
      <S.Card
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        rotateX={rotateValues.x}
        rotateY={rotateValues.y}
      >
        <S.Light
          isActive={isLightActive}
          top={lightPosition.top}
          left={lightPosition.left}
        />
      </S.Card>
    </S.Container>
  );
}

export default App;

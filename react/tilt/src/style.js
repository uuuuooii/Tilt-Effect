import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* padding: 3em 1em; */
  background: #333;
  perspective: 500px;
`;

export const Card = styled.div`
  position: relative;
  width: 15rem;
  height: 18rem;
  padding: 2rem;
  background: gray;
  transform-style: preserve-3d;
  transform: 0.1s;
  transition: transform 0.3s ease;
  overflow: hidden;
  transform: ${(props) =>
    `rotateY(${props.rotateY}deg) rotateX(${props.rotateX}deg)`};
`;

export const Light = styled.span`
  position: absolute;
  left: ${(props) => props.left + 'px'};
  top: ${(props) => props.top + 'px'};
  width: ${(props) => (props.isActive ? '100%' : '0')};
  height: ${(props) => (props.isActive ? '100%' : '0')};
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.4s, height 0.4s;
  pointer-events: none;
  z-index: 0;
  box-shadow: 0 0 2rem rgba(255, 255, 255, 0.2);
  filter: blur(2rem);
`;

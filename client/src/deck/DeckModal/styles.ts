import styled from 'styled-components';

interface IProps {
  active: boolean;
};

export const ModalWrapper = styled.div<IProps>`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.active ? "1" : "0"};
  pointer-events: ${props => props.active ? "all" : "none"};
  transition: 0.5s;
`;

export const ModalVisual = styled.div<IProps>`
  width: 300px;
  height: 300px;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  transition: 0.4s all;
  transform: ${props => props.active ? "scale(1)" : "scale(0.5)"};
`;

// .container__content {
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
// }

// .title {
//   width: 100%;
//   text-align: center;


// .answer {
//   margin-top: 20px;
//   width: 100%;
//   height: 100%;
//   text-align: center;
//   color: hsla(0,0%,0%,0);
//   text-shadow: rgb(0, 0, 0) 0 0 15px;
//   transition: text-shadow 0.2s cubic-bezier(0, 1, 0, 0);
// }

// :hover.answer {
//   text-shadow: rgb(0, 0, 0) 0 0;
//   transition: text-shadow 0.2s cubic-bezier(0, 0.1, 0, 0);
// }

// .modal.active {
//   opacity: 1;
//   pointer-events: all;
// }

// .modal__visual.active {
//   transform: scale(1);
// }
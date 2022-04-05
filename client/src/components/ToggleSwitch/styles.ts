import styled from 'styled-components';

export const Topic = styled.span`
  
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 40px;
  height: 14px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 400ms all;
  &:before {
    transition: 400ms all;
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 35px;
    top: 50%;
    left: 2px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;
  &:checked + ${Switch} {
    background: green;
    &:before {
      transform: translate(26px, -50%);
    }
  }
`;
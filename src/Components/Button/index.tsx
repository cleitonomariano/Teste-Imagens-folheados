import styled from 'styled-components';
import { shade } from 'polished';

const Button = styled.button`
  width: 25%;
  height: 30px;
  border: 1px solid #008396;
  background: #008396;
  color: #fff;
  border-radius: 5px;
  outline: none;
  transition: 0.5s;
  &:hover {
    background: ${shade(0.3, '#008396')};
  }
`;
export default Button;

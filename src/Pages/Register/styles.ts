import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #008396;
`;
export const Content = styled.div`
  text-align: left;
  background: #ebebeb;
  padding: 10px;
  margin-top: 30px;
  border-radius: 5px;
  border: 1px solid #008396;

  .buttonDiv {
    margin-top: 10px;
    display: flex;
    gap: 8px;
    .cancelar {
      background: ${shade(0.3, '#008396')};
      color: #fff;
      border: 1px solid #970808;
      &:hover {
        background: #008396;
        color: red;
      }
    }
  }
`;

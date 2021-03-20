import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 94%;
  background: #fff;
  padding: 10px;
  padding-top: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Content = styled.div`
  width: 60%;
  height: 100%;
  background: #ebebeb;
  padding: 10px;
  margin-top: 30px;
  border-radius: 5px;
  border: 1px solid #008396;
  form {
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px;
    gap: 2px;
    font-size: 12px;
    text-align: left;
    overflow: hidden;
  }
  .buttonDiv {
    display: flex;
    gap: 8px;
    .cancelar {
      background: ${shade(0.3, '#008396')};
      color: #fff;
      border: 1px solid #970808;
      &:hover {
        background: #008396;
      }
    }
  }
`;

import styled, { css } from 'styled-components';

interface FieldProps {
  isErrored?: boolean;
}
export const FieldContainer = styled.div``;

export const FieldElement = styled.input<FieldProps>`
  border: 1px solid #339bab;
  background: #ffffff;
  border-radius: 4px;
  padding: 5px;
  height: 25px;
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
      background: #ffcbdb;
    `}
`;

export const FieldLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

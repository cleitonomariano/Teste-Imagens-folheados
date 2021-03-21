import React, { InputHTMLAttributes } from 'react';
import { FieldElement, FieldContainer, FieldLabel } from './styles';

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
}

const Field: React.FC<FieldProps> = ({ label, ...rest }) => (
  <FieldContainer>
    <FieldLabel htmlFor={rest.name}>{label}</FieldLabel>
    <FieldElement {...rest} id={rest.name} />
  </FieldContainer>
);
export default Field;

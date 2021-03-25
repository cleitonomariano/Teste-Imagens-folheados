import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
// import { FiAlertCircle } from 'react-icons/fi';
import { FieldElement, FieldContainer, FieldLabel } from './styles';

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
}

const Field: React.FC<FieldProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <FieldContainer>
      <FieldLabel>{label}</FieldLabel>
      <FieldElement
        isErrored={!!error}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && <span />}
    </FieldContainer>
  );
};
export default Field;

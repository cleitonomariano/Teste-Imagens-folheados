import React from 'react';
import { GridElement } from './styles';

interface GridProps {
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children, ...rest }) => (
  <GridElement {...rest}>{children}</GridElement>
);
export default Grid;

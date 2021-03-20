/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { Container, Content } from './styles';

const Register: React.FC = () => (
  <>
    <Container>
      <h3>Cadastrar produtos</h3>

      <Content>
        <form>
          <label>Código de barra</label>
          <input type="text" />
          <label>Nome</label>
          <input type="text" />
          <label>Descrição</label>
          <input type="text" />
          <label>Estoque min</label>
          <input type="number" />
          <label>Estoque max</label>
          <input type="number" />
          <label>Custo</label>
          <input type="number" />
          <label>valor de venda</label>
          <input type="number" />
          <button type="submit">Cadastrar</button>
          <button type="submit">Cancelar</button>
        </form>
      </Content>
    </Container>
  </>
);
export default Register;

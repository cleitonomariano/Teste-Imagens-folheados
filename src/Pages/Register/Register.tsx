/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Field from '../../Components/Field';
import { Container, Content } from './styles';
import Button from '../../Components/Button';
import Grid from '../../Components/Grid';

const Register: React.FC = () => (
  <>
    <Container>
      <h3>Cadastrar produtos</h3>
      <Content>
        <form>
          <Grid>
            <Field label="Código de barra" name="barcode" type="text" />
            <Field label="Nome" name="name" type="text" />
            <Field
              label="Descrição"
              className="descriptionField"
              name="description"
              type="text"
            />
            <Field label="Estoque min" name="inventoryMin" type="number" />
            <Field label="Estoque max" name="inventoryMax" type="number" />
            <Field label="Custo" name="cost" type="number" />
            <Field label="valor de venda" name="salePrice" type="number" />
          </Grid>
          <div className="buttonDiv">
            <Button className="cancelar" type="submit">
              Cancelar
            </Button>
            <Button type="submit">Cadastrar</Button>
          </div>
        </form>
      </Content>
    </Container>
  </>
);
export default Register;

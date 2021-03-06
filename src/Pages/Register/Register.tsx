/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import Field from '../../Components/Field';
import { Container, Content } from './styles';
import Button from '../../Components/Button';
import Grid from '../../Components/Grid';
import getValidationErrors from '../../Utils/getValidationErrors';
import api from '../../Services/api';

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  console.log(formRef);
  const handleSubmit = useCallback(async (data: Record<string, any>) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        barcode: Yup.number()
          .required('valor obrigatório')
          .typeError('Campo obrigatório'),
        description: Yup.string().required('Campo obrigatório'),
        inventoryMin: Yup.number().positive().typeError('Campo obrigatório'),
        inventoryMax: Yup.number().positive().typeError('Campo obrigatório'),
        cost: Yup.number().required().positive().typeError('Campo obrigatório'),
        salePrice: Yup.number().required().typeError('valor obrigatório'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      await api.post('/produto', data);
    } catch (err) {
      const erros = getValidationErrors(err);
      formRef.current?.setErrors(erros);
    }
  }, []);

  return (
    <>
      <Container>
        <h3>Cadastrar produtos</h3>
        <Content>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            initialData={{ inventoryMin: 1, inventoryMax: 10000 }}
          >
            <Grid>
              <Field
                label="Código de barra"
                name="barcode"
                type="text"
                placeholder="Digite o código de barras"
              />
              <Field
                label="Nome"
                name="name"
                type="text"
                placeholder="Digite o nome do produto"
              />
              <Field
                label="Descrição"
                name="description"
                type="text"
                placeholder="Descrição do produto"
              />
              <Field
                label="Estoque min"
                name="inventoryMin"
                type="number"
                placeholder="Inventório mínimo"
              />
              <Field
                label="Estoque max"
                name="inventoryMax"
                type="number"
                placeholder="Invetório máximo"
              />
              <Field
                label="Custo"
                name="cost"
                type="number"
                placeholder="Valor de custo"
              />
              <Field
                label="Valor de venda"
                name="salePrice"
                type="number"
                placeholder="Valor de venda"
              />
            </Grid>
            <div className="buttonDiv">
              <Button className="cancelar" type="submit">
                Cancelar
              </Button>
              <Button type="submit">Cadastrar</Button>
            </div>
          </Form>
        </Content>
      </Container>
    </>
  );
};
export default Register;

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Formik } from 'formik';
import * as Yup from 'yup';
import axios, { AxiosError } from 'axios';

import { FormContainer, Input, Label, ErrorMsg } from '../RegisterForm/styles';
import Button from '../Button/Button';
import { ButtonGroup, Formulary } from './styles';

import type { EditFormValues } from '../../types/Forms';
import type { UpdateUserPayload } from '../../types/UserPayloads';
import type { BackendError } from '../../types/BackendError';

const EditSchema = Yup.object().shape({
  nome: Yup.string().required('Nome obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  senha: Yup.string().min(6, 'Senha deve ter ao menos 6 caracteres')
});

function EditForm() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<EditFormValues>({
    nome: '',
    email: '',
    senha: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get<UpdateUserPayload>(
          `http://localhost:8080/api/users/${userId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setInitialValues({
          nome: response.data.nome,
          email: response.data.email,
          senha: ''
        });
      } catch (err) {
        const error = err as AxiosError<BackendError>;
        alert(
          'Erro ao buscar usuário: ' +
            (error.response?.data?.message || error.message)
        );
      }
    };
    fetchUser();
  }, [userId]);

  const handleSubmit = async (values: EditFormValues) => {
    try {
      const token = localStorage.getItem('token');

      const payload: UpdateUserPayload = {
        nome: values.nome,
        email: values.email
      };
      if (values.senha && values.senha.trim() !== '') {
        payload.senha = values.senha;
      }

      await axios.put(`http://localhost:8080/api/users/${userId}`, payload, {
        headers: { Authorization: `Bearer ${token}` }
      });

      navigate('/AllUsersList');
    } catch (err) {
      const error = err as AxiosError<BackendError>;
      alert(
        'Erro ao atualizar usuário: ' +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <FormContainer className="mainContainer">
      <h1>Editar Usuário</h1>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={EditSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Formulary>
            <Label htmlFor="nome">Nome:</Label>
            <Input as={Input} name="nome" />
            <ErrorMsg name="nome" component="div" />

            <Label htmlFor="email">E-mail:</Label>
            <Input as={Input} name="email" />
            <ErrorMsg name="email" component="div" />

            <Label htmlFor="senha">Senha (opcional):</Label>
            <Input
              as={Input}
              type="password"
              name="senha"
              placeholder="Deixe vazio para não alterar"
            />
            <ErrorMsg name="senha" component="div" />

            <ButtonGroup>
              <Button type="submit" buttonText="Salvar" variant="save" />
              <Button
                buttonText="Cancelar"
                variant="cancel"
                onClick={() => navigate('/AllUsersList')}
              />
            </ButtonGroup>
          </Formulary>
        )}
      </Formik>
    </FormContainer>
  );
}

export default EditForm;

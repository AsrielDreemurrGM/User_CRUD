import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
  ErrorMsg,
  FormContainer,
  Formulary,
  Input,
  Label,
  RegisterButton
} from './styles';
import { useNavigate } from 'react-router-dom';

const RegisterSchema = Yup.object().shape({
  nome: Yup.string().required('Nome obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  senha: Yup.string()
    .min(6, 'Senha deve ter ao menos 6 caracteres')
    .required('Senha obrigatória')
});

function RegisterForm() {
  const navigate = useNavigate();

  const handleSubmit = async (values: {
    nome: string;
    email: string;
    senha: string;
  }) => {
    try {
      await axios.post('http://localhost:8080/api/users', values);
      navigate('/AllUsersList');
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erro ao cadastrar usuário');
      console.error(error);
    }
  };

  return (
    <FormContainer className="mainContainer">
      <h1>Cadastrar Usuário</h1>
      <Formik
        initialValues={{ nome: '', email: '', senha: '' }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Formulary>
            <Label htmlFor="nome">Nome:</Label>
            <Input
              as={Input}
              name="nome"
              placeholder="Digite o nome do usuário"
            />
            <ErrorMsg name="nome" component="div" />

            <Label htmlFor="email">E-mail:</Label>
            <Input
              as={Input}
              name="email"
              placeholder="Digite o e-mail do usuário"
            />
            <ErrorMsg name="email" component="div" />

            <Label htmlFor="senha">Senha:</Label>
            <Input
              as={Input}
              type="password"
              name="senha"
              placeholder="Digite a senha do usuário"
            />
            <ErrorMsg name="senha" component="div" />

            <RegisterButton type="submit">Cadastrar</RegisterButton>
          </Formulary>
        )}
      </Formik>
    </FormContainer>
  );
}

export default RegisterForm;

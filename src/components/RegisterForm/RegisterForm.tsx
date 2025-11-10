import { Form, FormContainer, Input, Label, RegisterButton } from './styles';

function RegisterForm() {
  return (
    <FormContainer className="mainContainer">
      <h1>Cadastrar Usuário</h1>
      <Form>
        <Label htmlFor="name">Nome: </Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o nome do usuário"
        />
        <Label htmlFor="email">E-mail: </Label>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Digite o e-mail do usuário"
        />
        <Label htmlFor="password">Senha: </Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Digite a senha do usuário"
        />
        <RegisterButton type="button">Cadastrar</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default RegisterForm;

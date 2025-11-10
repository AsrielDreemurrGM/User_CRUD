import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Form, FormContainer, Input, Label } from '../RegisterForm/styles';
import Button from '../Button/Button';
import { ButtonGroup } from './styles';

function EditForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = useParams();

  const userData = location.state || null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name,
        email: userData.email,
        password: userData.password
      });
    } else {
      console.log('Fetching user from API by ID:', userId);
    }
  }, [userData, userId]);

  function handleCancel() {
    navigate('/AllUsersList');
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    console.log('User updated:', formData);
  }

  return (
    <FormContainer className="mainContainer">
      <h1>Editar Usuário</h1>
      <Form onSubmit={handleSave}>
        <Label htmlFor="name">Nome: </Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />

        <Label htmlFor="email">E-mail: </Label>
        <Input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Label htmlFor="password">Senha: </Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />

        <ButtonGroup>
          <Button buttonText="Salvar" variant="save" type="submit" />
          <Button
            buttonText="Cancelar"
            variant="cancel"
            onClick={handleCancel}
          />
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
}

export default EditForm;

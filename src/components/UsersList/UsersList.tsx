import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  ListContainer,
  UserCard,
  InfoColumn,
  ButtonColumn,
  InputGroup,
  Label,
  ReadOnlyInput,
  EmptyStateContainer
} from './styles';
import Button from '../Button/Button';
import NavLinkButton from '../NavLinkButton/NavLinkButton';

interface User {
  id: number;
  nome: string;
  email: string;
}

function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/users', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(response.data);
      } catch (error) {
        alert('Erro ao buscar usuários: ' + error);
      }
    };
    fetchUsers();
  }, []);

  const handleEdit = (user: User) =>
    navigate(`/EditUser/${user.id}`, { state: user });

  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (error) {
      alert('Erro ao deletar usuário: ' + error);
    }
  };

  return (
    <ListContainer className="mainContainer">
      <h1>Lista De Usuários</h1>
      {users.length ? (
        users.map((user) => {
          const starsCount = Math.floor(Math.random() * (20 - 6 + 1)) + 6;
          const maskedPassword = '*'.repeat(starsCount);

          return (
            <UserCard key={user.id}>
              <InfoColumn>
                <InputGroup>
                  <Label>Nome:</Label>
                  <ReadOnlyInput type="text" value={user.nome} readOnly />
                </InputGroup>
                <InputGroup>
                  <Label>E-mail:</Label>
                  <ReadOnlyInput type="text" value={user.email} readOnly />
                </InputGroup>
                <InputGroup>
                  <Label>Senha:</Label>
                  <ReadOnlyInput
                    type="password"
                    value={maskedPassword}
                    readOnly
                    disabled
                  />
                </InputGroup>
              </InfoColumn>
              <ButtonColumn>
                <Button
                  buttonText="Editar"
                  variant="edit"
                  onClick={() => handleEdit(user)}
                />
                <Button
                  buttonText="Excluir"
                  variant="delete"
                  onClick={() => handleDelete(user.id)}
                />
              </ButtonColumn>
            </UserCard>
          );
        })
      ) : (
        <EmptyStateContainer>
          <p>Nenhum usuário cadastrado.</p>
          <NavLinkButton to="/" buttonText="Cadastrar Novo Usuário" />
        </EmptyStateContainer>
      )}
    </ListContainer>
  );
}

export default UsersList;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ListContainer,
  UserCard,
  InfoColumn,
  ButtonColumn,
  ReadOnlyInput,
  InputGroup,
  Label,
  EmptyStateContainer
} from './styles';
import Button from '../Button/Button';
import NavLinkButton from '../NavLinkButton/NavLinkButton';

function UsersList() {
  const users = [
    {
      id: 1,
      name: 'Eduardo Augusto',
      email: 'eduardo@example.com',
      password: 'senha123'
    },
    {
      id: 2,
      name: 'Maria Souza',
      email: 'maria@example.com',
      password: 'segredo456'
    }
  ];

  const [visiblePasswords, setVisiblePasswords] = useState<
    Record<number, boolean>
  >({});
  const navigate = useNavigate();

  function togglePasswordVisibility(id: number) {
    setVisiblePasswords((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleEdit(user: any) {
    // I'll create a proper type when the backend is ready
    navigate(`/EditUser/${user.id}`, { state: user });
  }

  function handleDelete(userId: number) {
    console.log(`Deleted user with ID: ${userId}`);
  }

  return (
    <ListContainer className="mainContainer">
      <h1>Lista De Usuários</h1>

      {users.length > 0 ? (
        users.map((user) => {
          const isVisible = visiblePasswords[user.id];
          return (
            <UserCard key={user.id}>
              <InfoColumn>
                <InputGroup>
                  <Label htmlFor={`name-${user.id}`}>Nome:</Label>
                  <ReadOnlyInput
                    id={`name-${user.id}`}
                    type="text"
                    value={user.name}
                    readOnly
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor={`email-${user.id}`}>E-mail:</Label>
                  <ReadOnlyInput
                    id={`email-${user.id}`}
                    type="text"
                    value={user.email}
                    readOnly
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor={`password-${user.id}`}>Senha:</Label>
                  <ReadOnlyInput
                    id={`password-${user.id}`}
                    type={isVisible ? 'text' : 'password'}
                    value={user.password}
                    readOnly
                    onClick={() => togglePasswordVisibility(user.id)}
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

import { useState } from 'react';
import {
  ListContainer,
  UserCard,
  InfoColumn,
  ButtonColumn,
  ActionButton,
  ReadOnlyInput,
  InputGroup,
  Label,
  EmptyStateContainer,
  StyledNavLink
} from './styles';

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

  function togglePasswordVisibility(id: number) {
    setVisiblePasswords((prev) => ({ ...prev, [id]: !prev[id] }));
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
                <ActionButton type="button" $variant="edit">
                  Editar
                </ActionButton>
                <ActionButton type="button" $variant="delete">
                  Excluir
                </ActionButton>
              </ButtonColumn>
            </UserCard>
          );
        })
      ) : (
        <EmptyStateContainer>
          <p>Nenhum usuário cadastrado.</p>
          <StyledNavLink to="/">Cadastrar Novo Usuário</StyledNavLink>
        </EmptyStateContainer>
      )}
    </ListContainer>
  );
}

export default UsersList;

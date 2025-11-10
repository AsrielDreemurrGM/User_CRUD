import { HeaderContainer, NavList, ToggleNav } from './styles';
import { Breakpoints } from '../../styles/main';
import { NavLink } from 'react-router-dom';

import TitleImage from '../../assets/images/Title.png';
import TitleImageSmall from '../../assets/images/TitleSmall.png';

function Header() {
  function toggleNav() {
    document.querySelector('ul')?.classList.toggle('hidden');
    const span = document.querySelector('span');

    if (span?.textContent === '↓') {
      document.querySelector('span')!.textContent = '→';
      setTimeout(() => {
        document.querySelector('span')!.textContent = '↑';
      }, 100);
    } else {
      setTimeout(() => {
        document.querySelector('span')!.textContent = '↓';
      }, 100);
      document.querySelector('span')!.textContent = '←';
    }
  }

  return (
    <>
      <HeaderContainer>
        <picture>
          <source
            srcSet={TitleImageSmall}
            media={`(max-width: ${Breakpoints.mobile})`}
          />
          <img src={TitleImage} alt="Sistema De Gerenciamento De Usuários" />
        </picture>
        <NavList>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'highlighted' : '')}
            >
              Cadastrar Usuário
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AllUsersList"
              className={({ isActive }) => (isActive ? 'highlighted' : '')}
            >
              Ver Lista De Usuários
            </NavLink>
          </li>
        </NavList>
        <ToggleNav onClick={toggleNav}>
          <span>↑</span>
        </ToggleNav>
      </HeaderContainer>
    </>
  );
}

export default Header;

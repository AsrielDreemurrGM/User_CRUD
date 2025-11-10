import { HeaderContainer, NavList, ToggleNav } from './styles';
import { Breakpoints } from '../../styles/main';

import TitleImage from '../../assets/images/Title.png';
import TitleImageSmall from '../../assets/images/TitleSmall.png';
import NavLinkButton from '../NavLinkButton/NavLinkButton';

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
          <NavLinkButton to="/" buttonText="Cadastrar Usuário" end />
        </li>
        <li>
          <NavLinkButton
            to="/AllUsersList"
            buttonText="Ver Lista De Usuários"
          />
        </li>
      </NavList>

      <ToggleNav onClick={toggleNav}>
        <span>↑</span>
      </ToggleNav>
    </HeaderContainer>
  );
}

export default Header;

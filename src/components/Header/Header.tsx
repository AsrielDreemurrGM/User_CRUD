import { HeaderContainer, NavList, ToggleNav } from './styles';

import TitleImage from '../../assets/images/Title.png';
import TitleImageSmall from '../../assets/images/TitleSmall.png';
import { Breakpoints } from '../../styles/main';

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
          <li>Cadastrar Usuário</li>
          <li>Ver Lista De Usuários</li>
        </NavList>
        <ToggleNav onClick={toggleNav}>
          <span>↑</span>
        </ToggleNav>
      </HeaderContainer>
    </>
  );
}

export default Header;

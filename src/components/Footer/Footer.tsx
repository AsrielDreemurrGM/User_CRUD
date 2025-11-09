import { FooterText } from './styles';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <FooterText>
        © EDUARDO AUGUSTO
        <br />
        (GitHub - AsrielDreemurrGM)
        <br />
        Todos os direitos reservados {currentYear}
      </FooterText>
    </footer>
  );
}

export default Footer;

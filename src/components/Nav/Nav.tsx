import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

function Nav() {
  return (
    <StyledNav>
      <StyledLogo href='/Home'>
        <Image src={'/Flogo-white.png'} alt={'logoimg'} width={40} height={40} />
      </StyledLogo>
      <StyledText href='/Home'>FLOG</StyledText>
    </StyledNav>
  );
}

export default Nav;

const StyledNav = styled.nav`
  width: 100%;
  height: 8%;
  display: flex;
  position: fixed;
  align-items: center;
  background-color: #5cc189;
`;

const StyledLogo = styled(Link)`
  display: flex;
  padding: 0.3rem;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const StyledText = styled(Link)`
  color: white;
  padding-top: 0.2rem;
  font-size: 1.5rem;
  font-weight: 550;
  text-decoration: none;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

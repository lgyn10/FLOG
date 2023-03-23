import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Prolog3() {
  const router = useRouter();

  const onHome = () => {
    router.push({
      pathname: '/Home',
    });
  };

  return (
    <>
      <StyledContainer>
        <StyledContent>
          <StyledCard>
            <StyledImgContent>
              <StyledOverlay/>
              <StyledCardImg>
                <Image src={'/FoodLog.jpeg'} alt={'foodlog'} width={250} height={180} style={{ borderRadius: 20 }} />
              </StyledCardImg>
            </StyledImgContent>
            <StyledCardContent>
              <StyledH2>FoodLog</StyledH2>
              <StyledP>Record your daily Food Routine!</StyledP>
              <StyledBtn onClick={onHome}>Start your FLOG</StyledBtn>
            </StyledCardContent>
          </StyledCard>
        </StyledContent>
      </StyledContainer>
    </>
  );
}

export default Prolog3;

const StyledContainer = styled.div`
  padding-top: 3rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContent = styled.div`
  margin: 0 2.5rem;
`;

const StyledCard = styled.div`
  width: 20rem;
  border-radius: 1.5rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledImgContent = styled.div`
  display: flex;
  position: relative;
  padding: 2.5rem;
  flex-direction: column;
  align-items: center;
  row-gap: 0.2rem;
`;

const StyledCardContent = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
`;

const StyledH2 = styled.h2`
  padding-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 550;
  color: #333;
`;

const StyledP = styled.p`
  padding-bottom: 1rem;
  font-size: 0.9rem;
  color: #707070;
  text-align: center;
`;

const StyledBtn = styled.button`
  margin: 10px;
  padding: 0.7rem 1rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 600;
  box-shadow: 0px 0px 14px -7px #5cc189;
  background-image: linear-gradient(45deg, #008000 0%, #05cd23 51%, #8dd701 100%);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const StyledOverlay = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 1.5rem 1.5rem 0 1.5rem;
  background-color: #5cc189;

  &::before,
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -2.5rem;
    height: 2.5rem;
    width: 2.5rem;
    background-color: #5cc189;
  }

  &::after {
    border-radius: 0 2.5rem 0 0;
    background-color: #fff;
  }
`;

const StyledCardImg = styled.div`
  position: relative;
  border-radius: 10%;
  background: #fff;
  padding: 0.5rem;
`;

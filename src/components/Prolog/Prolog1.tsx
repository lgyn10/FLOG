import styled from 'styled-components';
import Image from 'next/image';

function Prolog1() {
  return (
    <>
      <StyledContainer>
        <StyledContent>
          <StyledCard>
            <StyledImgContent>
              <StyledOverlay />
              <StyledCardImg>
                <Image src={'/food.jpeg'} alt={'freshfood'} width={250} height={180} style={{ borderRadius: 20 }} />
              </StyledCardImg>
            </StyledImgContent>
            <StyledCardContent>
              <StyledH2>Good Food</StyledH2>
              <StyledP>Fresh ingredients!</StyledP>
            </StyledCardContent>
          </StyledCard>
        </StyledContent>
      </StyledContainer>
    </>
  );
}

export default Prolog1;

const StyledContainer = styled.div`
  padding-top: 1rem;
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

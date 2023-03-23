
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Index() {
  const router = useRouter();

  const linkProlog = () => {
    router.push({
      pathname: '/Prolog',
    });
  };
  useEffect(() => {
  localStorage.removeItem('logintoken');
    setTimeout(linkProlog, 3000);
  }, []);

  return (

    <StyledIndexBox>
      <ImageBox>
        <Image src={'/Flogo-white.png'} alt={'logoimg'} width={170} height={170} />
        <br></br>
        <StyledText>FLOG</StyledText>
      </ImageBox>
    </StyledIndexBox>

  );
}

export default Index;

const StyledIndexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #5cc189;
  height: 100vh;
`;

const ImageBox = styled.div`
  margin: 10rem 0 0 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 9rem;
`;

const StyledText = styled.p`
  margin-left: 1.2rem;
  color: white;
  font-size: 3.3rem;
  font-weight: 550;
  letter-spacing: 0.2rem;
`;


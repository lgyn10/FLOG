import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
function UnderNav() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>();
  useEffect(() => {
    if (localStorage.getItem('logintoken') == null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [isLogin]);

  const onHome = () => {
    router.push({
      pathname: '/Home',
    });
  };

  const onMylog = () => {
    if (localStorage.getItem('logintoken') == null) {
      Swal.fire({ icon: 'error', title: 'Login, please', confirmButtonColor: '#5cc189' });
    } else {
      router.push({
        pathname: '/Mylog',
      });
    }
  };

  const onCalendar = () => {
    if (localStorage.getItem('logintoken') == null) {
      Swal.fire({ icon: 'error', title: 'Login, please', confirmButtonColor: '#5cc189' });
    } else {
      router.push({
        pathname: '/Mycalendar',
      });
    }
  };

  const onLog = () => {
    if (localStorage.getItem('logintoken') != null) {
      localStorage.removeItem('logintoken');
      setIsLogin(false);
    } else {
      router.push('/Login');
    }
  };

  return (
    <StyledNav>
      <UnderNavBox>
        <StyledIcon>
          <StyledImgBox>
            <Image src={'/home.png'} alt={'Home'} width={25} height={25} onClick={onHome} />
          </StyledImgBox>
          <StyledText>Home</StyledText>
        </StyledIcon>

        <StyledIcon>
          <StyledImgBox>
            <Image src={'/statistic.png'} alt={'MY LOG'} width={25} height={25} onClick={onMylog} />
          </StyledImgBox>
          <StyledText>My&nbsp;log</StyledText>
        </StyledIcon>

        <StyledIcon>
          <StyledImgBox>
            <Image src={'/calendar.png'} alt={'CALENDAR'} width={25} height={25} onClick={onCalendar} />
          </StyledImgBox>
          <StyledText>Calendar</StyledText>
        </StyledIcon>
        {isLogin ? (
          <StyledIcon>
            <StyledImgBox>
              <Image src={'/logout.png'} alt={'LOGOUT'} width={25} height={25} onClick={onLog} />
            </StyledImgBox>
            <StyledText>Logout</StyledText>
          </StyledIcon>
        ) : (
          <StyledIcon>
            <StyledImgBox>
              <Image src={'/login.png'} alt={'LOGIN'} width={25} height={25} onClick={onLog} />
            </StyledImgBox>
            <StyledText>Login</StyledText>
          </StyledIcon>
        )}
      </UnderNavBox>
    </StyledNav>
  );
}

export default UnderNav;

const UnderNavBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 45rem;
`;
const StyledNav = styled.nav`
  width: 100%;
  height: 8%;
  display: flex;
  background-color: #3e7a60;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
`;

const StyledIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImgBox = styled.div`
  display: flex;
`;

const StyledText = styled.div`
  margin-top: 0.2rem;
  color: white;
  text-align: center;
  font-size: 0.7rem;
  font-weight: 400;
`;

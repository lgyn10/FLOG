import Calendar from '@/components/Calendar/Calendar';
import Nav from '@/components/Nav/Nav';
import UnderNav from '@/components/Nav/UnderNav';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import styled from 'styled-components';
import { idState, toogleState } from '../store/store';
function Mycalendar() {
  const [isLogin, setIsLogin] = useState('');
  const [toogle, setToogle] = useRecoilState(toogleState);
  const globalToogle = useRecoilValue(toogleState);
  const globalId = useRecoilValue(idState);

  useEffect(() => {
    const isLoginLogic = () => {
      if (localStorage.getItem('logintoken') != null) {
        setIsLogin('로그인 O');
      } else {
        setIsLogin('로그인 X');
      }
    };
    isLoginLogic();
    // onClick(); // type에서 새로고침 시 문제 없음 | amount 일 때 새로고침 시 문제 발행
  }, []);

  const onClick = () => {
    if (globalToogle == 'TYPE') {
      setToogle('AMOUNT');
    } else if (globalToogle == 'AMOUNT') {
      setToogle('TYPE');
    }
  };

  return (
    <>
      <Nav />
      <MyPageBox>
        <StyledButton onClick={onClick}>{globalToogle}</StyledButton>
        <Calendar />
        <UnderNav />
      </MyPageBox>
    </>
  );
}

export default Mycalendar;
const StyledButton = styled.button`
  all: unset;
  text-align: center;
  border: 1px solid #efefef;
  padding: 0.1rem;
  margin: 0.5rem;
  border-radius: 20px;
  color: #4e4e4e;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
const IsLoginBox = styled.div`
  border: orange 2px solid;
`;
const MyPageBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8vh;
  height: 100%;
  width: 100%;
`;

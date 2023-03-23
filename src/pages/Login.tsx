import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useRecoilState, useRecoilValue } from 'recoil';
import { idState, memberIdState } from '../store/store';
function login() {
  const router = useRouter();

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [globalId, setGlobalId] = useRecoilState(idState);
  const [globalmemberId, setGlobalmemberId] = useRecoilState(memberIdState);
  const onChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    setGlobalId(e.target.value);
  };

  const onChangePw = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  // 로그인 버튼 로직
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('userId', id); // 사용자 아이디 로컬저장소에 저장
    const login = async () => {
      const response = await axios
        .post(`/api/login`, {
          userId: id,
          userPassword: password,
        })

        .then((response) => {
          setGlobalmemberId(response.data.memberId);
          localStorage.setItem('logintoken', response.data.accessToken);
          console.log('axios.post 성공 후');
          console.log('logintoken: ' + localStorage.getItem('logintoken'));
        });
    };
    // 로그인 버튼을 누르면
    login()
      // 로그인 성공 시 mypage로 이동
      .then(() => {
        router.push('/Home');
      })
      // 서버에 없는 로그인 정보로 인해 에러가 발생하면 alert!
      .catch(() => {
        swal('Please check your imformation!');
      });
  };
  return (
    <>
      <StyledContainer>
        <StyledLoginBox>
          <TitleBox>
            <LoginImg src='/Flogo-green.png'></LoginImg>
            <StyledTitle>FLOG</StyledTitle>
          </TitleBox>
          <StyledForm onSubmit={onSubmit}>
            <StyledCover>
              <StyledInputWrapper>
                <StyledInput type='text' placeholder='id' onChange={onChangeId} minLength={6} maxLength={20} required />
                <StyledInput type='password' placeholder='password' onChange={onChangePw} minLength={8} required />
              </StyledInputWrapper>
              {/* 메인페이지 이동*/}
              <StyledLoginBtn type='submit'>Login</StyledLoginBtn>
            </StyledCover>
          </StyledForm>
        </StyledLoginBox>

        {/* 회원가입 페이지 이동 */}
        <StyledButton onClick={() => router.push('./Join')}>
          <p>Create Account</p>
        </StyledButton>
      </StyledContainer>
    </>
  );
}

export default login;

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;
const StyledLoginBox = styled.div`
  width: 100%;
  max-width: 30rem;
  padding: 1rem;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  pointer-events: none;
`;
const LoginImg = styled.img`
  width: 3rem;
`;
const StyledTitle = styled.div`
  padding-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5cc189;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`;
const StyledForm = styled.form`
  width: 100%;

  display: flex;
  justify-content: center;
`;
const StyledCover = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledInputWrapper = styled.div`
  width: 70%;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledInput = styled.input`
  all: unset;
  width: 100%;
  background-color: #efefef;
  border-radius: 0.7rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  height: 2rem;
  padding-left: 0.5rem;
  &:focus,
  :hover {
    background-color: #fce8af;
    transition: all 0.3s;
  }
`;

const StyledLoginBtn = styled.button`
  width: 30%;
  border: 0rem;
  height: 5.4rem;
  transition: 0.3s;
  color: white;
  border-radius: 1rem;
  display: block;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  background-color: #14af9d;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
`;

const StyledButton = styled.button`
  all: unset;
  text-align: right;
  color: #4e4e4e;
  font-size: 0.7rem;
  &:hover {
    cursor: pointer;
  }
`;

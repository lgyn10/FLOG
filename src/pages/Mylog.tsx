import Nav from '@/components/Nav/Nav';
import styled from 'styled-components';
import UnderNav from '@/components/Nav/UnderNav';
import { idState, jsonState, memberIdState } from '@/store/store';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RecoilState } from 'recoil';
import type { ObjectEx } from '@/store/store';
function Mylog() {
  const TypeofEntoKo = new Map([
    ['HEALTH', 'HEALTH'],
    ['BALANCE', 'BALANCE'],
    ['INSTANT', 'INSTANT'],
  ]);

  const AmountEntoKo = new Map([
    ['LIGHT', 'LIGHT'],
    ['FITNESS', 'FITNESS'],
    ['OVEREATING', 'OVEREATING'],
  ]);

  axios.defaults.withCredentials = true;
  const [globalJson, setGlobalJson] = useRecoilState(jsonState);
  const globalId = useRecoilValue(idState);
  const currentDate = new Date();
  const curtMonth = currentDate.toLocaleString('en-US', { month: 'long' });

  const [typeofMeal, setTypeofMeal] = useState<null | Map<string, number>>(
    new Map<string, number>([
      ['HEALTH', 0],
      ['BALANCE', 0],
      ['INSTANT', 0],
    ])
  );
  const [typeofAmount, setTypeofAmount] = useState<null | Map<string, number>>(
    new Map<string, number>([
      ['LIGHT', 0],
      ['FITNESS', 0],
      ['OVEREATING', 0],
    ])
  );

  useEffect(() => {
    const url = `/api/${globalId}`;
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('logintoken'),
        },
        withCredentials: true,
      })
      .then((response) => {
        const currentMonth = new Date().getMonth() + 1;
        const filterResponse: ObjectEx[] = response.data as ObjectEx[];
        const filterArr = filterResponse.filter((eachData) => {
          return new Date(eachData.selectedDate as string).getMonth() + 1 === currentMonth;
        });
        filterArr.forEach((eachData) => {
          setTypeofMeal((prev) => new Map(prev.set(eachData.type as string, prev.get(eachData.type as string) + 1)));
          setTypeofAmount((prev) => new Map(prev.set(eachData.quantity as string, prev.get(eachData.quantity as string) + 1)));
          setGlobalJson(filterArr);
          return new Date(eachData.selectedDate as string).getMonth() + 1 === currentMonth;
        });
        if (filterResponse.length > 0) {
          setGlobalJson(filterArr);
        }
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  return (
    <>
      <Nav />

      <StyledLogWrapper>
        <HelloBox>
          <StyledH4>Hello!</StyledH4>
          <StyledH2>{globalId}</StyledH2>
        </HelloBox>
        <Header>
          <HeaderText>
            {curtMonth} <Span>meal matrix</Span>
          </HeaderText>
        </Header>
        <BoxWapper>
          <Text>MEAL TYPE</Text>
          <TypeBox>
            {Array.from(typeofMeal).map((eachMealData) => (
              <EBox key={eachMealData[0]} style={{ display: 'flex' }}>
                <span>{TypeofEntoKo.get(eachMealData[0])}</span>
                <br />
                <NumText>{eachMealData[1]}</NumText>
              </EBox>
            ))}
          </TypeBox>
        </BoxWapper>
        <BoxWapper>
          <Text>MEAL AMOUNT</Text>

          <TypeBox>
            {Array.from(typeofAmount).map((eachAmountData) => (
              <EBox key={eachAmountData[0]} style={{ display: 'flex' }}>
                <span>{AmountEntoKo.get(eachAmountData[0])}</span>
                <br />
                <NumText>{eachAmountData[1]}</NumText>
              </EBox>
            ))}
          </TypeBox>
        </BoxWapper>
      </StyledLogWrapper>
      {/* <h1>Mylog page</h1>
      {globalJson.map((eachJson, index) => (
        <div key={eachJson.mealId + ''}>
          <div>{eachJson.type + ''}</div>
          <div>{eachJson.quantity + ''}</div>
          <div>{eachJson.mealId + ''}</div>

          <div>{eachJson.selectedDate + ''}</div>
        </div>
      ))} */}
      <UnderNav />
    </>
  );
}

const HelloBox = styled.div`
  margin-top: 20px;
  padding: 1rem;
  width: 90%;
  height: 5rem;
  background-color: #def9ea;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
const StyledH4 = styled.h4`
  color: #7a7878;
`;
const StyledH2 = styled.h2`
  color: #4e4e4e;
`;
const Header = styled.div`
  margin-top: 2rem;
  width: 90%;
  color: #4e4e4e;
  //border: red 1px solid;
`;
const HeaderText = styled.h2`
  margin-left: 10px;
  color: #545454;
`;
const Span = styled.span`
  font-size: 1rem;
  color: #5cc189;
`;

const StyledLogWrapper = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 8vh;
`;
export default Mylog;
const TypeBox = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-item: center;
  //border: blue 1px solid;
`;

const EBox = styled.div`
  display: flex;
  margin: 0.5rem;
  width: 6rem;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
  //border: orange 1px solid;
  color: #676767;
`;

const BoxWapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-item: center;
  flex-direction: column;
  width: 90%;
  height: 12rem;
  text-align: center;
  background-color: #f1f1f1;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  //border: red 1px solid;
`;

const Text = styled.div`
  color: #676767;
  font-size: 2rem;
`;

const NumText = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
`;

import React, { useEffect, useState } from 'react';

import { addMonths, subMonths } from 'date-fns';
import styled from 'styled-components';
import RenderHeader from '@/components/Calendar/RenderHeader';
import RenderDays from '@/components/Calendar/RenderDays';
import RenderCells from '@/components/Calendar/RenderCells';
import { useRecoilState, useRecoilValue } from 'recoil';
import { idState, jsonState } from '@/store/store';
import axios from 'axios';

function Calender() {
  axios.defaults.withCredentials = true;
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day: React.SetStateAction<Date>) => {
    setSelectedDate(day);
  };
  const [globalJson, setGlobalJson] = useRecoilState(jsonState);
  const globalId = useRecoilValue(idState);
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
        setGlobalJson(response.data);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  return (
    <>
      <StyledCalendar>
        <RenderHeader currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
        <RenderDays />
        <CalRenderCells currentMonth={currentMonth} selectedDate={selectedDate} onDateClick={onDateClick} />
      </StyledCalendar>
    </>
  );
}

export default Calender;

const StyledCalendar = styled.div`
  width: 95%;
  max-width: 45rem;
  margin: 0 auto; // 위아래, 양옆
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: #fefefe;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  min-height: 25rem;
`;
const CalRenderCells = styled(RenderCells)``;

import { format } from 'date-fns';
import { useEffect } from 'react';
import styled from 'styled-components';

interface HProps {
  currentMonth: any;
  prevMonth: any;
  nextMonth: any;
}

function RenderHeader({ currentMonth, prevMonth, nextMonth }: HProps) {
  return (
    <StyledHeaderRow>
      <YearBox>{format(currentMonth, 'yyyy')} </YearBox>
      <MonthBox>
        <ArrowImg className='left' onClick={prevMonth} src='/CalendarPic/leftarrow.png' />
        <MonthText>{currentMonth.toLocaleString('en-GB', { month: 'short' })}</MonthText>
        <ArrowImg className='left' onClick={nextMonth} src='/CalendarPic/rightarrow.png' />
      </MonthBox>
    </StyledHeaderRow>
  );
}

export default RenderHeader;

const StyledHeaderRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ArrowImg = styled.img`
  height: 2rem;
  width: 2rem;
  &:active {
    transform: scale(0.95);
    transition: all 0.1s;
  }
`;
const MonthBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const YearBox = styled.div`
  color: #4e4e4e;
  font-weight: 700;
  font-size: large;
`;
const MonthText = styled.p`
  width: 5rem;
  color: #4e4e4e;
  font-size: x-large;
  text-align: center;
`;

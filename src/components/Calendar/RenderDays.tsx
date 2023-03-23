import styled from 'styled-components';

function RenderDays() {
  const days = [];
  const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];

  for (let i = 0; i < 7; i++) {
    days.push(
      <StyledCol key={i} className={`${i == 0 ? 'sun' : i == 6 ? 'sat' : ''}`}>
        {date[i]}
      </StyledCol>
    );
  }
  return <StyledDaysRow>{days}</StyledDaysRow>;
}

export default RenderDays;

const StyledDaysRow = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 45rem;
`;
const StyledCol = styled.div`
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: medium;
  &.sun {
    color: red;
  }
  &.sat {
    color: blue;
  }
`;

import Nav from '@/components/Nav/Nav';
import UnderNav from '@/components/Nav/UnderNav';
import { idState, jsonState, memberIdState } from '@/store/store';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RecoilState } from 'recoil';
import type { ObjectEx } from '@/store/store';
function Mylog() {
  axios.defaults.withCredentials = true;
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
        const currentMonth = new Date().getMonth() + 1;
        const filterResponse: ObjectEx[] = response.data as ObjectEx[];
        const filterArr = filterResponse.filter((eachData) => {
          return new Date(eachData.selectedDate as string).getMonth() + 1 === currentMonth;
        });
        console.log(filterArr);
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
      <h1>Mylog page</h1>
      {globalJson.map((eachJson, index) => (
        <div key={eachJson.mealId + ''}>
          <div>{eachJson.type + ''}</div>
          <div>{eachJson.quantity + ''}</div>
          <div>{eachJson.mealId + ''}</div>

          <div>{eachJson.selectedDate + ''}</div>
        </div>
      ))}
      <UnderNav />
    </>
  );
}
export default Mylog;

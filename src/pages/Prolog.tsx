import Prolog1 from '@/components/Prolog/Prolog1';
import Prolog2 from '@/components/Prolog/Prolog2';
import Prolog3 from '@/components/Prolog/Prolog3';
import styled from 'styled-components';
import Nav from '@/components/Nav/Nav';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Prolog() {
  return (
    <>
      <Nav />
      <StyledDiv>
        <Swiper spaceBetween={30} centeredSlides={true} speed={1200} autoplay={{ delay: 5000, disableOnInteraction: true }} pagination={{ clickable: false }} navigation={true} modules={[Autoplay, Pagination, Navigation]} className='mySwiper'>
          <SwiperSlide>
            <Prolog1 />
          </SwiperSlide>
          <SwiperSlide>
            <Prolog2 />
          </SwiperSlide>
          <SwiperSlide>
            <Prolog3 />
          </SwiperSlide>
        </Swiper>
      </StyledDiv>
    </>
  );
}

export default Prolog;

const StyledDiv = styled.div``;

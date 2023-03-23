import styled from 'styled-components';
import Image from 'next/image';
import Nav from '@/components/Nav/Nav';
import Link from 'next/link';
import UnderNav from '@/components/Nav/UnderNav';
import React from 'react';
import ReactPlayer from 'react-player';
import dynamic from 'next/dynamic';

function Home() {
  // react-player hydration Error solution
  const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

  return (
    <>
      <Nav />
      <StyledSection>
        {/* FLOG 소개 */}
        <StyledArticle>
          <StyledTitle>WHAT IS FLOG?</StyledTitle>
          <TestImage src={'/FoodLog.jpeg'} alt={'foodlog'} />
          <StyledP>For your Health</StyledP>
          <StyledP>Record your daily Food Routine!</StyledP>
        </StyledArticle>

        {/* 건강식 */}
        <StyledArticle>
          <StyledBox>
            <StyledIcon>
              <Image src={'/smile.png'} alt={'smile'} width={27} height={27} />
            </StyledIcon>
            <StyledTitle>Well-being Food</StyledTitle>
          </StyledBox>
          <Link href='https://www.healthline.com/nutrition/50-super-healthy-foods'>
            <StyledImage src={'/Good food.jpeg'} alt={'foodlog'} />
          </Link>

          <StyledP>Fresh ingredients</StyledP>
          <StyledP>Right and Healthy recipe</StyledP>
        </StyledArticle>

        {/* 올바른 식습관 */}
        <StyledArticle>
          <StyledBox>
            <StyledIcon>
              <Image src={'/smile.png'} alt={'smile'} width={27} height={27} />
            </StyledIcon>
            <StyledDiv>Eating Habits</StyledDiv>
          </StyledBox>
          <StyledLink href='https://www.cdc.gov/healthyweight/losing_weight/eating_habits.html'>
            <TestImage src={'/eating habits.jpeg'} alt={'eating'} />
          </StyledLink>
          {/* 출처 */}
          <StyledSrc>"Centers for Disease Control and Prevention", Healthy Weight, Nutrition, and Physical Activity, Last Reviewed June 3, 2022, accessed March 15, 2023</StyledSrc>

          <StyledP>The importance of healthy eating habits</StyledP>
          <StyledLink href='https://www.medicalnewstoday.com/articles/322268'>
            <TestImage src={'/brain.jpeg'} alt={'brain'} width={250} height={180} />
          </StyledLink>
          <StyledSrc>"Medical News Today", What are the benefits of eating healthy?, Last Updated on Jan 12, 2023, accessed March 16, 2023</StyledSrc>

          <StyledP>10 healthy eating habits</StyledP>
          <StyledLink href='https://www.utep.edu/healthy-miner/Resources/10-healthy-eating-habits-for-college-students.html'>
            <TestImage src={'/healthy eating habits.jpeg'} alt={'eating habits'} width={250} height={180} />
          </StyledLink>
          <StyledSrc>"Healthy Miner", 10 Healthy Eating Habits for Students, by Educator Geneva Nieto, accessed March 15, 2023</StyledSrc>

          <StyledTitle>Related Video</StyledTitle>
          <StyledVideo>
            <ReactPlayer url={['https://www.youtube.com/watch?v=pexOIlhT0v0', 'https://www.youtube.com/watch?v=7UDx1RF9Oho']} width={300} height={200} controls={true} light={false} pip={true} />
          </StyledVideo>
          <StyledP>How to Make Healthy Food Changes</StyledP>
          <StyledP>Healthy eating hacks</StyledP>
        </StyledArticle>
      </StyledSection>
      <UnderNav />
    </>
  );
}

export default Home;

const TestImage = styled.img`
  margin: 2rem;
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 20rem;
  max-height: 12rem;
  align-items: center;
  justify-content: center;
  border-radius: 5%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledSection = styled.section`
  padding: 5%;
`;

const StyledArticle = styled.article`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 550;
`;

const StyledImage = styled.img`
  margin: 3rem 0;
  max-width: 25rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledP = styled.p`
  margin: 1rem;
  gap: 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
`;

const StyledBox = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const StyledSrc = styled.div`
  margin-bottom: 2rem;
  max-width: 20rem;
  font-size: smaller;
  text-align: center;
  font-weight: 100;
`;

const StyledDiv = styled.div`
  font-size: 1.5rem;
  font-weight: 550;
`;

const StyledIcon = styled.div`
  margin: 0.25rem 0.5rem 0 0;
`;

const StyledVideo = styled.div`
  margin: 2rem;
`;

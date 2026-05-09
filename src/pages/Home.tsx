import React from 'react';
import Hero from '../components/organisms/Hero';
import GlobalStats from '../components/organisms/GlobalStats';
import HomeExperience from '../components/organisms/HomeExperience';
import ExperienceHighlights from '../components/organisms/ExperienceHighlights';
import FeaturedProject from '../components/organisms/FeaturedProject';
import TechStackSection from '../components/organisms/TechStackSection';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <GlobalStats />
      <HomeExperience />
      <ExperienceHighlights />
      <TechStackSection variant="home" />
      <FeaturedProject />
    </div>
  );
};

export default Home;

import { HeroSection, HeroText, HeroImage } from './HeroStyles';

import heroImage from '../../images/consolas-hero.jpg';

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroText>
        <h1>Bienvenidos a Console Fast</h1>
        <p>Tu tienda de compra gamer mas rapida!!!.</p>
      </HeroText>
      <HeroImage src={heroImage} alt="Hero Image" />
    </HeroSection>
  );
};

export default Hero;
import React, { useState } from 'react';
////import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>

      <HeroContent>
        <HeroItems>
          <HeroH1>O seu Restaurante </HeroH1>
         <HeroP>Conheça nossos Pratos Especiais</HeroP>
         
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

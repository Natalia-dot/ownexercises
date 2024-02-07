import React from 'react';
import { StyledButton } from './Button';
import { StyGeneralButton } from './styles';

//esta es la funcion que va a hacer que el boton tenga el comportamiento deseado
const scrollToSection = (sectionId: string) => {
    //metemos el id de la seccion de la pagina a la que queremos navegar
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const ScrollToSectionButton = ({ sectionId, children } : {sectionId: string, children: React.ReactNode}) => {
  const handleClick = () => {
    scrollToSection(sectionId);
  };

  return (
    <StyGeneralButton onClick={handleClick}>
      {children}
    </StyGeneralButton>
  );
};

export default ScrollToSectionButton;
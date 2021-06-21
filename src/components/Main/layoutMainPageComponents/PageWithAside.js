
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonPulse } from '../../animationElements/ButtonPulse';
import { AsideLeft } from '../aside/AsideLeft';
import { AsideRight } from '../aside/AsideRight';
import { ModalItemForm } from '../modalItemForm/ModalItemForm';

const AsideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const PageWithAside = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <AsideWrapper >
      <AsideLeft 
        location={location.key}
      />
      {children}
      <AsideRight 
        location={location.key}
      />
      <ButtonPulse toggleModal={toggleModal}/>
      {openModal &&
        <ModalItemForm
          toggleModal={toggleModal}
        />
      }
    </AsideWrapper>
  )
};

import { useState } from 'react';
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

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <AsideWrapper >
      <AsideLeft />
      {children}
      <AsideRight />
      <ButtonPulse toggleModal={toggleModal}/>
      {openModal &&
        <ModalItemForm
          toggleModal={toggleModal}
        />
      }
    </AsideWrapper>
  )
};
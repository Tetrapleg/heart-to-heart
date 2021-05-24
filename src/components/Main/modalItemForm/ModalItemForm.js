import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CloseModalButton } from '../../commonComponent/CloseModalButton';
import { SocialMenu } from '../../commonComponent/SocialMenu';
import { DataProvider } from "./DataContext";
import { ItemForm } from "./ItemForm";

const ModalWrapper = styled.section`
  position: fixed;
  z-index: 899;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.7);
  backdrop-filter: blur(0.2em);
  display: flex;
  justify-content: center;
`;

const Overlay = styled.div`
  height: 100vh;
  width: 100%;
  padding: 1em 0;
  display: flex;
  justify-content: center;
  align-items: ${({ ...props }) => props.alignAttribut ? "center" : "flex-start"};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const Modal = styled.div`
  width: 90%;
  height: fit-content;
  max-width: 700px;
  background-color: #E6E6FA;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopTitle = styled.p`
  padding-left: 45px;
  padding-top: 2em;
  width: calc(100% - 50px);
  text-align: center;
  font-size: 20px;
  & span {
    display: inline-block;
    font-style: italic;
  }

  @media (max-width: 460px) {
    font-size: 18px;
  }
`;

const SocialMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalItemForm = ({ toggleModal }) => {
  const [alignAttribut, setAlignAttribut] = useState(true);
  const overlayRef = createRef();
  const modalRef = createRef();

  const closeModal = (e) => {
    if (e.target.id === 'overlay') {
      toggleModal();
    };
  };

  useEffect(() => {
    const clearScroll = overlayRef.current;
    
    if(overlayRef.current) {
      disableBodyScroll(overlayRef.current);
    }

    return () => enableBodyScroll(clearScroll);
  }, [overlayRef]);

  useEffect(() => {
    const handleResize = () => {
      const modal = modalRef.current;

      if(modal) {
        const heightDifference = window.innerHeight - modal.offsetHeight - 32 >= 0;
        if(alignAttribut !== heightDifference) {
          setAlignAttribut(!alignAttribut);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [alignAttribut, modalRef]);
  
  return (
    <ModalWrapper >
      <Overlay 
        ref={overlayRef}
        id="overlay"
        onClick={closeModal}  
        alignAttribut={alignAttribut}
      >
        <Modal 
          ref={modalRef}
        >
          <TopWrapper >
            <TopTitle >
              <span>Наш e-mail: serdcemkserdcy@yandex.ru</span>
            </TopTitle>
            <CloseModalButton
              closeModal={toggleModal}
            />
          </TopWrapper>
          <DataProvider >
            <ItemForm toggleModal={toggleModal}/>
          </DataProvider>
          <SocialMenuWrapper >
            <SocialMenu />
          </SocialMenuWrapper>
        </Modal>
      </Overlay>
    </ModalWrapper>
  )
};
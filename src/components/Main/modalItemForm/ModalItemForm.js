import styled from 'styled-components';
import { DataProvider } from "./DataContext";
import { ItemForm } from "./ItemForm";

const Overlay = styled.div`
  position: fixed;
  z-index: 899;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 90%;
  height: 90%;
  max-width: 700px;
  max-height: 500px;
  background-color: #f4eff7;
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
  padding-top: 20px;
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

const ModalCloseBtn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e7f2df;
  border: 3px solid rgb(68,189,125);
  position: relative;
  cursor: pointer;
  transition: all .3s;
  &::after {
    position: absolute;
    content: '';
    width: 30px;
    height: 3px;
    background-color: rgb(68,189,125);
    top: 21px;
    left: 7px;
    transform: rotate(45deg);
  }
  &::before {
    position: absolute;
    content: '';
    width: 30px;
    height: 3px;
    background-color: rgb(68,189,125);
    top: 21px;
    left: 7px;
    transform: rotate(-45deg);
  }
  &:hover {
    transform: scale(1.1)
  }
`;

export const ModalItemForm = ({ toggleModal }) => {

  const closeModal = (e) => {
    if (e.target.id === 'overlay') {
      toggleModal();
    };
  };

  return (
    <Overlay
      id="overlay"
      onClick={closeModal}
    >
      <Modal>
        <TopWrapper>
          <TopTitle>
            Наши телефоны: <span>(8332) 22-00-03,</span> <span>(8332) 41-04-03</span>
          </TopTitle>
          <ModalCloseBtn
            onClick={toggleModal}
          />
        </TopWrapper>
        <DataProvider>
          <ItemForm toggleModal={toggleModal}/>
        </DataProvider>
        <div>
          scial
        </div>
      </Modal>
    </Overlay>
  )
};
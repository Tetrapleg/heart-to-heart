import styled from 'styled-components';

const ItemFormContainer = styled.div`
  margin: 10px 40px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    margin: 0 10px;
  }
`;

export const FormContainer = ({ children, ...props }) => {
  return (
    <ItemFormContainer {...props}>
      {children}
    </ItemFormContainer>
  );
};
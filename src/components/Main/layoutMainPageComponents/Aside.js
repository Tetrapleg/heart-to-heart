import styled from 'styled-components';

const AsideWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 16rem;
  padding-top: 5rem;
  ${({props}) => props.side ?
    props.side === "left" ? `align-items: flex-end;
                            padding-right: 2rem;
                            padding-left: 1rem;` : 
    props.side === "right" ? `align-items: flex-start;
                              padding-right: 1rem;
                              padding-left: 2rem;` : undefined
    : undefined
  };
  @media(max-width: 1300px) {
    display: none;
  }
`;

export const Aside = ({ children, ...props }) => {

  return (
  <AsideWrapper props={props}>
    {children}
  </AsideWrapper>
)}
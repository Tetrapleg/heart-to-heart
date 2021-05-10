import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkHrefWrapper = styled.a`
  font-style: italic;
  font-weight: 100;
`;

const LinkToWrapper = styled(Link)`
  font-style: italic;
  font-weight: 100;
`;

export const LinkHref = ({ children, ...props }) => (
  <LinkHrefWrapper 
    {...props}
  >
    {children}
  </LinkHrefWrapper>
)

export const LinkTo = ({ children, ...props }) => (
  <LinkToWrapper 
    {...props}
  >
    {children}
  </LinkToWrapper>
)
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkHrefWrapper = styled.a`
  font-style: italic;
  font-weight: 100;
  text-decoration: underline solid 1px;
`;

const LinkToWrapper = styled(Link)`
  font-style: italic;
  font-weight: 100;
  text-decoration: underline solid 1px;
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
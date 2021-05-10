import styled from 'styled-components';

const Link = styled.a`
  color: ${({ ...props }) => props.color};
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialLink = ({ children, ...props }) => (
  <Link
    target="_blank"
    rel="noreferrer"
    {...props}
  >
    {children}
  </Link>
);
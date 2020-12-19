import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.l : theme.fontSize.m)};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.primary};
`;

export default Heading;

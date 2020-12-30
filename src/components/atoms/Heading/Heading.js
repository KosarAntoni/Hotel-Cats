import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.primary};
  font-family: 'Rubik', sans-serif;
	
	${({ big }) => big && css`
    font-size: ${({ theme }) => theme.fontSize.xl};
  `}
	
	${({ small }) => small && css`
    font-size: ${({ theme }) => theme.fontSize.s};
  `}
`;

export default Heading;

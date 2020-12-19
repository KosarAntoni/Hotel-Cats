import styled from 'styled-components';

const Paragraph = styled.p`
	font-size: ${({ theme }) => (theme.fontSize.s)};
  color: ${({ theme }) => theme.primary};
  font-family: 'Rubik', sans-serif;  
`;

export default Paragraph;

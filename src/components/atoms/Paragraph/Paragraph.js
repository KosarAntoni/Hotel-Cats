import styled from 'styled-components';

const Paragraph = styled.p`
	font-size: ${({ theme }) => (theme.fontSize.s)};
  color: ${({ theme }) => theme.primary};
`;

export default Paragraph;

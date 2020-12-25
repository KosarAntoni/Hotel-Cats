import styled from 'styled-components';

const Link = styled.a`
	text-decoration: none;
	font-size: ${({ theme, big }) => (big ? theme.fontSize.m : theme.fontSize.s)};
	font-weight: ${({ theme, big }) => big && theme.fontWeight.bold};
  color: ${({ theme }) => theme.primary};
  padding: ${({ big }) => !big && '0 0.5rem'};
  transition: all 0.3s ease;
  border-radius: ${({ big }) => !big && '1rem'};
	border-bottom: ${({ big }) => big && '2px solid transparent'};

  :hover {
		background: ${({ theme, big }) => !big && theme.yellow};
		border-bottom: ${({ big, theme }) => big && `2px solid ${theme.primary}`};
	}
`;

export default Link;

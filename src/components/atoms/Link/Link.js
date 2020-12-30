import styled, { css } from 'styled-components';

const Link = styled.a`
	text-decoration: none;
	font-size: ${({ theme }) => (theme.fontSize.s)};
  color: ${({ theme }) => theme.primary};
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  border-radius: 2rem;

  :hover,
  :focus{
    background: ${({ theme }) => theme.yellow};
  }

  ${({ big }) => big && css`
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
		padding: 0;
    border-bottom: 2px solid transparent;
		border-radius: unset;

    :hover,
    :focus{
      border-bottom: ${({ theme }) => `2px solid ${theme.primary}`};
			background: none;
    }
  `}

  ${({ small }) => small && css`
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.secondary};
    border-bottom: 1px solid transparent;
    border-radius: unset;
    padding: 0;

    :hover,
    :focus{
      border-bottom: ${({ theme }) => `1px solid ${theme.secondary}`};
      background: none;
    }
  `}
`;

export default Link;

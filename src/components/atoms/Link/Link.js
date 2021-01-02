import styled, { css } from 'styled-components';

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
	text-decoration: none;
	font-size: ${({ theme }) => (theme.fontSize.s)};
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease;
  
  ::before {
    position: absolute;
    content: '';
    display: block;
    background: ${({ theme }) => theme.yellow};
    width: 140%;
    height: 160%;
    border-radius: 3rem;
    z-index: -1;
    opacity: 0;
    transition: all 0.3s;
  }

  :hover,
  :focus{
    color: ${({ theme }) => theme.black};
    ::before {
      opacity: 1;
    }
  }

  ${({ big }) => big && css`
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    border-bottom: 2px solid transparent;
    
    ::before {
      display: none;
    }

    :hover,
    :focus{
      color: ${({ theme }) => theme.primary};
      border-bottom: ${({ theme }) => `2px solid ${theme.primary}`};
    }
  `}

  ${({ small }) => small && css`
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.secondary};
    border-bottom: 1px solid transparent;

    ::before {
      display: none;
    }

    :hover,
    :focus{
      color: ${({ theme }) => theme.primary};
      border-bottom: ${({ theme }) => `1px solid ${theme.secondary}`};
    }
  `}
`;

export default Link;

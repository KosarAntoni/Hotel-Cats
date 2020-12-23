import styled from 'styled-components';

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
	position: relative;
  height: 2rem;
  width: 2rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 1px solid ${({ theme }) => theme.secondary};
  outline: none;
  transition-duration: 0.3s;
  cursor: pointer;
	
	:before {
		position: absolute;
		top: 0.3rem;
		left: 0.65rem;
    content: '';
    display: block;
		width: 0.5rem;
		height: 0.8rem;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.primary};
		border-top: none;
		border-left: none;
		transform: rotate(45deg) scale(2);
		opacity: 0;
		transition: all 0.3s;
	}

  :checked::before {
		opacity: 1;
    transform: rotate(45deg) scale(1);
  }

  :active {
    border-color: ${({ theme }) => theme.orange};
  }
	
	:active::before {
		border-color: ${({ theme }) => theme.orange};
	}
`;

export default Checkbox;

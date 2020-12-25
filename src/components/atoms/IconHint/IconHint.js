import styled from 'styled-components';

const IconHint = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	height: 1.8rem;
	width: 1.8rem;
  background-image: url(${({ icon }) => icon});
  background-size: 1.6rem;
  background-repeat: no-repeat;
  background-position: 50% 50%;
	font-size: 0;
	
	::after {
		visibility: hidden;
		display: block;
    position: absolute;
		top: -200%;
    white-space: nowrap;
		font-size: ${({ theme }) => theme.fontSize.xs};
		content: '${({ children }) => children}';
    text-align: center;

    background: ${({ theme }) => theme.background};
		padding: 0.5rem  1rem;
    border-radius: 4px;
    border: 1px solid #FAC663;
    box-shadow: 0px 4px 12px rgba(173, 152, 143, 0.18);
		opacity: 0;
		transition: all 0.3s;
	}

  ::before {
    visibility: hidden;
    content: " ";
    position: absolute;
    top: -40%;
    border-width: 5px;
    border-style: solid;
    border-color: #FAC663 transparent transparent transparent;
    opacity: 0;
    transition: all 0.3s;
  }
	
	:hover::after,
	:hover::before{
		visibility: visible;
    opacity: 1;
  }
	
`;

export default IconHint;

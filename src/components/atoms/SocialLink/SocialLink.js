import styled from 'styled-components';

const SocialLink = styled.a`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background-image: url(${({ icon }) => icon});
  background-size: 2.5rem;
  background-repeat: no-repeat;
  background-position: 50%;
	border-radius: 100%;
	border: 2px solid transparent;
	
	:after {
		display: block;
		content: '';
		width: 2.7rem;
		height: 2.7rem;
		border-radius: 100%;
		position: absolute;
		box-shadow: 0 0 0 2px ${({ theme }) => theme.black};
		opacity: 0;
    transition: all 0.3s;
  }
	
	:hover,
	:focus {
		::after {
			opacity: 1;
		}
  }
	
`;

export default SocialLink;

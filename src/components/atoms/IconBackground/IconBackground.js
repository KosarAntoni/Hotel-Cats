import styled from 'styled-components';

const IconBackground = styled.div`
  background-image: url(${({ icon }) => icon});
  background-size: 50%;
	background-repeat: no-repeat;
  background-position: 50%;
	background-color: ${({ theme }) => theme.yellow};
	border-radius: 100%;
	width: 9rem;
	height: 9rem;
`;

export default IconBackground;

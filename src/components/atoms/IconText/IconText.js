import styled from 'styled-components';

const IconText = styled.p`
  background-image: url(${({ icon }) => icon});
  background-size: 1.6rem;
  background-repeat: no-repeat;
  background-position: left center;
	padding-left: 2.4rem;
	color: ${({ theme }) => theme.primary};
`;

export default IconText;

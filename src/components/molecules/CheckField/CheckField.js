import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Checkbox from '../../atoms/Checkbox/Checkbox';

const Label = styled.label`
	display: flex;
	flex-direction: row;
	align-items: center;
  cursor: pointer;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-right: 1rem;
`;

const CheckField = ({ children, isChecked, handleChange }) => (
  <Label>
    <StyledCheckbox
      checked={isChecked}
      onChange={handleChange}
    />
    {children}
  </Label>
);

CheckField.propTypes = {
  children: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  handleChange: PropTypes.func,
};

CheckField.defaultProps = {
  isChecked: false,
  handleChange: () => {},
};

export default CheckField;

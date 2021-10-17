import React 	from 'react';
import styled 	from 'styled-components';
import Button 	from './Button';

const CustomButton = styled(Button)`
	padding: 					0rem;
	border-radius: 				0;
	box-shadow: 				none;
	transform: 					none;
	background-color: 			transparent;
	color: 						var(--dca-color_text-link);
`;

const LinkButton = React.forwardRef(({ children, ...rest }, ref) =>
{
	return (
		<CustomButton ref={ ref } { ...rest }>
			{ children }
		</CustomButton>
	);
});

export default LinkButton;
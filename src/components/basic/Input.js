import React 	from 'react';
import styled 	from 'styled-components';

const Wrapper = styled.input`
	padding: 				0.3rem 0.5rem;
	min-width: 				0;
	transition-property: 	box-shadow;
	outline: 				none !important;
	box-shadow: 			none;
	border: 				var(--dca-border_default);
	border-radius: 			var(--dca-border-radius_default);
	transition-duration: 	var(--dca-transition-duration_default);

	&:focus
	{
		box-shadow: 		var(--dca-box-shadow_focus);
	}
`;

const Input = React.forwardRef(({ children, ...rest }, ref) =>
{
	return (
		<Wrapper ref={ ref } { ...rest }></Wrapper>
	);
});

export default Input;
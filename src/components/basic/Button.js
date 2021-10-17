import React 	from 'react'
import styled 	from 'styled-components'

const Wrapper = styled.button`
	padding: 				0.5rem 1.5rem;
	transition-property: 	box-shadow, background-color, color, transform;
	outline: 				none !important;
	background-color: 		transparent;
	border: 				none;
	box-shadow: 			none;
	color: 					white;
	transition-duration: 	var(--dca-transition-duration_default);
	background-color: 		var(--dca-background-color_button-primary);
	border-radius: 			var(--dca-border-radius_default);

	&:focus
	{
		box-shadow: 		var(--dca-box-shadow_focus);
	}

	&:active
	{
		transform: 			scale(0.95);
	}
`;

const Button = React.forwardRef(({ children, ...rest }, ref) =>
{
	return (
		<Wrapper ref={ ref } { ...rest }>
			{ children }
		</Wrapper>
	)
})

export default Button
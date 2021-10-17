import React 	from 'react';
import styled 	from 'styled-components';

const Wrapper = styled.select`
	padding: 				0.3rem 0.5rem;
	min-width: 				0;
	transition-property: 	box-shadow;
	overflow: 				hidden;
	box-shadow: 			none;
	text-overflow: 			ellipsis;
	word-break: 			break-all;
	outline: 				none;
	cursor: 				pointer;
	border: 				var(--dca-border_default);
	border-radius: 			var(--dca-border-radius_default);
	color: 					var(--dca-color_text-link);
	transition-duration: 	var(--dca-transition-duration_default);

	&:focus
	{
		box-shadow: 		var(--dca-box-shadow_focus);
	}
`;
const Option = styled.option``;

const Select = React.forwardRef(({ children, options = [], ...rest }, ref) =>
{
	return (
		<Wrapper ref={ ref } { ...rest }>
			{ options.map(option =>
			<Option key={ option.value } value={ option.value }>{ option.label }</Option>)}
		</Wrapper>
	);
});

export default Select;
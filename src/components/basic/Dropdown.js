import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import React 		from 'react';
import styled 		from 'styled-components';
import Tippy 		from '@tippyjs/react';
import LinkButton 	from '../basic/LinkButton'

const CustomTippy = styled(Tippy)`
	padding: 				0.5rem;
	box-shadow: 			0 1px 6px 0 rgba(0, 0, 0, 0.15);
	min-width: 				125px;
	background-color: 		var(--dca-background-color_primary);
	border-radius: 			var(--dca-border-radius_default);
	
	.tippy-content
	{
		padding: 			0;
	}

	.tippy-arrow
	{
		display: 			none;
	}
`;
const CustomLinkButton = styled(LinkButton)`
	width: 				24px;
	height: 			24px;
	border-radius: 		50%;
	display: 			grid;
	align-items: 		center;
	justify-content: 	center;
	background-color: 	hsl(0, 0%, 90%) !important;
`;

const Dropdown = React.forwardRef(({ children, ...rest }, ref) =>
{
	return (
		<CustomTippy ref={ ref } { ...rest } trigger='click' duration={ 200 } placement='bottom-end' animation='scale' content={ children } hideOnClick={ true } interactive={ true }>
			<CustomLinkButton>
				<i className='far fa-ellipsis-h'></i>
			</CustomLinkButton>
		</CustomTippy>
	);
});

export default Dropdown
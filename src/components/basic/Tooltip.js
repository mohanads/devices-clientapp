import React 	from 'react';
import styled 	from 'styled-components';
import Tippy 	from '@tippyjs/react';
import 			'tippy.js/dist/tippy.css';

const CustomTippy = styled(Tippy)`
	display: 			grid;
	align-content: 		center;
	justify-content: 	center;
	border-radius: 		var(--dca-border-radius_default);
	background-color: 	var(--dca-background-color_button-active);
	
	.tippy-arrow
	{
		color: 			var(--dca-background-color_button-active);
	}
`;

export default function Tooltip ({ content, children })
{
	return (
		<CustomTippy content={ content } hideOnClick={ false }>
			{ children }
		</CustomTippy>
	)
};
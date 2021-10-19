import { createGlobalStyle } 	from 'styled-components';
import React, { Fragment } 		from 'react';
import ReactDOM 				from 'react-dom';
import App 						from './components/App';

const GlobalStyle = createGlobalStyle`
	:root
	{
		--dca-transition-duration_default: 			200ms;
		--dca-border-radius_default: 				1rem;
		/* --dca-border-radius_default: 				0.3rem; */
		--dca-border_default-width: 				1px;
		--dca-border_default-style: 				solid;
		--dca-border_default-color: 				hsl(0, 0%, 85%);
		--dca-box-shadow_focus-x: 					0;
		--dca-box-shadow_focus-y: 					0;
		--dca-box-shadow_focus-blur: 				0;
		--dca-box-shadow_focus-spread: 				2px;
		--dca-box-shadow_focus-color: 				hsl(205.18, 91.39%, 62.85%);
		--dca-background-color_button-primary: 		hsl(205.18, 91.39%, 42.85%);
		--dca-background-color_button-active: 		hsl(0, 0%, 30%);
		--dca-background-color_app-lightness: 		93%;
		--dca-background-color_app: 				hsl(0, 0%, var(--dca-background-color_app-lightness));
		--dca-background-color_primary: 			white;
		--dca-background-color_secondary: 			hsl(0, 0%, calc(var(--dca-background-color_app-lightness) + 4%));
		--dca-color_text-weak: 						hsl(0, 0%, 50%);
		--dca-color_text-button-active: 			hsl(0, 0%, 100%);
		--dca-color_text-link: 						#0d6efd;
		--dca-scale_active: 						0.97;
		--dca-font-size_subtitle-1: 				0.8rem;
		--dca-font-size_subtitle-2: 				0.9rem;
		--dca-border_default: 						var(--dca-border_default-width)
													var(--dca-border_default-style)
													var(--dca-border_default-color);
		--dca-box-shadow_focus: 					var(--dca-box-shadow_focus-x)
													var(--dca-box-shadow_focus-y)
													var(--dca-box-shadow_focus-blur)
													var(--dca-box-shadow_focus-spread)
													var(--dca-box-shadow_focus-color);
	}

	body
	{
		line-height: 			1;
		color: 					hsl(0, 0%, 25%);
		background-color: 		var(--dca-background-color_secondary);
	}

	[data-tippy-root]
	{
		z-index: 				1 !important;
	}
`;

const Wrapper = (
	<Fragment>
		<App />
		<GlobalStyle />
	</Fragment>
);

ReactDOM.render(Wrapper, document.getElementById('app'));
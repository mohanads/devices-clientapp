import React 		from 'react';
import styled 		from 'styled-components';
import LinkButton 	from './LinkButton';
import Backdrop 	from './Backdrop';
import FocusTrap 	from 'focus-trap-react';
import { motion, AnimatePresence } from 'framer-motion';

const Wrapper = styled(motion.div)`
	min-width: 				250px;
	min-height: 			250px;
	box-shadow: 			0 0 20px 0 rgb(0 0 0 / 15%);
	overflow: 				hidden;
	display: 				grid;
	grid-template-rows: 	max-content 1fr max-content;
	background-color: 		var(--dca-background-color_primary);
	border-radius: 			var(--dca-border-radius_default);
`;
const Header = styled.div`
	padding: 				1rem 1.5rem;
	column-gap: 			1rem;
	grid-template-columns: 	1fr max-content;
	align-items: 			center;
	display: 				grid;
	border-bottom: 			var(--dca-border_default);
`;
const HeaderContainer = styled.div`
	min-width: 				0;
	overflow: 				hidden;
`;
const CloseButton = styled(LinkButton)`
	width: 					24px;
	height: 				24px;
	border-radius: 			50%;
	height: 				100%;
	display: 				grid;
	align-items: 			center;
	justify-content: 		center;
	background-color: 		hsl(0, 0%, 90%) !important;
	color: 					hsl(0, 0%, 50%) !important;
`;
const Body = styled.div`
	padding: 				1.5rem;
`;
const Footer = styled.div`
	padding: 				0.75rem 1.5rem;
	display: 				grid;
	justify-content: 		center;
	border-top: 			var(--dca-border_default);
	background-color: 		hsl(0, 0%, 97%);
`;

const Modal = ({ isVisible, onClose, header, body, footer }) =>
{
	return (
		<AnimatePresence>
			{ isVisible &&
			<Backdrop isVisible={ isVisible } onClick={ onClose }>
				<FocusTrap active={ isVisible } focusTrapOptions={ { initialFocus: 'input', escapeDeactivates: false, allowOutsideClick: true } }>
					<Wrapper initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
						<Header>
							<HeaderContainer>
								{ header }
							</HeaderContainer>
							<CloseButton onClick={ onClose }>
								<i className='fa fa-close' />
							</CloseButton>
						</Header>
						<Body>{ body }</Body>
						<Footer>{ footer }</Footer>
					</Wrapper>
				</FocusTrap>
			</Backdrop> }
		</AnimatePresence>
	);
};

export default Modal;
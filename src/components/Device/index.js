import React 		from 'react';
import styled 		from 'styled-components';
import Actions 		from './Actions';
import Type 		from './Type';
import Capacity 	from './Capacity';
import { motion } 	from 'framer-motion';

const Wrapper = styled(motion.div)`
	padding: 				1.5rem;
	box-shadow: 			0 1px 4px 0 rgba(0, 0, 0, 0.15);
	row-gap: 				0.75rem;
	display: 				grid;
	overflow: 				hidden;
	border-radius: 			var(--dca-border-radius_default);
	background-color: 		var(--dca-background-color_primary);
`;
const Header = styled.div`
	column-gap: 			1rem;
	grid-template-columns: 	1fr max-content;
	display: 				grid;
	align-items: 			flex-start;
`;
const Name = styled.div`
	font-size: 				1.1rem;
	margin-bottom: 			0;
	overflow: 				hidden;
	text-overflow: 			ellipsis;
	word-break: 			break-all;
	white-space: 			nowrap;
`;
const Metadata = styled.div`
	gap: 					0.5rem 1rem;
	display: 				flex;
	flex-direction: 		row;
	color: 					hsl(0, 0%, 50%);
`;

const Device = ({ id, systemName, type, hddCapacity, openDeleteModal, openEditModal }) =>
{
	return (
		<Wrapper layout key={ id } initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<Header>
				<Name>{ systemName }</Name>
				<Actions openDeleteModal={ () => { openDeleteModal(id) } } openEditModal={ () => { openEditModal(id) } } />
			</Header>
			<Metadata>
				<Type type={ type } />
				<Capacity hddCapacity={ hddCapacity } />
			</Metadata>
		</Wrapper>
	);
};

export default Device;
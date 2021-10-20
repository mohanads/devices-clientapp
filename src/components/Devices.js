import React 	from 'react';
import styled 	from 'styled-components';
import Device 	from './Device';
import { AnimatePresence } from 'framer-motion';

const Wrapper = styled.div`
	gap: 						1rem;
	display: 					grid;
	grid-auto-rows: 			max-content;
	grid-template-columns: 		repeat(auto-fit, minmax(300px, 1fr));
`;
const Empty = styled.div`
	row-gap: 				1rem;
	padding-top: 			2rem;
	display: 				grid;
	justify-items: 			center;
`;

const Devices = ({ devices, filter, openDeleteModal, openEditModal }) =>
{
	return (
		<Wrapper>
			{ (!devices || devices.length === 0) &&
			<Empty>
				<div>No devices available.</div>
				{ filter && filter !== 'All Devices' && <div>Try changing your filter.</div> }
			</Empty> }
			<AnimatePresence>
				{ devices.map(device => <Device key={ device.id } { ...device } openDeleteModal={ openDeleteModal } openEditModal={ openEditModal } /> )}
			</AnimatePresence>
		</Wrapper>
	);
};

export default Devices;
import React 				from 'react';
import styled 				from 'styled-components';
import EditModal 			from './modals/EditModal';
import AddModal 			from './modals/AddModal';
import DeleteModal 			from './modals/DeleteModal';
import Devices 				from './Devices';
import Header 				from './header';
import * as DeviceManager 	from '../deviceManager';

const Wrapper = styled.div`
	min-height: 			100vh;
	max-height: 			100vh;
	width: 					100vw;
	max-width: 				100vw;
	display: 				grid;
	grid-template-rows: 	max-content 1fr;
	position: 				relative;
	overflow: 				hidden;
`;
const Container = styled.div.attrs(() => { return { className: 'container' } })`
	gap: 					1rem;
	padding-top:			1rem;
	padding-bottom: 		1rem;
	min-height: 			0;
	display: 				grid;
	overflow: 				auto;
`;

const App = () =>
{
	const [ allDevices, 	setAllDevices 		] = React.useState(DeviceManager.getDevices());
	const [ sortingBy, 		setSortingBy 		] = React.useState('systemName');
	const [ filter, 		setFilter 			] = React.useState('All Devices');
	const [ isEditing, 		setIsEditing 		] = React.useState(false);
	const [ isAdding, 		setIsAdding 		] = React.useState(false);
	const [ isDeleting, 	setIsDeleting 		] = React.useState(false);
	const [ editingDevice, 	setEditingDevice 	] = React.useState(null);
	const [ deletingDevice, setDeletingDevice 	] = React.useState(null);

	const closeAddModal 	= () => { setIsAdding(false) }
	const closeEditModal 	= () => { setIsEditing(false); setEditingDevice(null); }
	const closeDeleteModal 	= () => { setIsDeleting(false); setDeletingDevice(null); }
	const openAddModal 		= () => { setIsAdding(true) }
	const addDevice = (device) =>
	{
		closeAddModal();
		setAllDevices(DeviceManager.addDevice(allDevices, device))
	}
	const editDevice = (device) =>
	{
		closeEditModal();
		setAllDevices(DeviceManager.editDevice(allDevices, device))
	}
	const deleteDevice = (id) =>
	{
		closeDeleteModal();
		setAllDevices(DeviceManager.deleteDevice(allDevices, id))
	}
	const openEditModal = (id) =>
	{
		setEditingDevice(allDevices.find(device => device.id === id));
		setIsEditing(true);
	}
	const openDeleteModal = (id) =>
	{
		setDeletingDevice(allDevices.find(device => device.id === id));
		setIsDeleting(true);
	}
	const getFilteredSortedDevices = () =>
	{
		let filteredDevices = []

		if (filter === 'All Devices') filteredDevices = allDevices
		else filteredDevices = allDevices.filter(device => device.type === filter)

		const sortedDevices = filteredDevices.sort((a, b) =>
		{
			const aValue = a[ sortingBy ], bValue = b [ sortingBy ];

			if (aValue > bValue) 		return 1;
			else if (aValue === bValue) return 0;
			else if (aValue < bValue) 	return -1;
		});

		return sortedDevices
	}

	return (
		<Wrapper>
			<Header openAddModal={ openAddModal } sortingBy={ sortingBy } changeSortingBy={ setSortingBy } filter={ filter } changeFilter={ setFilter } />
			<Container>
				<Devices devices={ getFilteredSortedDevices() } filter={ filter } openDeleteModal={ openDeleteModal } openEditModal={ openEditModal } />
			</Container>
			<AddModal isVisible={ isAdding } closeAddModal={ closeAddModal } addDevice={ addDevice } />
			<EditModal isVisible={ isEditing } closeEditModal={ closeEditModal } device={ editingDevice } editDevice={ editDevice } />
			<DeleteModal isVisible={ isDeleting } closeDeleteModal={ closeDeleteModal } device={ deletingDevice } deleteDevice={ deleteDevice } />
		</Wrapper>
	);
};

export default App;
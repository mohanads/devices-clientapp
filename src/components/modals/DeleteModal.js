import React 	from 'react';
import styled 	from 'styled-components';
import Button 	from '../basic/Button';
import Modal 	from '../basic/Modal';

const Title = styled.h5`
	margin-bottom: 		0;
`;
const DeleteButton = styled(Button)`
	min-width: 			150px;
	text-align: 		center;
	background-color: 	#dc3545 !important;
	color: 				white;
`;
const CancelButton = styled(Button)`
	min-width: 			75px;
	text-align: 		center;
	color: 				white;
    background-color: 	hsl(0, 0%, 40%) !important;
`;
const BodyContainer = styled.div`
	row-gap: 			1rem;
	width: 				100%;
	max-width: 			350px;
	height: 			100%;
	display: 			grid;
	align-content: 		center;
	grid-auto-rows: 	max-content;
`;
const FooterContainer = styled.div`
	column-gap: 		1rem;
	display: 			flex;
	flex-direction: 	row;
`;

const Header = () =>
{
	return (
		<Title>
			Delete Device
		</Title>
	);
};

const Body = ({ systemName }) =>
{
	return (
		<BodyContainer>
			<div>Please re-confirm deleting "{ systemName }".</div>
			<div>This cannot be undone.</div>
		</BodyContainer>
	);
};

const Footer = ({ deleteDevice, closeDeleteModal }) =>
{
	return (
		<FooterContainer>
			<DeleteButton onClick={ deleteDevice }>Delete</DeleteButton>
			<CancelButton onClick={ closeDeleteModal }>Cancel</CancelButton>
		</FooterContainer>
	);
};

const DeleteModal = ({ device, isVisible, closeDeleteModal, deleteDevice }) =>
{
	const [ systemName, setSystemName ] = React.useState('');

	const _deleteDevice = () => { deleteDevice(device.id) }

	const header 	= <Header />
	const body 		= <Body systemName={ systemName } />
	const footer 	= <Footer deleteDevice={ _deleteDevice } closeDeleteModal={ closeDeleteModal } />

	/**
	 * I want to set the systemName on load, because otherwise,
	 * when the user clicks Delete or closes the modal, the UI will
	 * shift unexpectedly.
	 */
	React.useEffect(() =>
	{
		if (!device) return

		setSystemName(device.systemName);
	}, [ device ])

	return (
		<Modal isVisible={ isVisible } onClose={ closeDeleteModal } header={ header } body={ body } footer={ footer }>
		</Modal>
	);
};

export default DeleteModal;
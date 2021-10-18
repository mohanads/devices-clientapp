import React 	from 'react';
import styled 	from 'styled-components';
import Button 	from '../basic/Button';
import Modal 	from '../basic/Modal';
import Input 	from '../basic/Input';
import Select 	from '../basic/Select';

const Title = styled.h5`
	margin-bottom: 	0;
`;
const Form = styled.form`
	column-gap: 			2rem;
	row-gap: 				0.5rem;
	margin-bottom: 			0;
	align-items: 			center;
	display: 				grid;
	grid-template-columns: 	max-content 1fr;
`;
const Label = styled.label``;
const EditButton = styled(Button)`
	min-width: 				150px;
	text-align: 			center;
`;

/**
 * Ideally, I would NOT hard code these options. I would either:
 * 1. Pull them from the server. (Best-in-slot option)
 * 2. Collect them from the list of devices that I have.
 */
const typeOptions =
[
	{ label: 'Mac', 				value: 'Mac' },
	{ label: 'Windows Workstation', value: 'Windows Workstation' },
	{ label: 'Windows Server', 		value: 'Windows Server' }
]

const Header = () =>
{
	return (
		<Title>
			Update Device
		</Title>
	);
};

const Body = ({ systemName, type, hddCapacity, typeOptions, changeSystemName, changeType, changeHDDCapacity, editDevice }) =>
{
	const onSubmit = (e) => { e.preventDefault(); editDevice(); }

	return (
		<Form id='editModalForm' onSubmit={ onSubmit }>
			<Label>System Name</Label>
			<Input required value={ systemName } onChange={ changeSystemName }></Input>
			<Label>Type</Label>
			<Select required options={ typeOptions } onChange={ changeType } value={ type }></Select>
			<Label>HDD Capacity</Label>
			<Input type='number' min='1' required value={ hddCapacity} onChange={ changeHDDCapacity }></Input>
		</Form>
	);
};

const Footer = () =>
{
	return (
		<EditButton type='submit' form='editModalForm'>Update</EditButton>
	);
};

const EditModal = ({ device, isVisible, closeEditModal, editDevice }) =>
{
	const [ systemName, 	setSystemName 	] = React.useState('');
	const [ type, 			setType 		] = React.useState('Mac');
	const [ hddCapacity, 	setHDDCapacity 	] = React.useState(1);

	const changeSystemName 	= (e) => { setSystemName(e.target.value) }
	const changeType 		= (e) => { setType(e.target.value) }
	const changeHDDCapacity = (e) => { setHDDCapacity(e.target.value) }
	const _editDevice 		= () => { editDevice({ id: device.id, systemName, type, hddCapacity }) }

	React.useEffect(() =>
	{
		if (!device) return
		
		setSystemName(device.systemName)
		setType(device.type)
		setHDDCapacity(device.hddCapacity)
	}, [device])

	const header 	= <Header />
	const body 		= <Body systemName={ systemName } typeOptions={ typeOptions } type={ type } hddCapacity={ hddCapacity } changeSystemName={ changeSystemName } changeType={ changeType } changeHDDCapacity={ changeHDDCapacity } editDevice={ _editDevice } />
	const footer 	= <Footer />

	return (
		<Modal isVisible={ isVisible } onClose={ closeEditModal } header={ header } body={ body } footer={ footer }>
		</Modal>
	);
};

export default EditModal;
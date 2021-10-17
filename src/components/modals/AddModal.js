import React 		from 'react';
import styled 		from 'styled-components';
import Button 		from '../basic/Button';
import Modal 		from '../basic/Modal';
import Input 		from '../basic/Input';
import Select 		from '../basic/Select';
import { AnimatePresence } from 'framer-motion';

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
const AddButton = styled(Button)`
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
			Add Device
		</Title>
	);
};

const Body = ({ systemName, type, hddCapacity, typeOptions, changeSystemName, changeType, changeHDDCapacity, addDevice }) =>
{
	const onSubmit = (e) => { e.preventDefault(); addDevice(); }

	return (
		<Form id='addModalForm' onSubmit={ onSubmit }>
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
		<AddButton type='submit' form='addModalForm'>Add</AddButton>
	);
};

const AddModal = ({ isVisible, closeAddModal, addDevice }) =>
{
	const [ systemName, 	setSystemName 	] = React.useState('');
	const [ type, 			setType 		] = React.useState('Mac');
	const [ hddCapacity, 	setHDDCapacity 	] = React.useState(1);

	const changeSystemName 	= (e) => { setSystemName(e.target.value) }
	const changeType 		= (e) => { setType(e.target.value) }
	const changeHDDCapacity = (e) => { setHDDCapacity(e.target.value) }
	const clearInputs = () =>
	{
		setSystemName('');
		setType('Mac');
		setHDDCapacity(1);
	}
	const _addDevice = () =>
	{
		addDevice({ systemName: systemName, type, hddCapacity: hddCapacity });
		clearInputs();
	}

	const header 	= <Header />
	const body 		= <Body systemName={ systemName } typeOptions={ typeOptions } type={ type } hddCapacity={ hddCapacity } changeSystemName={ changeSystemName } changeType={ changeType } changeHDDCapacity={ changeHDDCapacity } addDevice={ _addDevice } />
	const footer 	= <Footer addDevice={ _addDevice } />

	return (
		<Modal isVisible={ isVisible } onClose={ closeAddModal } header={ header } body={ body } footer={ footer }>
		</Modal>
	);
};

export default AddModal;
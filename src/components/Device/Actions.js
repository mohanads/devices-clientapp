import React 	from 'react';
import styled 	from 'styled-components';
import Dropdown from '../basic/Dropdown';
import Button 	from '../basic/Button';

const DropdownItem = styled(Button)`
	padding-top: 			0.4rem;
	padding-bottom: 		0.4rem;
	background-color: 		transparent;

	&:hover
	{
		background-color: 	hsl(0, 0%, 95%);
	}
`;

const EditButton = styled(DropdownItem)`
	color: 					hsl(0, 0%, 30%);
`;
const DeleteButton = styled(DropdownItem)`
	color: 					#dc3545 !important;
`;
const Container = styled.div`
	gap: 					0.25rem;
	display: 				grid;
`;

const Actions = ({ openDeleteModal, openEditModal }) =>
{
	const dropdownRef = React.useRef(null);

	const hideDropdown 	= () => { dropdownRef.current._tippy.hide(); }
	const onEditClick 	= () => { hideDropdown(); openEditModal(); }
	const onDeleteClick = () => { hideDropdown(); openDeleteModal(); }

	return (
		<Dropdown ref={ dropdownRef }>
			<Container>
				<EditButton onClick={ onEditClick }>Update</EditButton>
				<DeleteButton onClick={ onDeleteClick }>Delete</DeleteButton>
			</Container>
		</Dropdown>
	);
};

export default Actions;
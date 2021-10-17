import React 	from 'react';
import styled 	from 'styled-components';
import Button 	from './basic/Button';

const CustomButton = styled(Button)`
	gap: 				0.5rem;
	display: 			flex;
	justify-content: 	space-between;
`;

const AddButton = ({ onClick }) =>
{
	return (
		<CustomButton onClick={ onClick }>
			Add Device
		</CustomButton>
	);
};

export default AddButton;
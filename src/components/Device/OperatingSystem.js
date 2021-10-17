import React 	from 'react';
import styled 	from 'styled-components';
import Tooltip 	from '../basic/Tooltip';

/**
 * Maps the Operating System to a
 * corresponding FontAwesome icon's className.
 */
const operatingSystemIconMap =
{
	'macOS': 	'fa fa-apple',
	'Windows': 	'fa fa-windows'
}

const Icon = styled.i``;

const OperatingSystem = ({ operatingSystem }) =>
{
	const tooltip = `${ operatingSystem } Operating System`;

	return (
		<Tooltip content={ tooltip }>
			<div>
				<Icon className={ operatingSystemIconMap[ operatingSystem ] } />
			</div>
		</Tooltip>
	);
};

export default OperatingSystem;
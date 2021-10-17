import React 			from 'react';
import MachineType 		from './MachineType';
import OperatingSystem 	from './OperatingSystem';

const operatingSystemMap =
{
	'Mac': 		'macOS',
	'Windows': 	'Windows'
};

/**
 * Extracts the Operating System of a Device, either macOS or Windows, from the Type attribute.
 * If no Machine Type is explicitly specified in the Type, then we assume Windows.
 * @param {string} type The abstract type of a Device. Example: 'Windows Workstation'.
 * @returns The Operating System of a Device.
 */
const getOperatingSystem = (type) =>
{
	if (type == null) return null;

	for (let abstractType in operatingSystemMap)
	{
		if (type.indexOf(abstractType) !== -1)
			return operatingSystemMap[abstractType]
	}
	return 'Windows';
};

/**
 * Extracts the Machine Type of a Device, either Workstation or Server, from the Type attribute.
 * If no Machine Type is explicilty specified in the Type, then we assume Workstation.
 * @param {string} type The abstract type of a Device. Example: 'Windows Workstation'.
 * @returns The Machine Type of a Device.
 */
const getMachineType = (type) =>
{
	if (type == null) return null;

	if (type.indexOf('Workstation') !== -1) return 'Workstation';
	else if (type.indexOf('Server') !== -1) return 'Server';
	else return 'Workstation';
};

const Type = ({ type }) =>
{
	const operatingSystem 	= getOperatingSystem(type);
	const machineType 		= getMachineType(type);

	return (
		<React.Fragment>
			<OperatingSystem operatingSystem={ operatingSystem } />
			<MachineType machineType={ machineType } />
		</React.Fragment>
	);
};

export default Type;
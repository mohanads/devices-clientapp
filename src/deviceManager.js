import * as data from './data'

export const getDevices = () =>
{
	return data.devices
}

/**
 * Adds the Device to the list of Devices.
 * @param {*} devices List of Devices to add to.
 * @param {*} device The Device to add.
 * @returns The list of Devices with the Device added to it.
 */
export const addDevice = (devices, device) =>
{
	if (!devices || !device) return []

	let id
	
	if (devices.length !== 0) id = Math.max(...devices.map(device => device.id)) + 1
	else id = 1
	
	const _devices 	= [ ...devices ]
	const _device 	= { ...device, id }

	_devices.push(_device)

	return _devices
}

/**
 * Edits the given Device if found within the list of Devices.
 * @param {*} devices List of Devices to edit to.
 * @param {*} device The Device to edit. The Device's ID must exist in the list of Devices.
 * @returns The list of Devices, with the Device edited.
 */
export const editDevice = (devices, device) =>
{
	if (!devices || !device || !device.id) return []

	const _devices 	= [ ...devices ]
	const index 	= _devices.findIndex(_device => _device.id === device.id)
	
	if (index === -1) return []
	
	_devices[ index ] = device

	return _devices
}

/**
 * Removes the Device with the given Id from the list of Devices, if found.
 * @param {*} devices List of Devices to remove from.
 * @param {*} id The Id of the Device to remove.
 * @returns The list of Devices with the Device removed.
 */
export const deleteDevice = (devices, id) =>
{
	if (!devices || !id) return []

	const index = devices.findIndex(device => device.id === id)
	
	if (index === -1) return devices

	const _devices = [ ...devices ];
	_devices.splice(index, 1);
	
	return _devices;
}
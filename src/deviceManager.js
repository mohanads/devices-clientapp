const DOMAIN 			= 'localhost';
const PORT 				= '3000';
const DEVICES_ENDPOINT 	= 'devices';
const BASE_URL 			= `http://${ DOMAIN }:${ PORT }`;

/**
 * Retrieves all Devices.
 * @returns Array of Devices.
 */
export const getDevices = async () =>
{
	const devices = await (await fetch(`${ BASE_URL }/${ DEVICES_ENDPOINT }`)).json();
	return devices.map(device => ({ ...device, hdd_capacity: Number(device.hdd_capacity) }));
}

/**
 * Adds the Device to the list of Devices.
 * @param {*} device The Device to add.
 * @returns True or false, whether the operation was successful or not.
 */
export const addDevice = async (device) =>
{
	const response = await (await fetch(`${ BASE_URL }/${ DEVICES_ENDPOINT }`,
	{
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(device),
	})).json();
	return { ...device, id: response.id };
}

/**
 * Edits the given Device if found within the list of Devices.
 * @param {*} device The Device to edit. The Device's ID must exist in the list of Devices.
 * @returns True or false, whether the operation was successful or not.
 */
export const editDevice = async (device) =>
{
	return await (await fetch(`${ BASE_URL }/${ DEVICES_ENDPOINT }/${ device.id }`,
	{
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(device),
	})).json();
}

/**
 * Removes the Device with the given Id from the list of Devices, if found.
 * @param {*} id The Id of the Device to remove.
 * @returns True or false, whether the operation was successful or not.
 */
export const deleteDevice = async (id) =>
{
	return await (await fetch(`${ BASE_URL }/${ DEVICES_ENDPOINT }/${ id }`, { method: 'DELETE' })).json();
}
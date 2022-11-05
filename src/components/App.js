import React from 'react';
import styled from 'styled-components';
import EditModal from './modals/EditModal';
import AddModal from './modals/AddModal';
import DeleteModal from './modals/DeleteModal';
import Devices from './Devices';
import Header from './header';
import * as DeviceManager from '../DeviceManager';

const Wrapper = styled.div`
    min-height: 100vh;
    max-height: 100vh;
    width: 100vw;
    max-width: 100vw;
    display: grid;
    grid-template-rows: max-content 1fr;
    position: relative;
    overflow: hidden;
`;

const Container = styled.div.attrs(() => {
    return { className: 'container' };
})`
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    min-height: 0;
    display: grid;
    overflow: auto;
`;

const App = () => {
    const [allDevices, setAllDevices] = React.useState([]);
    const [sortingBy, setSortingBy] = React.useState('system_name');
    const [filter, setFilter] = React.useState('All Devices');
    const [isEditing, setIsEditing] = React.useState(false);
    const [isAdding, setIsAdding] = React.useState(false);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [editingDevice, setEditingDevice] = React.useState(null);
    const [deletingDevice, setDeletingDevice] = React.useState(null);

    const closeAddModal = () => {
        setIsAdding(false);
    };

    const closeEditModal = () => {
        setIsEditing(false);
        setEditingDevice(null);
    };

    const closeDeleteModal = () => {
        setIsDeleting(false);
        setDeletingDevice(null);
    };

    const openAddModal = () => {
        setIsAdding(true);
    };

    const addDevice = async (device) => {
        closeAddModal();
        const addedDevice = await DeviceManager.addDevice(device);
        setAllDevices((allDevices) => [...allDevices, addedDevice]);
    };

    const editDevice = async (device) => {
        closeEditModal();
        const isEdited = await DeviceManager.editDevice(device);

        if (!isEdited) return;

        const index = allDevices.findIndex(
            (_device) => _device.id === device.id
        );

        if (index === -1) return;

        const _allDevices = allDevices.slice();
        _allDevices.splice(index, 1, { ...device });
        setAllDevices(_allDevices);
    };

    const deleteDevice = async (id) => {
        closeDeleteModal();
        const isDeleted = DeviceManager.deleteDevice(id);

        if (!isDeleted) return;

        const index = allDevices.findIndex((device) => device.id === id);

        if (index === -1) return;

        const _allDevices = allDevices.slice();
        _allDevices.splice(index, 1);
        setAllDevices(_allDevices);
    };

    const openEditModal = (id) => {
        setEditingDevice(allDevices.find((device) => device.id === id));
        setIsEditing(true);
    };

    const openDeleteModal = (id) => {
        setDeletingDevice(allDevices.find((device) => device.id === id));
        setIsDeleting(true);
    };

    const getFilteredSortedDevices = () => {
        if (!allDevices || allDevices.length === 0) return [];

        let filteredDevices = [];

        if (filter === 'All Devices') filteredDevices = allDevices;
        else
            filteredDevices = allDevices.filter(
                (device) => device.type === filter
            );

        const sortedDevices = filteredDevices.sort((a, b) => {
            const aValue = a[sortingBy],
                bValue = b[sortingBy];

            if (aValue > bValue) return 1;
            else if (aValue === bValue) return 0;
            else if (aValue < bValue) return -1;
        });

        return sortedDevices;
    };

    const initializeAllDevices = async () => {
        setAllDevices(await DeviceManager.getDevices());
    };

    React.useEffect(() => {
        initializeAllDevices();
    }, []);

    return (
        <Wrapper>
            <Header
                openAddModal={openAddModal}
                sortingBy={sortingBy}
                changeSortingBy={setSortingBy}
                filter={filter}
                changeFilter={setFilter}
            />
            <Container>
                <Devices
                    devices={getFilteredSortedDevices()}
                    filter={filter}
                    openDeleteModal={openDeleteModal}
                    openEditModal={openEditModal}
                />
            </Container>
            <AddModal
                isVisible={isAdding}
                closeAddModal={closeAddModal}
                addDevice={addDevice}
            />
            <EditModal
                isVisible={isEditing}
                closeEditModal={closeEditModal}
                device={editingDevice}
                editDevice={editDevice}
            />
            <DeleteModal
                isVisible={isDeleting}
                closeDeleteModal={closeDeleteModal}
                device={deletingDevice}
                deleteDevice={deleteDevice}
            />
        </Wrapper>
    );
};

export default App;

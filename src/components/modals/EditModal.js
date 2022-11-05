import React from 'react';
import styled from 'styled-components';
import Button from '../basic/Button';
import Modal from '../basic/Modal';
import Input from '../basic/Input';
import Select from '../basic/Select';

const Title = styled.h5`
    margin-bottom: 0;
`;

const Form = styled.form`
    column-gap: 2rem;
    row-gap: 0.5rem;
    margin-bottom: 0;
    align-items: center;
    display: grid;
    grid-template-columns: max-content 1fr;
`;

const Label = styled.label``;

const EditButton = styled(Button)`
    min-width: 150px;
    text-align: center;
`;

/**
 * Ideally, I would NOT hard code these options. I would either:
 * 1. Pull them from the server. (Best-in-slot option)
 * 2. Collect them from the list of devices that I have.
 */
const typeOptions = [
    { label: 'Mac', value: 'MAC' },
    { label: 'Windows Workstation', value: 'WINDOWS_WORKSTATION' },
    { label: 'Windows Server', value: 'WINDOWS_SERVER' },
];

const Header = () => {
    return <Title>Update Device</Title>;
};

const Body = ({
    system_name,
    type,
    hdd_capacity,
    typeOptions,
    changeSystemName,
    changeType,
    changeHDDCapacity,
    editDevice,
}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        editDevice();
    };

    return (
        <Form id="editModalForm" onSubmit={onSubmit}>
            <Label>System Name</Label>
            <Input
                required
                value={system_name}
                onChange={changeSystemName}
            ></Input>
            <Label>Type</Label>
            <Select
                required
                options={typeOptions}
                onChange={changeType}
                value={type}
            ></Select>
            <Label>HDD Capacity</Label>
            <Input
                type="number"
                min="1"
                required
                value={hdd_capacity}
                onChange={changeHDDCapacity}
            ></Input>
        </Form>
    );
};

const Footer = () => {
    return (
        <EditButton type="submit" form="editModalForm">
            Update
        </EditButton>
    );
};

const EditModal = ({ device, isVisible, closeEditModal, editDevice }) => {
    const [system_name, setSystemName] = React.useState('');
    const [type, setType] = React.useState('MAC');
    const [hdd_capacity, setHDDCapacity] = React.useState(1);

    const changeSystemName = (e) => {
        setSystemName(e.target.value);
    };
    const changeType = (e) => {
        setType(e.target.value);
    };
    const changeHDDCapacity = (e) => {
        setHDDCapacity(e.target.value);
    };

    const resetInputs = () => {
        setSystemName('');
        setType('MAC');
        setHDDCapacity(1);
    };
    const _editDevice = () => {
        editDevice({ id: device.id, system_name, type, hdd_capacity });
        resetInputs();
    };

    React.useEffect(() => {
        if (!device) return;

        setSystemName(device.system_name);
        setType(device.type);
        setHDDCapacity(device.hdd_capacity);
    }, [device]);

    const header = <Header />;
    const body = (
        <Body
            system_name={system_name}
            typeOptions={typeOptions}
            type={type}
            hdd_capacity={hdd_capacity}
            changeSystemName={changeSystemName}
            changeType={changeType}
            changeHDDCapacity={changeHDDCapacity}
            editDevice={_editDevice}
        />
    );
    const footer = <Footer />;

    return (
        <Modal
            isVisible={isVisible}
            onClose={closeEditModal}
            header={header}
            body={body}
            footer={footer}
        ></Modal>
    );
};

export default EditModal;

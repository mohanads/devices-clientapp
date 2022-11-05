import React from 'react';
import styled from 'styled-components';
import Actions from './Actions';
import Capacity from './Capacity';
import { motion } from 'framer-motion';
import MachineType from './MachineType';
import OperatingSystem from './OperatingSystem';

const WORKSTATION_TYPE = 'Workstation';
const SERVER_TYPE = 'Server';
const DEFAULT_TYPE = WORKSTATION_TYPE;

const operatingSystemMap = {
    Mac: 'macOS',
    Windows: 'Windows',
};

/**
 * Extracts the Operating System of a Device, either macOS or Windows, from the Type attribute.
 * If no Machine Type is explicitly specified in the Type, then we assume Windows.
 * @param {string} type The abstract type of a Device. Example: 'Windows Workstation'.
 * @returns The Operating System of a Device.
 */
const getOperatingSystem = (type) => {
    if (type == null) return null;

    const _type = type.toLowerCase();

    for (let abstractType in operatingSystemMap) {
        if (_type.indexOf(abstractType.toLowerCase()) !== -1)
            return operatingSystemMap[abstractType];
    }
    return 'Windows';
};

/**
 * Extracts the Machine Type of a Device, either Workstation or Server, from the Type attribute.
 * If no Machine Type is explicilty specified in the Type, then we assume Workstation.
 * @param {string} type The abstract type of a Device. Example: 'Windows Workstation'.
 * @returns The Machine Type of a Device.
 */
const getMachineType = (type) => {
    if (type == null) return null;

    const _type = type.toLowerCase();

    if (_type.indexOf('workstation') !== -1) return WORKSTATION_TYPE;
    else if (_type.indexOf('server') !== -1) return SERVER_TYPE;
    else return DEFAULT_TYPE;
};

const Wrapper = styled(motion.div)`
    padding: 1.5rem;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.15);
    row-gap: 0.75rem;
    display: grid;
    overflow: hidden;
    border-radius: var(--dca-border-radius_default);
    background-color: var(--dca-background-color_primary);
`;
const Header = styled.div`
    column-gap: 1rem;
    grid-template-columns: 1fr max-content;
    display: grid;
    align-items: flex-start;
`;
const Name = styled.div`
    font-size: 1.1rem;
    margin-bottom: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
`;
const Metadata = styled.div`
    gap: 0.5rem 1rem;
    display: flex;
    flex-direction: row;
    color: hsl(0, 0%, 50%);
`;

const Device = ({
    id,
    system_name,
    type,
    hdd_capacity,
    openDeleteModal,
    openEditModal,
}) => {
    const operatingSystem = getOperatingSystem(type);
    const machineType = getMachineType(type);

    return (
        <Wrapper
            layout="position"
            key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header>
                <Name>{system_name}</Name>
                <Actions
                    openDeleteModal={() => {
                        openDeleteModal(id);
                    }}
                    openEditModal={() => {
                        openEditModal(id);
                    }}
                />
            </Header>
            <Metadata>
                <OperatingSystem operatingSystem={operatingSystem} />
                <MachineType machineType={machineType} />
                <Capacity hdd_capacity={hdd_capacity} />
            </Metadata>
        </Wrapper>
    );
};

export default Device;

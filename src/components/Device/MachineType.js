import React from 'react';
import styled from 'styled-components';
import Tooltip from '../basic/Tooltip';

/**
 * Maps the Machine Type to a
 * corresponding FontAwesome icon's className.
 */
const machineTypeIconMap = {
    Workstation: 'fal fa-desktop',
    Server: 'fal fa-server',
};

const Icon = styled.i``;

const MachineTypeIcon = ({ machineType }) => {
    const tooltip = `${machineType} Device`;

    return (
        <Tooltip content={tooltip}>
            <div>
                <Icon className={machineTypeIconMap[machineType]} />
            </div>
        </Tooltip>
    );
};

export default MachineTypeIcon;

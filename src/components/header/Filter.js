import React from 'react';
import styled from 'styled-components';
import Select from '../basic/Select';

const Wrapper = styled.div`
    column-gap: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CustomSelect = styled(Select)`
    width: 150px;
`;

const Filter = ({ filter, changeFilter }) => {
    /**
     * Ideally, I would NOT hard-code these filter options.
     */
    const filters = [
        { value: 'All Devices', label: 'All Devices' },
        { value: 'MAC', label: 'Mac' },
        { value: 'WINDOWS_SERVER', label: 'Windows Server' },
        { value: 'WINDOWS_WORKSTATION', label: 'Windows Workstation' },
    ];

    const onChange = (e) => {
        changeFilter(e.target.value);
    };

    return (
        <Wrapper>
            <span>Showing</span>
            <CustomSelect
                options={filters}
                value={filter}
                onChange={onChange}
            />
        </Wrapper>
    );
};

export default Filter;

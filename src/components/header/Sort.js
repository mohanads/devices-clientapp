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

const Sort = ({ sortingBy, changeSortingBy }) => {
    const sortableProperties = [
        { label: 'System Name', value: 'system_name' },
        { label: 'HDD Capacity', value: 'hdd_capacity' },
    ];

    const onChange = (e) => {
        changeSortingBy(e.target.value);
    };

    return (
        <Wrapper>
            <span>Sorting by</span>
            <CustomSelect
                options={sortableProperties}
                value={sortingBy}
                onChange={onChange}
            />
        </Wrapper>
    );
};

export default Sort;

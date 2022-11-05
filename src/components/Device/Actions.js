import React from 'react';
import styled from 'styled-components';
import Dropdown from '../basic/Dropdown';
import Button from '../basic/Button';

const Container = styled.div`
    gap: 0.5rem;
    display: grid;
`;

const Actions = ({ openDeleteModal, openEditModal }) => {
    const dropdownRef = React.useRef(null);

    const hideDropdown = () => {
        dropdownRef.current._tippy.hide();
    };

    const onEditClick = () => {
        hideDropdown();
        openEditModal();
    };

    const onDeleteClick = () => {
        hideDropdown();
        openDeleteModal();
    };

    return (
        <Dropdown ref={dropdownRef}>
            <Container>
                <Button variant="secondary" onClick={onEditClick}>
                    Update
                </Button>
                <Button variant="destructive" onClick={onDeleteClick}>
                    Delete
                </Button>
            </Container>
        </Dropdown>
    );
};

export default Actions;

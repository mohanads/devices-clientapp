import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
    z-index: 2;
    padding: 1rem;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
`;

const Backdrop = ({ children, onClick }) => {
    const _onClick = (e) => {
        if (e.target === e.currentTarget) onClick(e);
    };

    return (
        <Wrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={_onClick}
        >
            {children}
        </Wrapper>
    );
};

export default Backdrop;

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    padding: 0.5rem 1.5rem;
    transition-property: box-shadow, background-color, color, transform;
    outline: none !important;
    background-color: transparent;
    border: none;
    box-shadow: none;
    color: white;
    transition-duration: var(--dca-transition-duration_default);
    background-color: var(--dca-background-color_button-primary);
    border-radius: var(--dca-border-radius_default);

    &:focus {
        box-shadow: var(--dca-box-shadow_focus);
    }

    &:hover {
        background-color: var(--dca-background-color_button-primary-hover);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const Destructive = styled(Wrapper)`
    color: white;
    background-color: var(--dca-background-color_button-destructive);

    &:hover {
        background-color: var(--dca-background-color_button-destructive-hover);
    }
`;

const Secondary = styled(Wrapper)`
    color: black;
    background-color: var(--dca-background-color_button-secondary);

    &:hover {
        background-color: var(--dca-background-color_button-secondary-hover);
    }
`;

const Primary = styled(Wrapper)`
    color: white;
    background-color: var(--dca-background-color_button-primary);

    &:hover {
        background-color: var(--dca-background-color_button-primary-hover);
    }
`;

const Link = styled(Wrapper)`
    color: var(--dca-color_text-link);
    padding: 0;
    border-radius: 0;
    box-shadow: none;
    transform: none;
    background-color: transparent;

    &:hover {
        background-color: transparent;
    }
`;

const getComponentVariant = (variant) => {
    switch (variant) {
        case 'destructive':
            return Destructive;
        case 'secondary':
            return Secondary;
        case 'link':
            return Link;
        case 'primary':
        default:
            return Primary;
    }
};

const Button = React.forwardRef(({ children, variant, ...rest }, ref) => {
    const Component = getComponentVariant(variant);

    return (
        <Component ref={ref} variant={variant} {...rest}>
            {children}
        </Component>
    );
});

export default Button;

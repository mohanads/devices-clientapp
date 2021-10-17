import React 	from 'react';
import styled 	from 'styled-components';

const Wrapper = styled.div``;

const Capacity = ({ hddCapacity }) =>
{
	return (
		<Wrapper>{ hddCapacity } GB</Wrapper>
	);
};

export default Capacity;
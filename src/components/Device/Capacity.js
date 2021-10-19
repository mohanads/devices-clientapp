import React 	from 'react';
import styled 	from 'styled-components';

const Wrapper = styled.div``;

const Capacity = ({ hdd_capacity }) =>
{
	return (
		<Wrapper>{ hdd_capacity } GB</Wrapper>
	);
};

export default Capacity;
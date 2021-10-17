import React 		from 'react';
import styled 		from 'styled-components';
import AddButton 	from '../AddButton';
import Sort 		from './Sort';
import Filter 		from './Filter';

const Wrapper = styled.div`
	padding: 				1rem 0;
	overflow: 				hidden;
	white-space: 			nowrap;
	border-bottom: 			var(--dca-border_default);
	background-color: 		var(--dca-background-color_primary);
`;
const Container = styled.div.attrs(() => { return { className: 'container' } })`
	grid-template-columns: 	1fr max-content;
	gap: 					1rem;
	display: 				grid;
`;
const SortFilterContainer = styled(Container)`
	column-gap: 			2rem;
	display: 				flex;
	flex-direction: 		row;
	flex-wrap: 				wrap;
`;
const Title = styled.h3`
	margin-bottom: 	0;
`;

const Header = ({ openAddModal, sortingBy, changeSortingBy, filter, changeFilter }) =>
{
	return (
		<div>
			<Wrapper>
				<Container>
					<Title>Devices</Title>
					<AddButton onClick={ openAddModal } />
				</Container>
			</Wrapper>
			<Wrapper>
				<SortFilterContainer>
					<Sort sortingBy={ sortingBy } changeSortingBy={ changeSortingBy } />
					<Filter filter={ filter } changeFilter={ changeFilter } />
				</SortFilterContainer>
			</Wrapper>
		</div>
	);
};

export default Header;
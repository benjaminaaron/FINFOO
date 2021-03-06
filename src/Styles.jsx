import styled from 'styled-components';
import colors from './config/colors-config';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;

	.MuiPaper-root {
		padding: 1em;
		margin: 25px;
		width: 400px;
		opacity: .85;
	}

	h3 {
		text-align: center;
		color: ${colors.main};
		margin-bottom: 25px;
	}
`

export default Container;
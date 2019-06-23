import React from 'react';
import { LoadingContainer } from 'drizzle-react-components';
import ContractForm from '../ContractForm';
import ContractData from '../ContractData';
import Container from '../Styles'

const NewActionType = () => (
	<Container>
		<LoadingContainer>
			<ContractForm
				contract="Fin4Main"
				method="createNewToken"
				title="Create a New Action Type"
			/>
		</LoadingContainer>

		<LoadingContainer>
			<ContractData
				contract="Fin4Main"
				method="getChildren"
				title="All Available Action Types"
				header={["Name", "Symbol"]}
			/>
		</LoadingContainer>
	</Container>
);

export default NewActionType;

import { drizzleConnect } from 'drizzle-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Web3 from 'web3';

class ContractInjector extends Component {
	constructor(props, context) {
		super(props);
    
        const web3 = new Web3(window.web3.currentProvider);

        var fin4MainJson = require('./build/contracts/Fin4Main.json');
        var fin4ClaimJson = require('./build/contracts/Fin4Claim.json');

        //var Fin4MainContractObject = context.drizzle.options
        //var Fin4ClaimContractObject = context.drizzle.options.contracts[1];
        //console.log(this.props.contracts.Fin4Main.synced);

        /*var Fin4MainConfig = {
            contractName: "Fin4Main",
            web3Contract: new web3.eth.Contract(fin4MainJson.abi,  addresses.Fin4Main_address)
        }
        var Fin4ClaimConfig = {
            contractName: "Fin4Claim",
            web3Contract: new web3.eth.Contract(fin4ClaimJson.abi,  addresses.Fin4Claim_address)
        }
        context.drizzle.addContract(Fin4MainConfig);
        context.drizzle.addContract(Fin4ClaimConfig);*/

        //scontext.drizzle.contracts.Fin4Main.address = addresses.Fin4Main_address;
        //context.drizzle.contracts.Fin4Claim.address = addresses.Fin4Claim_address;

        this.context = context;
	}

	render() {

		if (this.props.contracts.Fin4Main.initialized && this.context.drizzle.contractList.length == 2) {
            var addresses = require('./config/addresses.json');

            this.context.drizzle.contracts.Fin4Main.address = addresses.Fin4Main_address;
            this.context.drizzle.contracts.Fin4Main.options.address = addresses.Fin4Main_address;
            this.context.drizzle.contracts.Fin4Claim.address = addresses.Fin4Claim_address;  
            this.context.drizzle.contracts.Fin4Claim.options.address = addresses.Fin4Claim_address;  

            console.log(this.context.drizzle.contracts);
            console.log(this.props);
        }

		return (
			"Finished injecting contracts"
		);
	}
}

ContractInjector.contextTypes = {
	drizzle: PropTypes.object
};

const mapStateToProps = state => {
	return {
		contracts: state.contracts
	};
};

export default drizzleConnect(ContractInjector, mapStateToProps);

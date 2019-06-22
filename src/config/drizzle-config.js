import Fin4Main from '../build/contracts/Fin4Main.json';
import Fin4Claim from '../build/contracts/Fin4Claim.json';
//import Web3 from 'web3';
//const web3 = new Web3(window.web3.currentProvider);

const drizzleConfig = {
	web3: {
		block: false,
		fallback: {
			type: 'ws',
			url: 'ws://127.0.0.1:7545'
		}
	},
	contracts: [Fin4Main, Fin4Claim]
	/*contracts: [
		{
		  contractName: 'Fin4Main',
		  web3Contract: new web3.eth.Contract(Fin4Main.abi)
		},
		{
			contractName: 'Fin4Claim',
			web3Contract: new web3.eth.Contract(Fin4Claim.abi)
		}
	  ]*/
};

export default drizzleConfig;

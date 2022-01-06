/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");
 require("@nomiclabs/hardhat-etherscan");
 require('@openzeppelin/hardhat-upgrades');
 const { mnemonic, apiKey, infuraKey } = require('./secrets.json');
 task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
   const accounts = await hre.ethers.getSigners();
 
   for (const account of accounts) {
     console.log(account.address);
   }
 });
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
        url: 'https://rinkeby.infura.io/v3/' + infuraKey,
        gas: 10000000,
        accounts: { mnemonic: mnemonic }
    },
    ropsten: {
        url: 'https://ropsten.infura.io/v3/' + infuraKey,
        gas: 10000000,
        accounts: { mnemonic: mnemonic }
    },
    testnet: {
        url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        gas: 10000000,
        accounts: { mnemonic: mnemonic }
    },
    main: {
        url: "https://bsc-dataseed.binance.org/",
        gas: 10000000,
        accounts: { mnemonic: mnemonic }
    },
    mumbai: {
        url: 'https://rpc-mumbai.maticvigil.com',
        accounts: { mnemonic: mnemonic },
        timeout: 40000,
    },
    polygon: {
        url: 'https://polygon-rpc.com',
        accounts: { mnemonic: mnemonic },
        timeout: 900000,
    }
},
};

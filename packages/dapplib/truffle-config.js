require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index reward stereo collect gesture casual equal giant'; 
let testAccounts = [
"0xab9d527e11448e68d0df79866eecc0f9c1f087a3feac2ba56678701e4c226078",
"0x34d10d290cb192d69778cbdb370b6273afba5a6a918ab386d9af9f619884cf64",
"0x28b8dcc34ab159b53ca9407f58d5603d873c17ee891526bd17fe094a28fc3a9f",
"0x65afc5a79f38aa8f6f9fbd955d2fb2a4cdb2dd6fb971828e1fb0d862afd9b36a",
"0xf5bfb28c5d26747bd4eb6ea9ded8aabd9eda20e2131638c539de3f481049faa4",
"0xae5a248ea1c2bf24a001e7a42391505a712899cc4deefd2acaf63175cedd79c6",
"0xe8947e99f5fab881aa0f42934c1f3135c292e368c4186a88b8d1e75bf4b57fbc",
"0x4cac3bf6412031a740c02607dfe8cc9563ee7bd392bd050784ff0fd5649c43f3",
"0x078d8dad513cb47343b149dc43828d6783f77cc9fba768afbd409eb88be0c9c4",
"0x4deb948dc8a2f9216e77459c93c4410a4a59659b1faf13344050f79b5bdf42d0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


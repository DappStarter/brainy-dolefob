require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name rate sad million grid kitchen metal genuine'; 
let testAccounts = [
"0x86afe4d00abd36533138d1765341ce70f6935e8e9ccf6ebec208f042d7ec0020",
"0xb3f84e8c11d86e889d80ab7c33146e86db89df14f75699bcf00813e4d09c239a",
"0xdaa64c763d816cf42226f2598a081ab85040275973e2b8d4e8676a07fa69a99d",
"0xe6b21256553003deec6ae8c75fe468d5e99e8decf2806bed1b3e7ed491420765",
"0x41cf22044ecaffe1b9437a6ae14cbc3be867fc7d1e6a58f2be174debede20de6",
"0xa889679280cdf5270450a2d209c0bbf856c54572da85e8f13910e1ac36e2b74e",
"0x83f229cfeac7ff9964d0104ebc8ad5dcd87d09bb177079f0af06d67e3f7e6efa",
"0x52de30cd09f5b9e025f0540fec63fde97e60eee3f9559d3aa1bc22ef6502e8ee",
"0x28f548ec2e7c7d15b75f81726be8863c1b051c60445a89cb5db933b80ab2234c",
"0x4e0577225046b6705a724431f3bdd40ec874ea3ba0145f2fd3c946202159d2a0"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

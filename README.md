# ProofOfTruth

Simple smart contract to verify authenticity of messages


### Prerequisites

    npm install -g ethereumjs-testrpc

    npm install -g truffle

    mkdir my-ico && cd my-ico

    truffle init

    npm install zeppelin-solidity

### Installing

(1) install truffle and testrpc

    npm install -g truffle

    npm install -g ethereumjs-testrpc

(2) initialized a webpack project

    truffle init webpack

(3) started up testrpc

    testrpc

(4) compiled contracts

    truffle compile

(5) deployed contracts

    truffle migrate

(6) started development web server

    npm run dev

## Deployment


#issues network configuration when running truffle compile (./truffle.js)

    module.exports = {

      networks: {

        development: {

          host: "localhost",

          port: 8545,

          network_id: "*" // Match any network id
  
        }

      }

    };
    
## Deployment

    # Terminal 1
        testrpc
        
    # Terminal 2
        truffle console
            var pot = ProofOfTruth.at(ProofOfTruth.address)
            //undefined
            pot.checkDocument('I am Satoshi');
            //false
            pot.notarize('I am Satoshi');
            //terminal 1: eth_getTransactionReceipt
            pot.checkDocument('I am Satoshi');
            //true

## Acknowledgments

* Feel free to comment!

var ProofOfTruth = artifacts.require("./ProofOfTruth.sol");
module.exports = function(deployer) {
  deployer.deploy(ProofOfTruth);
};
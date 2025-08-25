import {ethers} from "ethers";

// Generating the unique contract address with EOA and nonce
function generateContractAddress(deployer: string, nonce: number): string {
    return ethers.utils.generateContractAddress({
        from: deployer,
        nonce: nonce,
    })
}
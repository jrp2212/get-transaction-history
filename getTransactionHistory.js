// Import necessary modules
const { Alchemy, Network, fromHex } = require("alchemy-sdk");
require('dotenv').config();

// Configure Alchemy SDK with API key and network
const config = {
  apiKey: process.env.API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

// Address to fetch transactions from (replace with your own)
const fromAddress = "vitalik.eth"

// Main function to fetch all transactions for an address
const main = async () => {
    try {
        // Get all transactions for an address from block 0 and store in txns
        const txns = await alchemy.core.getAssetTransfers({
        fromBlock: "0x0",
        fromAddress: fromAddress,
        category: ["external", "internal", "erc20", "erc721", "erc1155"],
        });
    
        console.log(txns);
    } catch (error) {
        console.error('Error fetching transaction history:', error);
    }
}

main();

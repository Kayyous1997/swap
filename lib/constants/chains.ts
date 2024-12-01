export const SUPPORTED_CHAINS = {
  mainnet: {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/NPzcXlJT0ckuLe4dx-VBV3VSc8zqUPPc'
  },
  sepolia: {
    chainId: 11155111,
    name: 'Sepolia',
    currency: 'ETH',
    explorerUrl: 'https://sepolia.etherscan.io',
    rpcUrl: 'https://eth-sepolia.g.alchemy.com/v2/NPzcXlJT0ckuLe4dx-VBV3VSc8zqUPPc'
  }
} as const;

export type ChainId = keyof typeof SUPPORTED_CHAINS;
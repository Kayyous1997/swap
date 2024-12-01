import { atom } from 'jotai';
import { ethers } from 'ethers';
import { type ChainId, SUPPORTED_CHAINS } from '../constants/chains';

import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}


interface Web3State {
  provider: ethers.BrowserProvider | null;
  signer: ethers.JsonRpcSigner | null;
  address: string | null;
  chainId: number | null;
  isConnecting: boolean;
  error: Error | null;
}

export const web3Atom = atom<Web3State>({
  provider: null,
  signer: null,
  address: null,
  chainId: null,
  isConnecting: false,
  error: null,
});

export const connectWallet = async (setWeb3: (update: Partial<Web3State>) => void) => {
  try {
    setWeb3({ isConnecting: true, error: null });

    if (!window.ethereum) {
      throw new Error('No Ethereum wallet found. Please install MetaMask.');
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    const network = await provider.getNetwork();
    const chainId = Number(network.chainId);

    setWeb3({
      provider,
      signer,
      address,
      chainId,
      isConnecting: false,
    });

    // Setup event listeners
    window.ethereum.on('accountsChanged', () => {
      window.location.reload();
    });

    window.ethereum.on('chainChanged', () => {
      window.location.reload();
    });

  } catch (error) {
    setWeb3({
      isConnecting: false,
      error: error instanceof Error ? error : new Error('Failed to connect wallet'),
    });
  }
};

export const disconnectWallet = (setWeb3: (update: Partial<Web3State>) => void) => {
  setWeb3({
    provider: null,
    signer: null,
    address: null,
    chainId: null,
    error: null,
  });
};

export const switchNetwork = async (chainId: ChainId) => {
  if (!window.ethereum) return;

  const chain = SUPPORTED_CHAINS[chainId];
  
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${chain.chainId.toString(16)}` }],
    });
  } catch (error: any) {
    if (error.code === 4902) {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: `0x${chain.chainId.toString(16)}`,
          chainName: chain.name,
          nativeCurrency: {
            name: chain.currency,
            symbol: chain.currency,
            decimals: 18,
          },
          rpcUrls: [chain.rpcUrl],
          blockExplorerUrls: [chain.explorerUrl],
        }],
      });
    }
  }
};
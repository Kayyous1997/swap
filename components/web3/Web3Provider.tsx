"use client";

import { createWeb3Modal } from '@web3modal/wagmi';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet, sepolia, Chain } from 'wagmi/chains'; // Ensure Chain is imported from wagmi/chains
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode } from 'react';


// Get projectId at https://cloud.walletconnect.com
const projectId = '6f7da8ecb5707a7c8340093786426533';

const metadata = {
  name: 'SwapX',
  description: 'Swap tokens with ease',
  url: 'https://swapx.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

// Explicitly type 'chains' as a tuple of Chain objects
const chains: readonly [Chain, ...Chain[]] = [mainnet, sepolia]; // Ensure 'chains' is a tuple

// Create the config object
const config = createConfig({
  chains,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

// Initialize Web3Modal with the Wagmi configuration
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  metadata, // Pass metadata here instead
  themeMode: 'dark',
});
// Initialize React Query's QueryClient
const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

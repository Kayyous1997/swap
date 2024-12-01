"use client";

import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useAtom } from 'jotai';
import { web3Atom, connectWallet, disconnectWallet } from '@/lib/store/web3Store';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SUPPORTED_CHAINS } from '@/lib/constants/chains';

export function ConnectWallet() {
  const [web3State, setWeb3State] = useAtom(web3Atom);
  const { address, isConnecting, error } = web3State;

  const updateWeb3State = (update: Partial<typeof web3State>) => {
    setWeb3State((prev) => ({ ...prev, ...update }));
  };

  const handleConnect = async () => {
    await connectWallet(updateWeb3State);
  };

  const handleDisconnect = () => {
    disconnectWallet(updateWeb3State);
  };

  if (error) {
    return (
      <Button 
        variant="destructive" 
        className="hidden sm:flex"
        onClick={handleConnect}
      >
        <Wallet className="mr-2 h-4 w-4" />
        Retry Connection
      </Button>
    );
  }

  if (!address) {
    return (
      <Button 
        variant="outline" 
        className="hidden sm:flex"
        onClick={handleConnect}
        disabled={isConnecting}
      >
        <Wallet className="mr-2 h-4 w-4" />
        {isConnecting ? 'Connecting...' : 'Connect Wallet'}
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="hidden sm:flex">
          <Wallet className="mr-2 h-4 w-4" />
          {`${address.slice(0, 6)}...${address.slice(-4)}`}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => window.open(`${SUPPORTED_CHAINS.mainnet.explorerUrl}/address/${address}`)}>
          View on Explorer
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDisconnect}>
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import Link from "next/link";
import { SettingsModal } from "../features/settings/SettingsModal";
import { ThemeToggle } from "../theme/ThemeToggle";
import { ConnectWallet } from "../web3/ConnectWallet";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold sm:inline-block">
              SwapX
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80"
            >
              Swap
            </Link>
            <Link
              href="/liquidity"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Liquidity
            </Link>
            <Link
              href="/portfolio"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Portfolio
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <SettingsModal />
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
}
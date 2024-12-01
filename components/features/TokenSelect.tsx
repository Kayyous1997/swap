"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, Search } from "lucide-react";
import { useState } from "react";

const tokens = [
  {
    value: "eth",
    label: "Ethereum",
    symbol: "ETH",
    balance: "0.42",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=ETH",
  },
  {
    value: "btc",
    label: "Bitcoin",
    symbol: "BTC",
    balance: "0.015",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=BTC",
  },
  {
    value: "usdt",
    label: "Tether",
    symbol: "USDT",
    balance: "1,250.00",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=USDT",
  },
  {
    value: "usdc",
    label: "USD Coin",
    symbol: "USDC",
    balance: "1,500.00",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=USDC",
  },
  {
    value: "dai",
    label: "Dai",
    symbol: "DAI",
    balance: "2,000.00",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=DAI",
  },
];

const popularTokens = ["eth", "btc", "usdt", "usdc"];

interface TokenSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function TokenSelect({ value, onChange }: TokenSelectProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const selectedToken = tokens.find((token) => token.value === value);

  const filteredTokens = tokens.filter(
    (token) =>
      token.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const popularTokensList = tokens.filter((token) =>
    popularTokens.includes(token.value)
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[140px] justify-between bg-background/50 backdrop-blur-sm hover:bg-background/80"
        >
          {selectedToken ? (
            <div className="flex items-center gap-2">
              <img
                src={selectedToken.icon}
                alt={selectedToken.label}
                className="h-5 w-5 rounded-full"
              />
              <span>{selectedToken.symbol}</span>
            </div>
          ) : (
            "Select token"
          )}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select a token</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name or paste address"
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {popularTokensList.map((token) => (
              <Button
                key={token.value}
                variant="secondary"
                className="flex items-center gap-2"
                onClick={() => {
                  onChange(token.value);
                  setOpen(false);
                }}
              >
                <img
                  src={token.icon}
                  alt={token.label}
                  className="h-4 w-4 rounded-full"
                />
                {token.symbol}
              </Button>
            ))}
          </div>

          <ScrollArea className="h-[300px] pr-4">
            <div className="space-y-1">
              {filteredTokens.map((token) => (
                <Button
                  key={token.value}
                  variant="ghost"
                  className="w-full justify-between font-normal"
                  onClick={() => {
                    onChange(token.value);
                    setOpen(false);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={token.icon}
                      alt={token.label}
                      className="h-6 w-6 rounded-full"
                    />
                    <div className="text-left">
                      <div>{token.symbol}</div>
                      <div className="text-sm text-muted-foreground">
                        {token.label}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{token.balance}</span>
                    {value === token.value && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </div>
                </Button>
              ))}
              {filteredTokens.length === 0 && (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  No tokens found.
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
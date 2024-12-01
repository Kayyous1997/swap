"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowDownUp, Settings } from "lucide-react";
import { useState } from "react";
import { TokenSelect } from "./TokenSelect";

export function SwapCard() {
  const [fromToken, setFromToken] = useState("eth");
  const [toToken, setToToken] = useState("usdt");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  const handleSwapTokens = () => {
    const tempToken = fromToken;
    setFromToken(toToken);
    setToToken(tempToken);
    
    const tempAmount = fromAmount;
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  return (
    <Card className="w-full max-w-[450px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <h2 className="text-2xl font-bold tracking-tight">Swap</h2>
       
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <Input
              type="number"
              placeholder="0.0"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="bg-background/50 backdrop-blur-sm"
            />
            <TokenSelect value={fromToken} onChange={setFromToken} />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="secondary" size="sm" className="text-xs">
              50%
            </Button>
            <Button variant="secondary" size="sm" className="text-xs">
              MAX
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={handleSwapTokens}
          >
            <ArrowDownUp className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <Input
              type="number"
              placeholder="0.0"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              className="bg-background/50 backdrop-blur-sm"
            />
            <TokenSelect value={toToken} onChange={setToToken} />
          </div>
        </div>

        <div className="space-y-2 rounded-lg bg-secondary/50 p-3 text-sm">
          <div className="flex justify-between text-muted-foreground">
            <span>Price Impact</span>
            <span>{"< 0.01%"}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Network Fee</span>
            <span>~$2.50</span>
          </div>
        </div>

        <Button className="w-full" size="lg">
          Connect Wallet
        </Button>
      </CardContent>
    </Card>
  );
}
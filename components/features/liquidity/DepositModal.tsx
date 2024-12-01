"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TokenSelect } from "@/components/features/TokenSelect";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DepositModalProps {
  poolId: string;
  token0Symbol: string;
  token1Symbol: string;
}

export function DepositModal({ poolId, token0Symbol, token1Symbol }: DepositModalProps) {
  const [amount0, setAmount0] = useState("");
  const [amount1, setAmount1] = useState("");

  const handleDeposit = () => {
    console.log("Depositing to pool:", { poolId, amount0, amount1 });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Deposit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Liquidity</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <Label>First Token Amount</Label>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Balance: 1.5 {token0Symbol}</span>
                  <Button variant="ghost" size="sm" className="h-auto p-0 text-primary">
                    Max
                  </Button>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1">
                  <Input
                    type="number"
                    placeholder="0.0"
                    value={amount0}
                    onChange={(e) => setAmount0(e.target.value)}
                  />
                </div>
                <div className="flex h-10 items-center rounded-md border bg-muted px-3 font-medium">
                  {token0Symbol}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label>Second Token Amount</Label>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Balance: 2,700 {token1Symbol}</span>
                  <Button variant="ghost" size="sm" className="h-auto p-0 text-primary">
                    Max
                  </Button>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1">
                  <Input
                    type="number"
                    placeholder="0.0"
                    value={amount1}
                    onChange={(e) => setAmount1(e.target.value)}
                  />
                </div>
                <div className="flex h-10 items-center rounded-md border bg-muted px-3 font-medium">
                  {token1Symbol}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 rounded-lg bg-muted p-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                <span className="text-muted-foreground">Price Impact</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button">
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    The difference between the market price and estimated price due to trade size.
                  </TooltipContent>
                </Tooltip>
              </div>
              <span className="text-emerald-500">{`< 0.01%`}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Share of Pool</span>
              <span>0.06%</span>
            </div>
          </div>

          <Button className="w-full" onClick={handleDeposit}>
            Add Liquidity
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
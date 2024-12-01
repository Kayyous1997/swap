"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { TokenSelect } from "@/components/features/TokenSelect";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";

export function CreatePoolModal() {
  const [token0, setToken0] = useState("eth");
  const [token1, setToken1] = useState("usdt");
  const [amount0, setAmount0] = useState("");
  const [amount1, setAmount1] = useState("");

  const handleCreatePool = () => {
    // Handle pool creation logic here
    console.log("Creating pool with:", { token0, token1, amount0, amount1 });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Pool
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new liquidity pool</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <div>
              <Label>First Token</Label>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1">
                  <Input
                    type="number"
                    placeholder="0.0"
                    value={amount0}
                    onChange={(e) => setAmount0(e.target.value)}
                  />
                </div>
                <TokenSelect value={token0} onChange={setToken0} />
              </div>
            </div>

            <div>
              <Label>Second Token</Label>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1">
                  <Input
                    type="number"
                    placeholder="0.0"
                    value={amount1}
                    onChange={(e) => setAmount1(e.target.value)}
                  />
                </div>
                <TokenSelect value={token1} onChange={setToken1} />
              </div>
            </div>
          </div>

          <div className="space-y-2 rounded-lg bg-muted p-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Initial Price</span>
              <span>1 ETH = 1,800 USDT</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Pool Share</span>
              <span>100%</span>
            </div>
          </div>

          <Button className="w-full" onClick={handleCreatePool}>
            Create Pool
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
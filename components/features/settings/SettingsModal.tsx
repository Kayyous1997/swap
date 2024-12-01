"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { SlippageSettings } from "./SlippageSettings";
import { NetworkSettings } from "./NetworkSettings";

export function SettingsModal() {
  const [slippage, setSlippage] = useState(0.5);
  const [rpc, setRpc] = useState("default");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <SlippageSettings value={slippage} onChange={setSlippage} />
          <Separator />
          <NetworkSettings rpc={rpc} onRpcChange={setRpc} />
          <div className="rounded-lg bg-muted p-3 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Version</span>
              <span>1.0.0</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
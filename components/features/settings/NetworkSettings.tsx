"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface NetworkSettingsProps {
  rpc: string;
  onRpcChange: (value: string) => void;
}

export function NetworkSettings({ rpc, onRpcChange }: NetworkSettingsProps) {
  const [customRpc, setCustomRpc] = useState("");

  const handleRpcChange = (value: string) => {
    if (value === "custom") {
      onRpcChange(customRpc);
    } else {
      onRpcChange(value);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label>RPC Endpoint</Label>
        <Select value={rpc} onValueChange={handleRpcChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select RPC provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default RPC</SelectItem>
            <SelectItem value="infura">Infura</SelectItem>
            <SelectItem value="alchemy">Alchemy</SelectItem>
            <SelectItem value="custom">Custom</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {rpc === "custom" && (
        <div>
          <Label>Custom RPC URL</Label>
          <Input
            type="url"
            placeholder="https://..."
            value={customRpc}
            onChange={(e) => {
              setCustomRpc(e.target.value);
              onRpcChange(e.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
}
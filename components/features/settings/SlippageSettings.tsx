"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SlippageSettingsProps {
  value: number;
  onChange: (value: number) => void;
}

export function SlippageSettings({ value, onChange }: SlippageSettingsProps) {
  const presets = [0.1, 0.5, 1.0];

  const handleCustomInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 100) {
      onChange(newValue);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Label>Slippage Tolerance</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <button type="button">
                <Info className="h-4 w-4 text-muted-foreground" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              Your transaction will revert if the price changes unfavorably by more
              than this percentage.
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className="flex gap-2">
        {presets.map((preset) => (
          <Button
            key={preset}
            variant={value === preset ? "default" : "outline"}
            className="flex-1"
            onClick={() => onChange(preset)}
          >
            {preset}%
          </Button>
        ))}
        <div className="relative flex-1">
          <Input
            type="number"
            value={value}
            onChange={handleCustomInput}
            className="pr-8"
            min={0}
            max={100}
            step={0.1}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            %
          </span>
        </div>
      </div>
    </div>
  );
}
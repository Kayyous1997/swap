"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Coins, TrendingUp, Wallet } from "lucide-react";

const metrics = [
  {
    label: "Total Value Locked",
    value: "$1.2B",
    change: "+5.2%",
    icon: Wallet,
  },
  {
    label: "24h Volume",
    value: "$423.5M",
    change: "+12.3%",
    icon: TrendingUp,
  },
  {
    label: "Active Pools",
    value: "1,234",
    change: "+3.1%",
    icon: Coins,
  },
];

export function LiquidityMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {metrics.map((metric) => (
        <Card key={metric.label} className="bg-background/60 backdrop-blur">
          <CardContent className="flex items-center p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <metric.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold">{metric.value}</h3>
                <span className="text-sm text-emerald-500">{metric.change}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
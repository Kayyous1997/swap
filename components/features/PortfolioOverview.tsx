"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Wallet, LineChart, History } from "lucide-react";

const metrics = [
  {
    label: "Total Value",
    value: "$12,345.67",
    change: "+5.2%",
    icon: Wallet,
  },
  {
    label: "24h Profit/Loss",
    value: "+$423.50",
    change: "+12.3%",
    icon: LineChart,
  },
  {
    label: "Total Positions",
    value: "8",
    change: "+1",
    icon: History,
  },
];

export function PortfolioOverview() {
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
                <span className="flex items-center text-sm text-emerald-500">
                  {metric.change}
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
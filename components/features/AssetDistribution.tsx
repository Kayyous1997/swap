"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const assets = [
  {
    token: "ETH",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=ETH",
    amount: "2.5",
    value: "$4,523.75",
    percentage: 45,
  },
  {
    token: "BTC",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=BTC",
    amount: "0.12",
    value: "$3,456.78",
    percentage: 35,
  },
  {
    token: "USDT",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=USDT",
    amount: "2,500",
    value: "$2,500.00",
    percentage: 20,
  },
];

export function AssetDistribution() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Asset Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {assets.map((asset) => (
            <div key={asset.token} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={asset.icon}
                    alt={asset.token}
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="font-medium">{asset.token}</span>
                  <span className="text-sm text-muted-foreground">
                    {asset.amount} {asset.token}
                  </span>
                </div>
                <span className="font-medium">{asset.value}</span>
              </div>
              <Progress value={asset.percentage} className="h-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{asset.percentage}% of portfolio</span>
                <span>≈ {asset.value}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
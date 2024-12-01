"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExternalLink } from "lucide-react";

const positions = [
  {
    id: "1",
    pool: "ETH/USDT",
    token0Icon: "https://api.dicebear.com/7.x/shapes/svg?seed=ETH",
    token1Icon: "https://api.dicebear.com/7.x/shapes/svg?seed=USDT",
    value: "$2,345.67",
    pnl: "+$123.45",
    pnlPercentage: "+5.2%",
    apr: "12.4%",
  },
  {
    id: "2",
    pool: "BTC/USDC",
    token0Icon: "https://api.dicebear.com/7.x/shapes/svg?seed=BTC",
    token1Icon: "https://api.dicebear.com/7.x/shapes/svg?seed=USDC",
    value: "$1,234.56",
    pnl: "+$45.67",
    pnlPercentage: "+3.7%",
    apr: "10.8%",
  },
];

export function PositionsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Positions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pool</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>P/L</TableHead>
              <TableHead>APR</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {positions.map((position) => (
              <TableRow key={position.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <img
                        src={position.token0Icon}
                        alt=""
                        className="h-6 w-6 rounded-full ring-2 ring-background"
                      />
                      <img
                        src={position.token1Icon}
                        alt=""
                        className="h-6 w-6 rounded-full ring-2 ring-background"
                      />
                    </div>
                    <span className="font-medium">{position.pool}</span>
                  </div>
                </TableCell>
                <TableCell>{position.value}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-emerald-500">
                    <span>{position.pnl}</span>
                    <span className="text-sm">({position.pnlPercentage})</span>
                  </div>
                </TableCell>
                <TableCell className="text-emerald-500">{position.apr}</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Manage
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
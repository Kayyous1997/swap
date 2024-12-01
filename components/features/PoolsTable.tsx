"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Star } from "lucide-react";
import { DepositModal } from "./liquidity/DepositModal";

const pools = [
  {
    id: "1",
    name: "ETH/USDT",
    token0Icon: "https://api.dicebear.com/7.x/shapes/svg?seed=ETH",
    token1Icon: "https://api.dicebear.com/7.x/shapes/svg?seed=USDT",
    token0Symbol: "ETH",
    token1Symbol: "USDT",
    tvl: "$245.2M",
    volume24h: "$52.3M",
    fees24h: "$156.9K",
    apr: "12.4%",
    favorite: true,
  },
  {
    id: "2",
    name: "BTC/USDC",
    token0Icon: "https://api.dicebear.com/7.x/shapes/svg?seed=BTC",
    token1Icon: "https://api.dicebear.com/7.x/shapes/svg?seed=USDC",
    token0Symbol: "BTC",
    token1Symbol: "USDC",
    tvl: "$189.7M",
    volume24h: "$43.1M",
    fees24h: "$129.3K",
    apr: "10.8%",
    favorite: false,
  },
  {
    id: "3",
    name: "ETH/BTC",
    token0Icon: "https://api.dicebear.com/7.x/shapes/svg?seed=ETH",
    token1Icon: "https://api.dicebear.com/7.x/shapes/svg?seed=BTC",
    token0Symbol: "ETH",
    token1Symbol: "BTC",
    tvl: "$156.4M",
    volume24h: "$38.7M",
    fees24h: "$116.1K",
    apr: "9.6%",
    favorite: false,
  },
];

export function PoolsTable() {
  return (
    <div className="rounded-lg border bg-background/60 backdrop-blur">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px]"></TableHead>
            <TableHead>Pool</TableHead>
            <TableHead>TVL</TableHead>
            <TableHead>Volume (24h)</TableHead>
            <TableHead>Fees (24h)</TableHead>
            <TableHead>APR</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pools.map((pool) => (
            <TableRow key={pool.id}>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  className={pool.favorite ? "text-yellow-500" : "text-muted-foreground"}
                >
                  <Star className="h-4 w-4" />
                </Button>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img
                      src={pool.token0Icon}
                      alt=""
                      className="h-6 w-6 rounded-full ring-2 ring-background"
                    />
                    <img
                      src={pool.token1Icon}
                      alt=""
                      className="h-6 w-6 rounded-full ring-2 ring-background"
                    />
                  </div>
                  <span className="font-medium">{pool.name}</span>
                </div>
              </TableCell>
              <TableCell>{pool.tvl}</TableCell>
              <TableCell>{pool.volume24h}</TableCell>
              <TableCell>{pool.fees24h}</TableCell>
              <TableCell className="text-emerald-500">{pool.apr}</TableCell>
              <TableCell className="text-right">
                <DepositModal 
                  poolId={pool.id}
                  token0Symbol={pool.token0Symbol}
                  token1Symbol={pool.token1Symbol}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
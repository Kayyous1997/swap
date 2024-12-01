"use client";

import { Header } from "@/components/layout/Header";
import { LiquidityMetrics } from "@/components/features/LiquidityMetrics";
import { PoolsTable } from "@/components/features/PoolsTable";
import { SearchAndFilters } from "@/components/features/SearchAndFilters";

export default function LiquidityPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto min-h-screen px-4 py-20">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold">Liquidity Pools</h1>
            <p className="mt-2 text-muted-foreground">
              Provide liquidity to earn fees and rewards
            </p>
          </div>
          
          <LiquidityMetrics />
          <SearchAndFilters />
          <PoolsTable />
        </div>
      </main>
    </>
  );
}
"use client";

import { Header } from "@/components/layout/Header";
import { PortfolioOverview } from "@/components/features/portfolio/PortfolioOverview";
import { AssetDistribution } from "@/components/features/portfolio/AssetDistribution";
import { PositionsList } from "@/components/features/portfolio/PositionsList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto min-h-screen px-4 py-20">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold">Portfolio</h1>
            <p className="mt-2 text-muted-foreground">
              Track your assets and positions across all pools
            </p>
          </div>

          <PortfolioOverview />

          <Tabs defaultValue="assets" className="space-y-4">
            <TabsList>
              <TabsTrigger value="assets">Assets by Token</TabsTrigger>
              <TabsTrigger value="pools">Assets by Pool</TabsTrigger>
            </TabsList>
            <TabsContent value="assets" className="space-y-4">
              <AssetDistribution />
            </TabsContent>
            <TabsContent value="pools" className="space-y-4">
              <PositionsList />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
}
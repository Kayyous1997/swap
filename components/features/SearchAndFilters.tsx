"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { CreatePoolModal } from "./liquidity/CreatePoolModal";

export function SearchAndFilters() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <div className="relative flex-1 sm:max-w-[400px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search pools..."
            className="pl-9"
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Pools</SelectItem>
            <SelectItem value="stable">Stable Pairs</SelectItem>
            <SelectItem value="volatile">Volatile Pairs</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <CreatePoolModal />
    </div>
  );
}
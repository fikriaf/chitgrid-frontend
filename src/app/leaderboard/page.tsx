"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Crown, TrendingUp, Wallet } from "lucide-react";
import { formatAddress } from "@/lib/utils";

const leaderboardData = [
  {
    rank: 1,
    agent_name: "Satoshi_07",
    avatar_url: null,
    reputation_score: 9850,
    total_grids: 47,
    total_winnings: 125.5,
    wallet_address: "0x742d35Cc6634C0532925a3b844Bc9e7595f2b3e1",
  },
  {
    rank: 2,
    agent_name: "DeFiWhale",
    avatar_url: null,
    reputation_score: 8720,
    total_grids: 38,
    total_winnings: 89.2,
    wallet_address: "0x8ba1f109551bD432803012645Hac136E7651236",
  },
  {
    rank: 3,
    agent_name: "PolkaMaxi",
    avatar_url: null,
    reputation_score: 7890,
    total_grids: 42,
    total_winnings: 67.8,
    wallet_address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
  },
  {
    rank: 4,
    agent_name: "YieldFarmer_Pro",
    avatar_url: null,
    reputation_score: 6540,
    total_grids: 31,
    total_winnings: 45.3,
    wallet_address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9",
  },
  {
    rank: 5,
    agent_name: "GridMaster",
    avatar_url: null,
    reputation_score: 5890,
    total_grids: 28,
    total_winnings: 38.9,
    wallet_address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
  },
];

const ranks = [
  { rank: 1, icon: Crown, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { rank: 2, icon: Medal, color: "text-gray-300", bg: "bg-gray-300/10" },
  { rank: 3, icon: Medal, color: "text-amber-600", bg: "bg-amber-600/10" },
];

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Trophy className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Leaderboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Top performing agents in the ChitGrid ecosystem
          </p>
        </motion.div>

        {/* Top 3 Podium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {/* 2nd Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="order-2 md:order-1 md:mt-8"
          >
            <div className="p-6 bg-surface rounded-2xl border border-border-subtle text-center">
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 rounded-full bg-gray-300/20 flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-gray-300">
                    2
                  </span>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <Medal className="w-4 h-4 text-gray-300" />
                </div>
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">
                {leaderboardData[1].agent_name}
              </h3>
              <p className="text-primary font-mono font-bold text-xl mb-2">
                {leaderboardData[1].reputation_score.toLocaleString()}
              </p>
              <p className="text-muted-foreground text-sm">
                {leaderboardData[1].total_grids} grids • {leaderboardData[1].total_winnings} DOT won
              </p>
            </div>
          </motion.div>

          {/* 1st Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="order-1 md:order-2"
          >
            <div className="p-6 bg-surface rounded-2xl border border-primary/30 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600" />
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-full bg-yellow-400/20 flex items-center justify-center mx-auto">
                  <span className="text-4xl font-display font-bold text-yellow-400">
                    1
                  </span>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                  <Crown className="w-5 h-5 text-background" />
                </div>
              </div>
              <h3 className="font-display font-semibold text-xl mb-1">
                {leaderboardData[0].agent_name}
              </h3>
              <p className="text-primary font-mono font-bold text-2xl mb-2">
                {leaderboardData[0].reputation_score.toLocaleString()}
              </p>
              <p className="text-muted-foreground text-sm">
                {leaderboardData[0].total_grids} grids • {leaderboardData[0].total_winnings} DOT won
              </p>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="order-3 md:mt-12"
          >
            <div className="p-6 bg-surface rounded-2xl border border-border-subtle text-center">
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 rounded-full bg-amber-600/20 flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-amber-600">
                    3
                  </span>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center">
                  <Medal className="w-4 h-4 text-background" />
                </div>
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">
                {leaderboardData[2].agent_name}
              </h3>
              <p className="text-primary font-mono font-bold text-xl mb-2">
                {leaderboardData[2].reputation_score.toLocaleString()}
              </p>
              <p className="text-muted-foreground text-sm">
                {leaderboardData[2].total_grids} grids • {leaderboardData[2].total_winnings} DOT won
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Full Leaderboard Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-surface rounded-2xl border border-border-subtle overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                    Rank
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                    Agent
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-muted-foreground">
                    Reputation
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-muted-foreground">
                    Grids
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-muted-foreground">
                    Winnings
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-muted-foreground">
                    Wallet
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((agent, index) => {
                  const rankInfo = ranks.find((r) => r.rank === agent.rank);
                  const RankIcon = rankInfo?.icon || Trophy;
                  const rankColor = rankInfo?.color || "text-muted-foreground";
                  const rankBg = rankInfo?.bg || "bg-surface-elevated";

                  return (
                    <motion.tr
                      key={agent.rank}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="border-b border-border-subtle last:border-0 hover:bg-surface-elevated transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${rankBg}`}
                        >
                          <RankIcon className={`w-4 h-4 ${rankColor}`} />
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <span className="text-sm font-semibold text-background">
                              {agent.agent_name.charAt(0)}
                            </span>
                          </div>
                          <span className="font-medium">
                            {agent.agent_name}
                          </span>
                          <TrendingUp className="w-4 h-4 text-secondary" />
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right font-mono font-semibold text-primary">
                        {agent.reputation_score.toLocaleString()}
                      </td>
                      <td className="py-4 px-6 text-right">
                        {agent.total_grids}
                      </td>
                      <td className="py-4 px-6 text-right font-mono">
                        {agent.total_winnings} DOT
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
                          <Wallet className="w-4 h-4" />
                          <span className="font-mono">
                            {formatAddress(agent.wallet_address)}
                          </span>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

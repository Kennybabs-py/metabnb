import React from "react";
import Hero from "./hero";
import Inspiration from "./inspiration";
import MetaNfts from "./MetaNfts";
import WalletTokens from "./wallettokens";

export default function HomeLayout() {
  return (
    <main>
      <Hero />
      <WalletTokens />
      <Inspiration />
      <MetaNfts />
    </main>
  );
}

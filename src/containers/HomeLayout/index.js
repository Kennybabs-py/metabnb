import React from "react";
import Hero from "./hero";
import Inspiration from "./inspiration";
import WalletTokens from "./wallettokens";

export default function HomeLayout() {
  return (
    <main>
      <Hero />
      <WalletTokens />
      <Inspiration />
    </main>
  );
}

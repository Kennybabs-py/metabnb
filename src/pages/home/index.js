import Hero from "containers/HomeLayout/hero";
import WalletTokens from "containers/HomeLayout/wallettokens";
import React from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <WalletTokens />
    </main>
  );
}

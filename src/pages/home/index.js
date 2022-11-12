import Hero from "containers/HomeLayout/hero";
import Inspiration from "containers/HomeLayout/inspiration";
import WalletTokens from "containers/HomeLayout/wallettokens";

export default function Home() {
  return (
    <main>
      <Hero />
      <WalletTokens />
      <Inspiration />
    </main>
  );
}

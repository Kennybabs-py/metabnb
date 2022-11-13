import { useState } from "react";
import "./styles.scss";

const walletLists = [
  { id: 0, name: "Metamask", image: "" },
  { id: 1, name: "WalletConnect", image: "" },
];

export default function ConnectWalletButton() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button
        className="connect_wallet__btn"
        onClick={() => setModalOpen(true)}
      >
        Connect Wallet
      </button>

      <ConnectWalletModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}

export function ConnectWalletModal({ modalOpen, setModalOpen }) {
  return (
    <div className={`connect_wallet__modal ${modalOpen ? "open" : ""}`}>
      <div className="container">
        <div className="heading__close_btn">
          <h2>Connect wallet</h2>

          <span onClick={() => setModalOpen(false)}>X</span>
        </div>

        <div className="wallet_lists">
          <h2>Choose your preferred wallets</h2>
        </div>
      </div>
    </div>
  );
}

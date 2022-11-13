import { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import "./styles.scss";
import MetamaskIcon from "assets/MetaMaskIcon.svg";
import WalletConnectIcon from "assets/WalletConnectIcon.svg";

const walletLists = [
  { id: 0, name: "Metamask", image: MetamaskIcon },
  { id: 1, name: "WalletConnect", image: WalletConnectIcon },
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

          {walletLists.map((wallet) => {
            return (
              <div key={wallet.id} className="wallet">
                <div>
                  <img src={wallet.image} alt={wallet.name} />

                  <span>{wallet.name}</span>
                </div>

                <span>
                  <FaGreaterThan />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import ConnectWalletButton from "components/Button/ConnectButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

const mobilenavs = [
  { id: 0, name: "Home", path: "/" },
  { id: 1, name: "Place to stay", path: "/places" },
  { id: 2, name: "NFTs", path: "/" },
  { id: 3, name: "Community", path: "/" },
];

export default function MobileNav() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const handleHamburger = () => {
    setActive((prev) => !prev);
  };

  const handleRouting = (href) => {
    navigate(href);
    setActive(false);
  };
  return (
    <>
      <div
        className={`hamburger ${active ? "active" : ""}`}
        onClick={handleHamburger}
      >
        <span className="bar top"></span>
        <span className="bar mid"></span>
        <span className="bar bottom"></span>
      </div>

      <div className={`mobile__menu ${active ? "open" : ""}`}>
        <ul>
          {mobilenavs.map((nav) => {
            return (
              <li key={nav.id}>
                <a
                  href={nav.path}
                  onClick={() => {
                    handleRouting(nav.path);
                  }}
                >
                  {nav.name}
                </a>
              </li>
            );
          })}
        </ul>

        <ConnectWalletButton />
      </div>
    </>
  );
}

import { Link } from "react-router-dom";

import ConnectWalletButton from "components/Button/ConnectButton";
import MobileNav from "components/MobileNav";

import HeaderLogo from "assets/HeaderLogo.svg";
import "./styles.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <figure>
          <img src={HeaderLogo} alt="Metabnb" />
        </figure>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/place-to-stay">Place to Stay</Link>
            </li>
            <li>
              <Link to="/">NFTs</Link>
            </li>
            <li>
              <Link to="/">Community</Link>
            </li>
          </ul>
        </nav>

        <ConnectWalletButton />

        <MobileNav />
      </div>
    </header>
  );
}

export default Header;

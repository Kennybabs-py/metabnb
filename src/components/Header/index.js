import { Link } from "react-router-dom";

import HeaderLogo from "assets/HeaderLogo.svg";
import "./styles.scss";
import ConnectWalletButton from "components/Button/ConnectButton";

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
              <Link to="/">Place to Stay</Link>
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
      </div>
    </header>
  );
}

export default Header;

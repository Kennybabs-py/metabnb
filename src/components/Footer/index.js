import "./styles.scss";
import footerLogo from "assets/FooterLogo.svg";

const navData = [
  {
    id: 0,
    category: "Community",
    links: [
      { id: 0, name: "NFT" },
      { id: 1, name: "Tokens" },
      { id: 2, name: "Lanlords" },
      { id: 3, name: "Discord" },
    ],
  },
  {
    id: 0,
    category: "Places",
    links: [
      { id: 0, name: "Castle" },
      { id: 1, name: "Farms" },
      { id: 2, name: "Beach" },
      { id: 3, name: "Learn more" },
    ],
  },
  {
    id: 0,
    category: "About us",
    links: [
      { id: 0, name: "Road map" },
      { id: 1, name: "Creators" },
      { id: 2, name: "Career" },
      { id: 3, name: "Contact us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <div className="logo__social_links">
            <figure>
              <img src={footerLogo} alt="meta bnb" />
            </figure>

            <div className="social_links">
              <a href="https://#">lin</a>
              <a href="https://#">lin</a>
              <a href="https://#">lin</a>
            </div>
          </div>

          <div className="navs">
            {navData.map((item) => {
              const { id, category, links } = item;
              return (
                <div key={id}>
                  <h2>{category}</h2>

                  <ul>
                    {links.map((link) => {
                      return (
                        <li key={link.id}>
                          <a href="https://#">{link.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="copyright">
          <span> &copy; 2022 Metabnb</span>
        </div>
      </div>
    </footer>
  );
}

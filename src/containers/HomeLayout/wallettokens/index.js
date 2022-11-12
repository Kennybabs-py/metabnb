import "./styles.scss";
import MbTokensImg from "../assets/mbtokens.svg";
import MetamaskImg from "../assets/metamask.svg";
import OpenseaImg from "../assets/opensea.svg";

const data = [
  { id: 0, image: MbTokensImg, name: "Mb Tokens" },
  { id: 1, image: MetamaskImg, name: "Metamask" },
  { id: 2, image: OpenseaImg, name: "Opensea" },
];

export default function WalletTokens() {
  return (
    <section id="wallet_tokens__partners">
      <div className="container">
        {data.map((item) => {
          return (
            <figure key={item.id}>
              <img src={item.image} alt={item.name} />
            </figure>
          );
        })}
      </div>
    </section>
  );
}

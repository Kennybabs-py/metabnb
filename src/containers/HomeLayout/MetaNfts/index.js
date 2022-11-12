import LearnMoreButton from "components/Button/LearnMoreButton";
import "./styles.scss";
import metanftsimg from "../assets/metanfts.png";

export default function MetaNfts() {
  return (
    <section id="metanfts">
      <div className="container">
        <div className="text__cta">
          <h2>Metabnb NFTs</h2>

          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>

          <LearnMoreButton />
        </div>

        <div className="image_container">
          <img src={metanftsimg} alt="metanfts" />
        </div>
      </div>
    </section>
  );
}

import SearchInput from "components/SearchInput";
import "./styles.scss";

import imageone from "../assets/imageone.png";
import imagetwo from "../assets/imagetwo.png";
import imagethree from "../assets/imagethree.png";
import imagefour from "../assets/imagefour.png";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="texts__searchinput">
          <h2>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h2>

          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          <SearchInput />
        </div>

        <div className="images">
          <div className="group_one">
            <figure>
              <img src={imageone} alt="place" />
            </figure>

            <figure>
              <img src={imagetwo} alt="place" />
            </figure>
          </div>

          <div className="group_two">
            <figure>
              <img src={imagethree} alt="place" />
            </figure>

            <figure>
              <img src={imagefour} alt="place" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

import "./styles.scss";

import { placesData } from "data";
import Place from "components/Place";

export default function Inspiration() {
  const slicedData = placesData.slice(0, 8);

  return (
    <section id="inspiration">
      <div className="container">
        <h2>Inspiration for your next adventure</h2>

        <div>
          {slicedData.map((item) => {
            return <Place key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

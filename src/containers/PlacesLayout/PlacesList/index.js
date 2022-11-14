import { GoSettings } from "react-icons/go";

import Place from "components/Place";

import "./styles.scss";
import { placesData } from "data";

const categories = [
  "Restaurant",
  "Cottage",
  "Castle",
  "Fantasy city",
  "Beach",
  "Cabins",
  "Off-grid",
  "Farm",
];

export default function PlacesList() {
  return (
    <section id="places">
      <div className="container">
        <div className="categories__settings">
          <div className="categories">
            {categories.map((item, index) => {
              return <button key={index}>{item}</button>;
            })}
          </div>

          <div className="settings">
            <span>Location</span> <GoSettings />
          </div>
        </div>

        <div className="places_list">
          {placesData.map((item) => {
            return <Place key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

import { Rating } from "react-simple-star-rating";
import "./styles.scss";

export default function Place(props) {
  const { name, image, distance, price, availability } = props;
  return (
    <div className="place">
      <figure>
        <img src={image} alt={name} />
      </figure>

      <div className="name__price">
        <span>{name}</span> <span>{price}</span>
      </div>

      <div className="distance__available">
        <span>{distance} away</span>{" "}
        <span>available for {availability} stay</span>
      </div>

      <div>
        <Rating initialValue={5} iconsCount={5} readonly size={12} />
      </div>
    </div>
  );
}

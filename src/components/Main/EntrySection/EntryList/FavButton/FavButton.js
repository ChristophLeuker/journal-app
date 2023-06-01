import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import "./FavButton.css";

export default function FavButton({ onToggleFavorite, isFavorite, id }) {
  return (
    <>
      <button
        type="button"
        className="button-svg"
        onClick={() => onToggleFavorite(id)}
      >
        {isFavorite ? <StarFilled /> : <Star />}
      </button>
    </>
  );
}

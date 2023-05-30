import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import "./FavButton.css";
import { useState } from "react";

export default function FavButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>
      <button
        type="button"
        className="button-svg"
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? <StarFilled /> : <Star />}
      </button>
    </>
  );
}

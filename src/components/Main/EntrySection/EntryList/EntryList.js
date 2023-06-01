import "./EntryList.css";
import FavButton from "./FavButton/FavButton";

export default function EntryList({
  headtitle,
  description,
  date,
  onToggleFavorite,
  isFavorite,
  id,
}) {
  return (
    <>
      <section className="entryList__container">
        <p className="entryList__date">{date}</p>
        <h2 className="entryList__header">{headtitle}</h2>
        <p className="entryList__description">{description}</p>
        <FavButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
          id={id}
        />
      </section>
    </>
  );
}

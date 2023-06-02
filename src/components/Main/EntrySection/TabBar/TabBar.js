import "./TabBar.css";
import Badge from "./Badge/Badge";
import Button from "./Button/Button";

export default function TabBar({
  onShowAllEntries,
  onShowFavoritesEntries,
  filter,
}) {
  return (
    <>
      <section className="tab-bar__container">
        <Button onClick={onShowAllEntries} isActice={filter === "all"}>
          All Entries
        </Button>
        <Badge count="5" isActive={filter === "all"} />
        <Button
          onClick={onShowFavoritesEntries}
          isActice={filter === "favorites"}
        >
          Favorites
        </Button>
        <Badge count="0" isActice={filter === "favorites"} />
      </section>
    </>
  );
}

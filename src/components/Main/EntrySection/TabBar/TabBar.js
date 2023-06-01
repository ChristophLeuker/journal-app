import "./TabBar.css";
import Badge from "./Badge/Badge";
import Button from "./Button/Button";

export default function TabBar({ onShowAllEntries, onShowFavoritesEntries }) {
  return (
    <>
      <section className="tab-bar__container">
        <Button onClick={onShowAllEntries}>All Entries</Button>
        <Badge count="5" isActive={true} />
        <Button onClick={onShowFavoritesEntries}>Favorites</Button>
        <Badge count="0" isActice={false} />
      </section>
    </>
  );
}

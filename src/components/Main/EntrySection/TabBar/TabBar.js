import "./TabBar.css";
import Badge from "./Badge/Badge";

export default function TabBar() {
  return (
    <>
      <section className="tab-bar__container">
        <p>All Entries </p>
        <Badge count="5" isActive={true} />
        <p>Favorites</p>
        <Badge count="0" isActice={false} />
      </section>
    </>
  );
}

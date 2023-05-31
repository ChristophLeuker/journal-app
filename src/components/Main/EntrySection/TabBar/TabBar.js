import "./TabBar.css";
import Badge from "./Badge.js";

export default function TabBar() {
  return (
    <>
      <section className="tab-bar__container">
        <p>All Entries </p>
        <Badge count="5" />
        <p>Favorites</p>
        <Badge count="0" />
      </section>
    </>
  );
}

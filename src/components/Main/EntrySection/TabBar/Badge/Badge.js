import "./Badge.css";

export default function Badge({ count, isActive }) {
  return <p className={isActive ? "badge badge__active" : "badge"}>{count}</p>;
}

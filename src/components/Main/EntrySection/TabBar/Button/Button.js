import "./Button.css";

export default function Button({ children, onClick, isActive }) {
  return (
    <button
      type="button"
      className={`tab-button${isActive ? " tab-button--active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

import "./Button.css";

export default function Button({ children, onClick }) {
  return (
    <button type="button" className="tab-button" onClick={onClick}>
      {children}
    </button>
  );
}

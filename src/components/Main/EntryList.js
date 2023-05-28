import "./EntryList.css";

export default function EntryList({ headtitle, description, date }) {
  return (
    <>
      <section className="entryList__container">
        <p className="entryList__date">{date}</p>
        <h2 className="entryList__header">{headtitle}</h2>
        <p className="entryList__description">{description}</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="entryList__svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            stroke="#252629"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </section>
    </>
  );
}

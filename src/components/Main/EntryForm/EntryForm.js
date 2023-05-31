import "./EntryForm.css";
export default function EntryForm({ inputname, inputname2, motto, notes }) {
  return (
    <>
      <h2 className="header__form">NEW ENTRY</h2>
      <form className="entry-form__container">
        <label htmlFor={inputname}>{motto}</label>
        <input type="text" name={inputname}></input>
        <label htmlFor={inputname2}>{notes}</label>
        <textarea rows="4" name={inputname2} className="textarea"></textarea>
        <button type="submit" className="create__button">
          Create
        </button>
      </form>
    </>
  );
}

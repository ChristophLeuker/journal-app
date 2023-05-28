export default function EntryForm({ inputname, inputname2, motto, notes }) {
  return (
    <>
      <form>
        <label htmlFor={inputname}>{motto}</label>
        <input type="text" name={inputname}></input>
        <label htmlFor={inputname2}>{notes}</label>
        <textarea rows="4" name={inputname2}></textarea>
      </form>
    </>
  );
}

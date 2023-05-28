import EntryForm from "./EntryForm";

export default function Main() {
  return (
    <>
      <EntryForm
        inputname="motto"
        inputname2="notes"
        motto="Motto:"
        notes="Notes:"
      />
      <button type="submit">Create</button>
    </>
  );
}

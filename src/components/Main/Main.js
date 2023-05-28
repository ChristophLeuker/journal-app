import EntryForm from "./EntryForm";
import "./EntryForm.css";
import EntrySection from "./EntrySection";

export default function Main() {
  return (
    <>
      <EntryForm
        inputname="motto"
        inputname2="notes"
        motto="Motto:"
        notes="Notes:"
      />
      <EntrySection />
    </>
  );
}

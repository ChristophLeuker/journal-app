import EntryForm from "./EntryForm/EntryForm";

import EntrySection from "./EntrySection/EntrySection";

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

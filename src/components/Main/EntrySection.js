import TabBar from "./TabBar";
import EntryList from "./EntryList";

export default function EntrySection() {
  return (
    <>
      <TabBar />
      <EntryList
        headtitle="Hier könnte ihre Überschrift stehen"
        description="und hier steht dann ihr ganzer Text und so anderer kram"
        date="datum hier"
      />
    </>
  );
}

import TabBar from "./TabBar/TabBar";
import EntryList from "./EntryList/EntryList";

export default function EntrySection() {
  return (
    <>
      <TabBar />
      <EntryList
        headtitle="Hier könnte ihre Überschrift stehen"
        description="und hier steht dann ihr ganzer Text und so anderer kram"
        date="datum hier"
      />
      <EntryList
        headtitle="Hier könnte ihre Überschrift stehen"
        description="und hier steht dann ihr ganzer Text und so anderer kram"
        date="datum hier"
      />
    </>
  );
}

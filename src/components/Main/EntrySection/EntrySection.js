import TabBar from "./TabBar/TabBar";
import EntryList from "./EntryList/EntryList";
import Divider from "./Divider/Divider";

export default function EntrySection({ entries }) {
  return (
    <>
      <TabBar />
      {entries.map((entry) => {
        return (
          <>
            <EntryList
              headtitle={entry.motto}
              description={entry.notes}
              date={entry.date}
              key={entry.id}
            />
            <Divider />
          </>
        );
      })}
    </>
  );
}

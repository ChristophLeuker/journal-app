import TabBar from "./TabBar/TabBar";
import EntryList from "./EntryList/EntryList";
import Divider from "./Divider/Divider";
import { Fragment } from "react";

export default function EntrySection({
  entries,
  onToggleFavorite,
  onShowFavoritesEntries,
  onShowAllEntries,
}) {
  return (
    <>
      <TabBar
        onShowFavoritesEntries={onShowFavoritesEntries}
        onShowAllEntries={onShowAllEntries}
      />
      {entries.map((entry) => {
        return (
          <>
            <Fragment key={entry.id}>
              <EntryList
                onToggleFavorite={onToggleFavorite}
                isFavorite={entry.isFavorite}
                id={entry.id}
                headtitle={entry.motto}
                description={entry.notes}
                date={entry.date}
              />
            </Fragment>
            <Divider />
          </>
        );
      })}
    </>
  );
}

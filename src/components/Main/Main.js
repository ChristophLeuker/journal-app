import EntryForm from "./EntryForm/EntryForm";

import EntrySection from "./EntrySection/EntrySection";
import { useState } from "react";
import { uid } from "uid";

const initialEntries = [
  {
    id: 1000,
    isFavorite: false,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    isFavorite: false,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    isFavorite: false,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    isFavorite: false,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
  },
];
export default function Main() {
  const [entries, setEntries] = useState(initialEntries);
  const [filter, setFilter] = useState("all");

  function handleAddEntries(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([
      { id: uid(), isFavorite: false, date, ...newEntry },
      ...entries,
    ]);
  }

  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) => {
        if (entry.id === id) {
          return { ...entry, isFavorite: !entry.isFavorite };
        } else {
          return entry;
        }
      })
    );
  }

  function handleShowFavoritesEntries() {
    setFilter("favorites");
  }

  function handleShowAllEntries() {
    setFilter("all");
  }
  const favoriteEntries = entries.filter((entry) => entry.isFavorite === true);

  return (
    <>
      <EntryForm
        onAddEntries={handleAddEntries}
        inputname="motto"
        inputname2="notes"
        motto="Motto:"
        notes="Notes:"
      />
      <EntrySection
        entries={filter === "favorites" ? favoriteEntries : entries}
        onToggleFavorite={handleToggleFavorite}
        onShowFavoritesEntries={handleShowFavoritesEntries}
        onShowAllEntries={handleShowAllEntries}
      />
    </>
  );
}

import { AppContext } from "./app-context";

const ContextProvider = (props) => {
  let watchlist = [];

  const toggleBookmarkHandler = (movie) => {
    const existingItemIndex = watchlist.findIndex(
      (item) => item.id === movie.id
    );
    let updatedItems;

    if (existingItemIndex >= 0) {
      updatedItems = watchlist.concat(movie);
    } else {
      updatedItems = watchlist.filter((item) => item.id !== movie.id);
    }
    return updatedItems;
  };

  const context = {
    items: watchlist,
    toggleBookmark: toggleBookmarkHandler,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;

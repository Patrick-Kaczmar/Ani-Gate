import { createContext } from "react";

export const SearchContext = createContext({
    animeData: [],
    favoriteAnime: {},
    setData: () => {},
    setFavorite: () => {},
    search: () => {}
});
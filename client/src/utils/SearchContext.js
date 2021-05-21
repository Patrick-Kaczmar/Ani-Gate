import { createContext } from "react";

export const SearchContext = createContext({
    animeData: [],
    favoriteAnime: [],
    setAnimeData: () => {},
    setFavoriteAnime: () => {},
    search: () => {},
    genreSearch: () => {}
});
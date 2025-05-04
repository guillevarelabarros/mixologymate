import { StateCreator } from 'zustand';
import { Recipe } from '../types';

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoriteExists: (id: string) => boolean;
  loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (
  set,
  get
) => ({
  favorites: [],
  handleClickFavorite: recipe => {
    const updatedFavorites = get().favoriteExists(recipe.idDrink)
      ? get().favorites.filter(f => f.idDrink !== recipe.idDrink)
      : [...get().favorites, recipe];

    set({ favorites: updatedFavorites });
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  },
  favoriteExists: id => {
    return get().favorites.some(f => f.idDrink === id);
  },
  loadFromStorage: () => {
    const stored = localStorage.getItem('favorites');
    if (stored) set({ favorites: JSON.parse(stored) });
  },
});

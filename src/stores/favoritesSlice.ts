import { StateCreator } from 'zustand';
import { Recipe } from '../types';
import { RecipesSliceType, createRecipesSlice } from './recipeSlice';
import {
  NotificationSliceType,
  createNotificationSlice,
} from './notificationSlice';

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoriteExists: (id: string) => boolean;
  loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & RecipesSliceType & NotificationSliceType
> = (set, get, api) => ({
  favorites: [],
  handleClickFavorite: recipe => {
    if (get().favoriteExists(recipe.idDrink)) {
      set(state => ({
        favorites: state.favorites.filter(f => f.idDrink !== recipe.idDrink),
      }));
      createNotificationSlice(set, get, api).showNotification({
        text: 'Removed from favorites',
        error: false,
      });
    } else {
      set(state => ({ favorites: [...state.favorites, recipe] }));
      createNotificationSlice(set, get, api).showNotification({
        text: 'Added to favorites',
        error: false,
      });
    }
    createRecipesSlice(set, get, api).closeModal();
    localStorage.setItem('favorites', JSON.stringify(get().favorites));
  },
  favoriteExists: id => {
    return get().favorites.some(f => f.idDrink === id);
  },
  loadFromStorage: () => {
    const stored = localStorage.getItem('favorites');
    if (stored) set({ favorites: JSON.parse(stored) });
  },
});

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { RecipesSliceType, createRecipesSlice } from './recipeSlice';
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice';
import {
  NotificationSliceType,
  createNotificationSlice,
} from './notificationSlice';

type StoreType = RecipesSliceType & FavoritesSliceType & NotificationSliceType;

export const useAppStore = create<StoreType>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
  }))
);

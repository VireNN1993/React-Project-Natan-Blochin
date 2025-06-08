// src/redux/slices/cardsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../types/Card";

export type CardsState = {
  allCards: CardType[];
  favoriteCards: CardType[];
  searchTerm: string;
  filteredCards: CardType[];
};

const initialState: CardsState = {
  allCards: [],
  favoriteCards: [],
  searchTerm: "",
  filteredCards: [],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setAllCards(state, action: PayloadAction<CardType[]>) {
      state.allCards = action.payload;
      // Update filtered cards according to current search
      state.filteredCards = filterCardsBySearchTerm(
        action.payload,
        state.searchTerm,
      );
    },

    toggleLike(
      state,
      action: PayloadAction<{ cardId: string; userId: string }>,
    ) {
      const card = state.allCards.find((c) => c._id === action.payload.cardId);
      if (card) {
        const index = card.likes.indexOf(action.payload.userId);
        if (index === -1) {
          card.likes.push(action.payload.userId);
        } else {
          card.likes.splice(index, 1);
        }
      }
    },

    setFavoriteCards(state, action: PayloadAction<CardType[]>) {
      state.favoriteCards = action.payload;
    },

    // New action - update search term
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
      // Filter cards by new search term
      state.filteredCards = filterCardsBySearchTerm(
        state.allCards,
        action.payload,
      );
    },

    // New action - reset search
    clearSearch(state) {
      state.searchTerm = "";
      state.filteredCards = state.allCards;
    },
  },
});

// Helper function for filtering cards
const filterCardsBySearchTerm = (
  cards: CardType[],
  searchTerm: string,
): CardType[] => {
  if (!searchTerm.trim()) {
    return cards;
  }

  const term = searchTerm.toLowerCase();
  return cards.filter(
    (card) =>
      card.title.toLowerCase().includes(term) ||
      card.subtitle.toLowerCase().includes(term) ||
      card.description.toLowerCase().includes(term) ||
      card.address.city.toLowerCase().includes(term) ||
      card.address.country.toLowerCase().includes(term),
  );
};

export const {
  setAllCards,
  toggleLike,
  setFavoriteCards,
  setSearchTerm,
  clearSearch,
} = cardsSlice.actions;

export default cardsSlice.reducer;

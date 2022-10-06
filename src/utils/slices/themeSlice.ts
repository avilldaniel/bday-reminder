import { createSlice } from "@reduxjs/toolkit";

// Function that gets theme
const getTheme = () => {
  // const theme = `${window?.localStorage?.getItem("theme")}`;
  // const theme = window?.localStorage?.getItem("theme");
  const theme =
    typeof window !== "undefined" && window.localStorage.getItem("theme");

  if (theme) {
    if (["light", "dark"].includes(theme)) {
      return theme;
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: light)");
    if (userMedia.matches) {
      return "light";
    }
  }
  // if (theme && ["light", "dark"].includes(theme)) {
  //   return theme;
  // }

  // const userMedia = window.matchMedia("(prefers-color-scheme: light)");
  // if (userMedia.matches) {
  //   return "light";
  // }
  return "dark";
};

export interface themeState {
  value: string;
}

// Initialize theme state
const initialState: themeState = {
  value: getTheme(),
};

// Create slice
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = themeSlice.actions;

export default themeSlice.reducer;

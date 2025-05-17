import { makeAutoObservable } from "mobx";

export type TTheme =
  | "blue-theme"
  | "green-theme"
  | "yellow-theme"
  | "pink-theme"
  | "purple-theme";

const getTheme = () => {
  let theme: TTheme = "blue-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme") as TTheme;
  }
  return theme;
};

class Themes {
  theme: TTheme = getTheme();

  constructor() {
    makeAutoObservable(this);
  }

  changeTheme(theme: TTheme) {
    this.theme = theme;
    localStorage.setItem("theme", this.theme);
  }
}

export default new Themes();

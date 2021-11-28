import { BehaviorSubject } from "rxjs";

export type ThemeValue = "light" | "dark";

class ThemeService {
  theme$ = new BehaviorSubject<ThemeValue>("light");
  constructor() {
    this.theme$.subscribe((theme) => {
      ["dark", "light"].forEach((c) => {
        document.body.classList.remove(c);
      });
      document.body.classList.add(theme);
    });
    this.init();
  }
  toggle() {
    if (this.theme$.value === "light") {
      this.theme$.next("dark");
      return;
    }
    this.theme$.next("light");
  }

  init() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.theme$.next("dark");
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const newColorScheme = e.matches ? "dark" : "light";
        this.theme$.next(newColorScheme);
      });
  }
}

export const themeService = new ThemeService();

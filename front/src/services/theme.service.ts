import { BehaviorSubject } from "rxjs";

type ThemeValue = "light" | "dark";

class ThemeService {
  theme$ = new BehaviorSubject<ThemeValue>("light");
  constructor() {
    this.theme$.subscribe((theme) => {
      ["dark", "light"].forEach((c) => {
        document.body.classList.remove(c);
      });
      document.body.classList.add(theme);
    });
  }
  toggle() {
    if (this.theme$.value === "light") {
      this.theme$.next("dark");
      return;
    }
    this.theme$.next("light");
  }
}

export const themeService = new ThemeService();

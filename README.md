# 🧮 Calculator 🧮

Welcome to the **Calculator App** – a sleek and intuitive tool to handle basic arithmetic operations with ease. Whether you're a student, developer, or just need to crunch some numbers, this lightweight calculator is ready to assist you!

---

![Screenshot](https://raw.githubusercontent.com/daria-diahovets/react-calculator/master/screenshot.png)

---

## 🔍 Features

- **Basic Operations:** Add, subtract, multiply, and divide.
- **Error Handling:** Prevent crashes with graceful fallback on invalid input.
- **Live Expression Evaluation:** View and compute in real-time.
- **Responsive UI:** Works on all screen sizes.

---

## 📉 Technologies

- **React 19** with TypeScript
- **MobX** for state management
- **localStorage** for theme persistence

---

## 📊 State Management Details

### SoundsState

```typescript
class Sounds {
  isSoundOn: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  toggleSound() {
    this.isSoundOn = !this.isSoundOn;
    this.playClick();
  }

  playClick() {
    if (this.isSoundOn) {
      const sound = new Audio("sounds/click.mp3");
      sound.play();
    }
  }
}
```

### ThemeState

```typescript
const getTheme = () => {
  let theme: TTheme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme") as TTheme;
  }
  return theme;
};
theme: TTheme = getTheme();
```

- Themes are stored and loaded from `localStorage`.

---

## 💻 How to Run Locally

```bash
git clone https://github.com/daria-diahovets/react-calculator.git
cd react-calculator
npm install
npm run dev
```

---

## 🎉 Join my Telegram Channel!

[Join Telegram](https://t.me/drzoidberg_portfolio)

Enjoy and happy coding! 🚀

import { observer } from "mobx-react-lite";
import Calculator from "./Calculator";
import MenuControl from "./MenuControl";
import themes from "./store/themes";

const App = observer(() => {
  return (
    <div className={`wrapper ${themes.theme}`}>
      <MenuControl />
      <h1>+*\ Calculator /*+</h1>
      <Calculator />
      <a
        className="copyright"
        target="_blank"
        href="https://t.me/drzoidberg_portfolio"
      >
        @dczoidberg
      </a>
    </div>
  );
});

export default App;

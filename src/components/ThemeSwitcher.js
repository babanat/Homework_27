import { useTheme } from '../context/ThemeContext';
import './ThemeSwitcher.css';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher">
    <button className="theme-switch-button" onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  </div>

  );
}
export default ThemeSwitcher;

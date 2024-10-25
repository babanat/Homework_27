import { useTheme } from '../context/ThemeContext';
import './ThemeSwitcher.css';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher">
    <button className="theme-switch-button" onClick={toggleTheme}>
      Переключить на {theme === 'light' ? 'тёмную' : 'светлую'} тему
    </button>
  </div>

  );
}
export default ThemeSwitcher;

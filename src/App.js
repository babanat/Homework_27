import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Header from "./components/Header";
import ThemeSwitcher from './components/ThemeSwitcher'
import MyErrorBoundary from "./utils/ErrorBoundary";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className={'App'}>
      <Router>
        <Header />
        <ThemeSwitcher />
        <MyErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MyErrorBoundary>
      </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;

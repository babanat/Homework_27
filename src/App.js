import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Header from "./components/Header";
import ThemeSwitcher from './components/ThemeSwitcher'
import MyErrorBoundary from "./utils/ErrorBoundary";
import { ThemeProvider } from "./context/ThemeContext";
import NoteFound from "./NoteFound";


function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <ThemeSwitcher />
        <MyErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoteFound />} />
          </Routes>
        </MyErrorBoundary>
      </Router>
    </ThemeProvider>
  );
}

export default App;

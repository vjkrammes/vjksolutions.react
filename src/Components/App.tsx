import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Providers
import { AlertProvider } from '../Contexts/AlertContext';
// Pages
import HomePage from './Home/HomePage';
import NotFoundPage from './NotFound/NotFoundPage';
// Miscellaneous
import AlertPopup from './Widgets/AlertPopup/AlertPopup';
import Footer from './Footer/Footer';
import Header from './Header/Header';
// CSS
import './App.css';

export default function App() {
  return (
    <AlertProvider>
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <div className="page">
            <Routes>
              <Route
                path=""
                element={
                  <>
                    <AlertPopup />
                    <HomePage />
                  </>
                }
              />
              <Route
                path="/"
                element={
                  <>
                    <AlertPopup />
                    <HomePage />
                  </>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </AlertProvider>
  );
}

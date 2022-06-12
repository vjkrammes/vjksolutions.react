import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Providers
import { AlertProvider } from '../Contexts/AlertContext';
// Pages
import AboutPage from './About/AboutPage';
import ContactPage from './Contact/ContactPage';
import DemosPage from './Demos/DemosPage';
import HomePage from './Home/HomePage';
import JimCoPage from './JimCo/JimCoPage';
import NotFoundPage from './NotFound/NotFoundPage';
import PrivacyPage from './Privacy/PrivacyPage';
import TechPage from './Tech/TechPage';
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
              <Route path="/About" element={<AboutPage />} />
              <Route
                path="/Contact"
                element={
                  <>
                    <AlertPopup />
                    <ContactPage />
                  </>
                }
              />
              <Route path="/Demos" element={<DemosPage />} />
              <Route path="/JimCo" element={<JimCoPage />} />
              <Route path="/Privacy" element={<PrivacyPage />} />
              <Route path="/Tech" element={<TechPage />} />
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

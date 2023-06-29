import { Router, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Registre from "../Register/Register";
import Header from '../Header/Header';

export default function App() {
    let location = useLocation();
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
//   const footerPaths = ['/', '/movies', '/saved-movies'];
  const isLoggedIn = location.pathname === '/' ? false : true;
  
  return (
    <div className="App">
        {headerPaths.includes(location.pathname) ? (
        <Header isLoggedIn={isLoggedIn} />
      ) : (
        ''
      )}
        <Main>
      <Routes>
        <Router path="/" element={<Main />} />
        <Router path="/signup" element={<Registre />} />
        <Router path="/signin" element={<Login />} />
        {/* <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<NotFound />} /> */}
      </Routes>
      </Main>
    </div>
  );
}

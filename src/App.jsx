import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from "./pages/Dashboard";
import MovieListPage from "./pages/MovieListPage";
import MoviePage from './pages/MoviePage';
import NotFoundPage from './pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';




function App() {
  return(
  <div id="wrapper">

      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">

        <div id="content">

          <Header />

          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/movies' element={<MovieListPage />} />
            <Route path='/movies/:id' element={<MoviePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>

        <Footer />
      </div>

    </div>
  );
}

export default App;

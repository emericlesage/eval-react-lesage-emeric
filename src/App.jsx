import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './layout/Navbar'
import Home from './pages/home/Home'
import Movies from './pages/movies/Movies'
import Movie from './pages/movie/Movie'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:imdbID" element={<Movie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

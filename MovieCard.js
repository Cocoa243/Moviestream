import Tag from "../Tag/Tag"
import { Link } from "react-router-dom"
import "./MovieCard.css"
function MovieCard({
  poster,
  genre,
  title,
  id,
}) {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      <img
        src={`https://image.tmdb.org/t/p/w440_and_h660_face${poster}`}
        alt="poster"
      />
      <div className="movie-info">
        <Tag
          id={
            genre
          }
        />
        <Link
          to={`/movie/${id}`}
        >
          <h2>
            {
              title
            }
          </h2>
        </Link>
      </div>
    </div>
  )
}

export default MovieCard

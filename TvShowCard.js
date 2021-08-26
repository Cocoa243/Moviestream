import Tag from "../Tag/Tag"
import "./TvShowCard.css"
function TvShowCard({
  poster,
  title,
  id,
  genre,
}) {
  return (
    <div className="tvshow-card">
      <div className="overlay"></div>
      <img
        src={`https://image.tmdb.org/t/p/w440_and_h660_face${poster}`}
        alt="poster"
      />
      <div className="tvshow-info">
        <Tag
          id={
            genre
          }
        />
        <h2>
          {
            title
          }
        </h2>
      </div>
    </div>
  )
}

export default TvShowCard

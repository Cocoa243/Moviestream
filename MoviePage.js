import {
  useEffect,
  useState,
} from "react"
import { useParams } from "react-router-dom"

function MoviePage() {
  // LOGIC

  const [
    movie,
    setMovie,
  ] = useState(
    {}
  )
  const {
    id,
  } = useParams()

  async function getMovie() {
    try {
      // API call to get the movie
      const data = fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b8563882a8ce48b5f0715b6cb9eba190&language=en-US`
      )
      const response = await data
      const jsonResponse = await response.json()
      console.log(
        jsonResponse
      )
      // Updating the movie state with the response from the API
      setMovie(
        jsonResponse
      )
    } catch (error) {
      console.error(
        error
      )
    }
  }

  useEffect(
    () => {
      getMovie()
    }
  )

  console.log(
    movie
  )

  return (
    <div
      style={{
        color:
          "#fff",
      }}
    >
      <h1>
        {
          movie.original_title
        }
      </h1>
    </div>
  )
}

export default MoviePage

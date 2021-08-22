/* eslint-disable react-hooks/exhaustive-deps */
import {
    useEffect,
    useState,
  } from "react"
 
  import "./Tag.css"
  
  function Tag({
    genre,
    id,
  }) {
    const [
      genreName,
      setGenreName,
    ] = useState(
      genre
    )
  
    console.log(
      genre
    )
  
    async function getGenre() {
      try {
        // API call to get the list of genres
        const data = fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=b8563882a8ce48b5f0715b6cb9eba190&&language=en-US`
        )
        const response = await data
        const jsonResponse = await response.json()
  
        // Destructuring the jsonResponse to get the genres array,
        // to make the code cleaner
        const {
          genres,
        } = jsonResponse
  
        // Getting the matching genre thanks to the id props
        // by using the filter method on the genres array
        const filterGenreById = genres.filter(
          (
            x
          ) =>
            id ===
            x.id
        )
  
        console.table(
          filterGenreById
        )
  
        // Updating the genreName state with the filtered result
        if (
          !genreName
        ) {
          setGenreName(
            filterGenreById[0]
              .name
          )
        }
      } catch (error) {
        console.error(
          error
        )
      }
    }
  
    useEffect(() => {
      getGenre()
    }, [])
  
    return (
      <>
        {genreName && (
          <span className="tag">
            {
              genreName
            }
          </span>
        )}
      </>
    )
  }
  
  export default Tag
  
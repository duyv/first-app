import * as React from "react";
import { useDispatch } from "react-redux"
import { addFilmAction } from "../redux/actions"
import { useNavigate } from "react-router-dom"

export default function Form() {
  const [movies, setMovies] = React.useState([
    {
      id: 1,
      name: 'Avengers Infinity War',
      link: 'https://www.imdb.com/title/tt4154756/',
      image: 'https://i.pinimg.com/originals/72/fc/a7/72fca72b95cef647b2dde1bd67a79049.jpg',
      video: 'https://youtu.be/6ZfuNTqbHE8'
    },
  ]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addFilmAction({
        id: movies.length,
        name: e.target["name"].value,
        link: e.target["link"].value,
        image: e.target["image"].value,
        video: e.target["video"].value,
      })
    );
    setMovies([
      ...movies,
      {
        id: movies.length,
        name: e.target["name"].value,
        link: e.target["link"].value,
        image: e.target["image"].value,
        video: e.target["video"].value,
      },
    ]);
  };


  // const onAddMovie = (event) => {
  //   event.preventDefault();
  //   const name = event.target["name"].value;
  //   const link = event.target["link"].value;
  //   const image = event.target["image"].value;
  //   const video = event.target["video"].value;
  //   event.target.reset();

  //   setMovies((prevMovie) => [...prevMovie, { id: prevMovie.length + 1, name: name, link: link, image: image, video: video }])
  // }

  const toDetail = (movies) => {
    navigate(`/details/${movies.id}`, { state: movies });
    console.log(movies)
  }

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id))
  }

  const handleDelete = (id) => {
    deleteMovie(id)
  }


  return (
    <div className="container">
      <div className="form-add">
        <form className="form-add-group" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="link">Link</label>
            <input type="link" className="form-control" id="link" name="link" />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type="link" className="form-control" id="image" name="image" />
          </div>
          <div className="form-group">
            <label htmlFor="video">Video</label>
            <input type="link" className="form-control" id="video" name="video" />
          </div>
          <button className="btn btn-primary" type='submit'>Submit</button>
        </form>
      </div>

      <div className="table-container">
        {movies.map((movie, index) => (
          <table className="table">
            <tbody>
              <tr key={index}>
                <td><button className="btn btn-danger" onClick={() => handleDelete(movie.id)} /></td>
                <td>{movie.name}</td>
                <td><br /></td>
              </tr>
              <button className="btn btn-primary" onClick={() => toDetail(movie)}>Movie Detail</button>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  )
}

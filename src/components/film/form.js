import * as React from "react";
import { useDispatch, useSelector } from "react-redux"
import { addFilmAction, removeFilmAction } from "../redux/actions"
import { useNavigate } from "react-router-dom"

export default function Form() {

  const [formData, setFormData] = React.useState()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const onChangeHandler = e => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch (addFilmAction({...formData, id:Math.random().toString()}));
  };

  const handleDelete = (id) => {
    const movieId = id;
    dispatch(removeFilmAction(movieId))
  }

  const toDetail = (movies) => {
    navigate(`/details`, { state: movies });
  }

  const movies = useSelector(state => state.filmReducer);

  return (
    <div className="container">
      <div className="form-add">
        <form className="form-add-group" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" onChange={e => onChangeHandler(e)} id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="link">Link</label>
            <input type="link" className="form-control" onChange={e => onChangeHandler(e)} id="link" name="link" />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type="link" className="form-control" onChange={e => onChangeHandler(e)} id="image" name="image" />
          </div>
          <div className="form-group">
            <label htmlFor="video">Video</label>
            <input type="link" className="form-control" onChange={e => onChangeHandler(e)} id="video" name="video" />
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

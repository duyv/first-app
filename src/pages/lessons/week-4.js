
import { useState } from 'react';
import { Outlet, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addFilm, removeFilm } from "../../redux/actions";
  
export function Week4() {
    const filmtest = useSelector(state => state.films)
  const [films, setFilms] = useState(filmtest);
  const arraySearch = (array, keyword) => {
    const searchTerm = keyword.toLowerCase()
    return array.filter(value => {
        return value.title.toLowerCase().match(new RegExp(searchTerm, 'g'))
    })
  }
  const dispatch = useDispatch();
  const onSubmitFilm = (event) => {
    event.preventDefault()
    console.log(event.target.title.value);
    const filmNew = {
      id: filmtest.length + 1,
      title: event.target.title.value,
      url: event.target.url.value,
      banner: event.target.banner.value,
      content: event.target.content.value,
    }
    dispatch(addFilm(filmNew));
    setFilms([...films,filmNew])
  }
  const navigate = useNavigate();
  const goToDetail = (film) => {
    navigate(`/week-4/${film.id}`, { state: film });
  };
  const handleRemoveFilm = (id) => {
      const idFilm = id;
      dispatch(removeFilm(idFilm));
  }
  return (
    <div>
      <h1>Week 4</h1>
      {/* <ProcessBarClass /> */}
      <div className="App">
        <div className="content">
          <h1>List film</h1>
          <form onSubmit={onSubmitFilm} style={{    display: 'grid',
    width: '500px',
    /* text-align: center; */
    margin:' 0 auto',}}>
            <label>Enter title</label>
            <input type="text" name="title"/>
            <label>Enter url</label>
            <input type="text" name="url"/>
            <label>Enter banner</label>
            <input type="text" name="banner"/>
            <label>Enter content</label>
            <input type="text" name="content"/>
            <input type="submit" value="Submit" />
          </form>
          <div className="list-film">
              {filmtest.map((item, index) => {
                  return (
                      <div key={index}>
                           <span>{item.title}</span>
                            <button onClick={() => goToDetail(item)}>Detail</button>
                            <button onClick={() => handleRemoveFilm(item.id)}>Remove</button>
                      </div>
                  )
              })}
              <Outlet />
          </div>
        </div>
    </div>
    </div>
  );
}

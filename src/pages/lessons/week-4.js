import ProcessBarClass from "../../components/processbar/classComponent";
import ProcessBar from "../../components/processbar/classComponent";
import { useState } from 'react';
import { Outlet, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addFilm, removeFilm } from "../../redux/actions";
const Films = [
    {
      id: 1,
      title: 'Avatar',
      banner: 'data:image/jpeg;base64,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',
      content: 'Avatar là một bộ phim khoa học viễn tưởng của Mỹ năm 2009 do James Cameron viết kịch bản và đạo diễn, với sự tham gia của các diễn viên Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez và Sigourney Weaver.',
      url: 'https://www.youtube.com/watch?v=5PSNL1qE6VY&ab_channel=20thCenturyStudios'
    },
    {
      id: 2,
      title: 'Jumanji 1',
      banner: 'https://upload.wikimedia.org/wikipedia/vi/thumb/2/2e/Jumanji_Tr%C3%B2_ch%C6%A1i_k%E1%BB%B3_%E1%BA%A3o.jpg/220px-Jumanji_Tr%C3%B2_ch%C6%A1i_k%E1%BB%B3_%E1%BA%A3o.jpg',
      content: 'Jumanji: Trò chơi kỳ ảo (tên gốc tiếng Anh: Jumanji: Welcome to the Jungle) là một bộ phim điện ảnh hài hước phiêu lưu hành động của Mỹ năm 2017[3][5] do Jake Kasdan đạo diễn và Kasdan, Chris McKenna, Erik Sommers, Scott Rosenberg cùng Jeff Pinkner thực hiện biên kịch từ nguyên tác gốc của McKenna.',
      url: 'https://www.youtube.com/watch?v=2QKg5SZ_35I&ab_channel=SonyPicturesEntertainment'
    },
  ]
  
export function Week4() {
    const [valueSearch, setValueSearch] = useState('');
    const filmtest = useSelector(state => state.films)
    console.log('filmtest',filmtest)
  const [films, setFilms] = useState(filmtest);
  console.log('film',films);
  const [title,setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [banner,setBanner] = useState('');
  const [content, setContent] = useState('');
  const arraySearch = (array, keyword) => {
    const searchTerm = keyword.toLowerCase()
    return array.filter(value => {
        return value.title.toLowerCase().match(new RegExp(searchTerm, 'g'))
    })
  }
  const handleInputChangeTitle = (event) => {
    const text = event.target.value;
    setTitle(text);
  }
  const handleInputChangeUrl = (event) => {
    const text = event.target.value;
    setUrl(text);
  }
  const handleInputChangeBanner = (event) => {
    const text = event.target.value;
    setBanner(text);
  }
  const handleInputChangeContent = (event) => {
    const text = event.target.value;
    setContent(text);
  }
  const handleSearchFilm = async (event) => {
    const searchkey = event.target.value
    setValueSearch(searchkey);
    let search = await arraySearch(filmtest, searchkey);
    if(searchkey === '') {
      setFilms(films)
    } else {
      setFilms(search)
    }
  }
  const dispatch = useDispatch();
  const onSubmitFilm = (event) => {
    event.preventDefault()
    const filmNew = {
      id: films.length + 1,
      title: title,
      url: url,
      banner: banner,
      content: content,
    }
    dispatch(addFilm(filmNew));
    // setFilms([...films,filmNew])
  }
  const navigate = useNavigate();
  const goToDetail = (film) => {
    navigate(`/week-4/${film.id}`, { state: film });
  };
  const handleRemoveFilm = (id) => {
      const idFilm = id;
      console.log(idFilm)
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
            <input onChange={handleInputChangeTitle}/>
            <label>Enter url</label>
            <input onChange={handleInputChangeUrl}/>
            <label>Enter banner</label>
            <input onChange={handleInputChangeBanner}/>
            <label>Enter content</label>
            <input onChange={handleInputChangeContent}/>
            <input type="submit" value="Submit" />
          </form>
          <form className="search-group">
            <label>Search film</label>
            <input type="search" onChange={handleSearchFilm}/>
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

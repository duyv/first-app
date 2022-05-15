import * as React from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { likeFilmAction } from "../redux/actions";

const DetailFilm = () => {
  const location = useLocation();
  const dataFilm = location.state;
  const [dataSearch, setDataSearch] = React.useState([...dataFilm]);
  const data = useSelector((state) => state.filmReducer);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const value = e.target.value;
    const search = dataSearch.find((el) => el.nameFilm.includes(value));
    // if (value) {
    //   setDataSearch([search]);
    // } else {
    //   setDataSearch([...dataFilm]);
    // }
    // setDataSearch(() => dataSearch.find((el) => el.nameFilm === value));
  };
  return (
    <>
      <span>
        Search: <input onChange={(e) => handleSearch(e)} placeholder="Search" />
      </span>
      <h1>Detail film</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
        {data.map((el, indx) => {
          return (
            <div style={{ width: "400px" }} key={indx}>
              <p>Name of Film: {el.nameFilm}</p>
              <img src={el.imageFilm} width="250" height="300"></img>
              <p>
                Link Film:{" "}
                <a href={el.linkFilm} target={"_blank"}>
                  Click here
                </a>
              </p>
              <p
                onClick={() => dispatch(likeFilmAction(el.nameFilm))}
                style={{ color: el.like ? "blue" : "white" }}
              >
                Like
              </p>
              <ReactPlayer
                url={el.linkFilm}
                width="400px"
                height="300px"
                playing={true}
                controls={false}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DetailFilm;

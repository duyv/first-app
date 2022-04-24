import * as React from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

const DetailFilm = () => {
  const location = useLocation();
  const dataFilm = location.state;
  const [dataSearch, setDataSearch] = React.useState([...dataFilm]);
  console.log(12345, dataSearch);
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
        {dataSearch.map((el, indx) => {
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

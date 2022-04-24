import * as React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import DetailFilm from "./detail";

const FormFilm = () => {
  const [dataFilm, setDataFilm] = React.useState([]);
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");
  const [image, setImage] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setDataFilm([
      ...dataFilm,
      {
        nameFilm: name,
        linkFilm: link,
        imageFilm: image,
      },
    ]);
  };
  const gotoDetail = () => {
    navigate("/detail", { state: dataFilm });
  };
  return (
    <>
      <div style={{ width: "400px" }}>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            type="text"
            name="name"
            placeholder={"Name"}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "500px" }}
          />
          <input
            type="text"
            name="link"
            placeholder={"Link"}
            onChange={(e) => setLink(e.target.value)}
            style={{ width: "500px" }}
          />
          <input
            type="text"
            name="image"
            placeholder={"Image"}
            onChange={(e) => setImage(e.target.value)}
            style={{ width: "500px" }}
          />
          <input style={{ width: "500px" }} type="submit" value="Submit" />
        </form>
      </div>
      <button onClick={gotoDetail}>Detail</button>
      <button onClick={() => setDataFilm([])}>Clear</button>
      <Routes>
        <Route path="/detail" element={<DetailFilm />} />
      </Routes>
    </>
  );
};

export default FormFilm;

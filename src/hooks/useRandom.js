import { useState } from "react";

function useRandom() {
  const [value, setValue] = useState(0);
  const boxData = [
    "green",
    "red",
    "yellow",
    "https://www.gardeningknowhow.com/wp-content/uploads/2019/09/flower-color.jpg",
    "https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg",
    "https://www.thoughtco.com/thmb/U3uVJMsgzLd00DbkIicnnIYM_kM=/1414x1414/smart/filters%3Ano_upscale()/lotus-flower-828457262-5c6334b646e0fb0001dcd75a.jpg",
  ];

  const onRandom = () => {
    console.log("vao day");
    const random = Math.round(Math.random() * 5);
    setValue(random);
    // return random;
  };

  const randomData = (random) => {
    console.log("🚀 ~ file: useRandom.js ~ line 25 ~ randomData ~ random", random);
    const dataRandom = boxData[random];
    const isImage = dataRandom.startsWith("https");
    if (isImage) {
      return <img style={{ height: "100%", width: "100%" }} src={dataRandom} />;
    } else {
      return <div style={{ backgroundColor: dataRandom, height: "100%", width: "100%" }} />;
    }
  };

  return { renderChild: randomData(value), onRandom };
}

export default useRandom;

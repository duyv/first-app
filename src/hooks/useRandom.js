import { useRef } from "react";

function useRandom() {
  const prevRandom = useRef(-1);

  let random = prevRandom.current;

  const getRandom = (range) => {
    do {
      random = Math.round(Math.random() * range);
    } while (prevRandom.current === random);
    prevRandom.current = random;
    return random;
  };

  const randomData = (random, data) => {
    const dataRandom = data[random];
    const isImage = dataRandom.startsWith("https");
    if (isImage) {
      return <img style={{ height: "100%", width: "100%" }} src={dataRandom} />;
    } else {
      return <div style={{ backgroundColor: dataRandom, height: "100%", width: "100%" }} />;
    }
  };

  const getRandomChild = (data) => {
    const index = getRandom(data.length - 1);
    return [randomData(index, data), index];
  };

  return { getRandomChild };
}

export default useRandom;

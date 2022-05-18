import React, { useState, useRef } from 'react'
import { boxData } from './boxData'
import Box from '../box'

export default function UseRandom() {
  const [, setRefresh] = useState(false);
  const prevRandom = useRef(-1);

  let random = prevRandom.current;

  const getRandom = (range) => {
    do {
      random = Math.round(Math.random() * range);
    } while (prevRandom.current === random);
    prevRandom.current = random;
    return random;
  }

  const randomData = (random, data) => {
    const dataRandom = data[random]
    const isImage = dataRandom.startsWith("https")
    return isImage ? (
      <img src={dataRandom} style={{ height: '100%', width: '100%' }} alt="random" />
    ) : (
      <div style={{ height: '100%', width: '100%', backgroundColor: dataRandom }} />
    )
  }
  
  const getRandomChild = (data) => {
    const index = getRandom(data.length - 1);
    return [randomData(index, data), index];
  }

  let boxDataUse = [...boxData];

  const onClick = () => {
    boxDataUse = [...boxData];
    setRefresh((prevRefresh) => !prevRefresh);
  };

  return ( 
   <div>
      <div className="box-container">
        {new Array(3).fill(null).map((_, i) => {
          const [child, indexChild] = getRandomChild(boxDataUse);
          boxDataUse.splice(indexChild, 1);
          return <Box key={i}>{child}</Box>
        })}
      </div>
      <button onClick={onClick}>Random</button>
    </div>
  )
}

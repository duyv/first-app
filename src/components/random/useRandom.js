import { useState, useRef } from 'react'

export default function RandomData() {
  const [value, setValue] = useState(0)
  const preValue = useRef(0)
  // array of colors
  const boxData = [
    'green',
    'red',
    'yellow',
    'https://www.gardeningknowhow.com/wp-content/uploads/2019/09/flower-color.jpg',
    'https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg',
    'https://www.thoughtco.com/thmb/U3uVJMsgzLd00DbkIicnnIYM_kM=/1414x1414/smart/filters%3Ano_upscale()/lotus-flower-828457262-5c6334b646e0fb0001dcd75a.jpg',
  ]
  
  //run onRandom function
  //if onRandom value duplicate, run onRandom function again
  //if onRandom value not duplicate, setValue to onRandom value
  const onRandom = () => {
    const random = Math.floor(Math.random() * boxData.length)
    if (preValue.current === random) {
      onRandom()
    } else {
      setValue(random)
      preValue.current = random
    }
  }

  const randomData = (value) => {
    const data = boxData[value]
    const isImage = data.startsWith('https')
    return isImage ? (
      <img src={data} style={{ height: '100%', width: '100%' }} />
    ) : (
      <div style={{ height: '100%', width: '100%', backgroundColor: data }} />
    )
  }
   return { renderChild: randomData(value), onRandom };
}

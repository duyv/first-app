import { useEffect } from 'react'
import RandomData from './useRandom'
import Box from '../box'

export default function Random() {
  const { renderChild, onRandom } = RandomData()

  const onClick = () => {
    onRandom()
  }
  useEffect(() => {
    onRandom()
  }, [])

  //render Array of 3 Boxes using map renderChild element
  return (
    <div>
      <div className="box-container">
        {[...Array(3)].map((_, i) => (
          <Box key={i}>{renderChild}</Box>
        ))}
      </div>
      <button onClick={onClick}>Random</button>
    </div>
  )
}

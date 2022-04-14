import { useEffect, useState } from 'react'

export function Clock() {
  const [time, setTime] = useState(0)

  const renderClock = () => {
    return (
      <div className="clock">
        <h2>Clock</h2>
        <h3>{time}</h3>
      </div>
    )
  }

  useEffect(() => {
    setInterval(() => {
      const date = new Date()
      setTime(date.toLocaleTimeString())
    }, 1000)
  }, [])

  return renderClock()
}

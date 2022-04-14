import { Clock } from './clock'
import { Timer } from './timer'
import './styles.css'

export default function ClockComponent() {
  return (
    <div className="container">
      <div className="clock">
        <Clock />
      </div>
      <div className="timer">
        <Timer />
      </div>
    </div>
  )
}

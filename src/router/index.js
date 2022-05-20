import { Routes, Route } from 'react-router-dom'
import { Week1, Week2, Week3, Week4, Week5 } from '../pages/lessons'
import Detail from '../components/film/detail'
import NoData from '../pages/nodata'

function RootRouter() {
  return (
    <Routes>
      <Route path="/week-1" element={<Week1 />} />
      <Route path="/week-2" element={<Week2 />} />
      <Route path="/week-3" element={<Week3 />} />
      <Route path="/week-4" element={<Week4 />} />
      <Route path="/week-5" element={<Week5 />} />
      <Route path="/details" element={<Detail />} />
      <Route path="*" element={<NoData />} />
    </Routes>
  )
}

export default RootRouter

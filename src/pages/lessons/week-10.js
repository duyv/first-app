import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchDataSaga, setStudent, showProcess } from "../../redux/actions";

export function Week10() {
  const dataList = useSelector((state) => state.dataReducer);
  const showProcessStatus = useSelector((state) => state.processReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Week 10 - Get Data List - Middleware - Saga</h1>
      <ul>
        {showProcessStatus ? (
          <p>Loading data...</p>
        ) : (
          dataList.map((student, index) => (
            <div key={index}>
              <span>{student.title}</span>
            </div>
          ))
        )}
      </ul>
      <button
        onClick={() => {
          //   console.log("interator::", iterator.next());
          dispatch(setStudent([]));
        }}
      >
        Fetch Data
      </button>
      <button
        onClick={() => {
          //   console.log("interator::", iterator.next());
          dispatch(fetchDataSaga());
        }}
      >
        Test Process
      </button>
    </div>
  );
}

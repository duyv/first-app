import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/actions";

export function Week9() {
  const dataList = useSelector((state) => state.dataReducer);
  const showProcess = useSelector((state) => state.processReducer);
  const dispatch = useDispatch();

  function* childGeneratorFunction() {
    yield "abc";
    yield "def";
    return "xyz";
  }

  //   const childInterator = childGeneratorFunction();

  function* generatorFunction() {
    yield "day so dau tien: 1234"; // --> return
    // childInterator.next();
    yield* childGeneratorFunction();
    yield "day so thu 2: 23322";
    return "Het gia tri";
  }

  function* InfinityLoop() {
    let i = 0;
    // const now = new Date().getTime();

    while (true) {
      const now = new Date().getTime();
      yield now; //return + pause --> next() == resume
    }
  }
  // output cua API 1 == input cua API 2
  // [1,2,3,4,5,6,7,8,9,10,11,12,13];
  // generator function
  // iterator

  const iterator = InfinityLoop();

  return (
    <div>
      <h1>Week 9 - Get Data List - Redux - Middleware</h1>
      <ul>
        {dataList.map((student, index) => (
          <div key={index}>
            <span>{student.title}</span>
          </div>
        ))}
      </ul>
      <button
        onClick={() => {
          console.log("interator::", iterator.next());
        }}
      >
        Fetch Data
      </button>
    </div>
  );
}

import { setData, showProcess } from "../redux/actions";
import { takeEvery, call, put, takeLatest, delay, fork, spawn } from "redux-saga/effects";
import { getPhoto, getTodoFailed } from "../api/getPhoto";

function* getData(action) {
  if (action.type === "SET_STUDENT") {
    // thay vi if/ switch-case --> take
    yield put(showProcess(true));
    const photoData = yield call(getPhoto);
    const todoData = yield call(getTodoFailed);
    yield delay(1000);
    yield put(setData(photoData));
    yield put(showProcess(false));
  }

  if (action.type === "FETCH_DATA_SAGA") {
    console.log("vao fetch data saga");
  }
}

// dep to ong --> textChange -->
function* showLog(action) {
  console.log("action trong log::", action);
}

function* showLog2(action) {
  console.log("action trong log: 22222:");
}

function* runAll(action) {
  yield spawn(() => getData(action)); // --> can next if error
  yield fork(() => showLog(action)); // --> cancel if error
  yield spawn(() => showLog2(action));
  //   yield fork((action) => getData(action)); // --> TODO
  //fork -  spawn --> runAll in one time
}

export function* rootSaga() {
  yield takeEvery("*", runAll);
  //   yield takeLatest("FETCH_DATA_SAGA", getData);
}

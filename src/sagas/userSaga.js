import { takeEvery, put, call } from "redux-saga/effects";

import { GET_USERS, setUsers } from "../actions";
import { getUserList } from "../api/users";

function* getUsersWorker() {
  try {
    const userList = (yield getUserList()).data;
    console.log("userList: ", userList);
    yield put(setUsers(userList));
  } catch (err) {
    console.log("err: ", err);
  }
}

export function* getUsersSaga() {
  console.log("saga");
  yield takeEvery(GET_USERS, getUsersWorker);
}

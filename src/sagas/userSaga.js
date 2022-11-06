import { takeEvery, put, call } from "redux-saga/effects";

import { GET_USERS, setUsers, setIsUsersLoading } from "../actions";
import { getUserList } from "../api/users";

function* getUsersWorker() {
  try {
    yield put(setIsUsersLoading(true));
    const userList = (yield getUserList()).data;
    yield put(setUsers(userList));
    yield put(setIsUsersLoading(false));
  } catch (err) {
    console.log("err: ", err);
  }
}

export function* getUsersSaga() {
  console.log("saga");
  yield takeEvery(GET_USERS, getUsersWorker);
}

import { takeEvery, put, call } from "redux-saga/effects";

import { GET_USERS, setUsers, setIsUsersLoading, setError } from "../actions";
import { getUserList } from "../api/users";

function* getUsersWorker() {
  try {
    yield put(setIsUsersLoading(true));
    const userList = (yield getUserList()).data;
    yield put(setUsers(userList));
    yield put(setIsUsersLoading(false));
  } catch (err) {
    yield put(setError(err));
  }
}

export function* getUsersSaga() {
  console.log("saga");
  yield takeEvery(GET_USERS, getUsersWorker);
}

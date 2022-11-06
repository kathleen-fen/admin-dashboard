import { takeEvery, put, call, select } from "redux-saga/effects";

import {
  GET_USERS,
  setUsers,
  setIsUsersLoading,
  setError,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../actions";
import { userListSelector } from "../selectors";
import { getUserList, addUser, updateUser, deleteUser } from "../api/users";

function* getUsersWorker() {
  try {
    yield put(setIsUsersLoading(true));
    const userList = (yield getUserList()).data;
    yield put(setUsers([...userList]));
  } catch (err) {
    yield put(setError(err));
  } finally {
    yield put(setIsUsersLoading(false));
  }
}

function* addUserWorker(payload) {
  const { user } = payload;
  try {
    yield put(setIsUsersLoading(true));
    const { id } = (yield call(addUser, user)).data;
    const userList = yield select(userListSelector);
    yield put(setUsers([...userList, { id, ...user }]));
  } catch (err) {
    yield put(setError(err));
  } finally {
    yield put(setIsUsersLoading(false));
  }
}

function* updateUserWorker(payload) {
  const { user } = payload;
  try {
    yield put(setIsUsersLoading(true));
    const { id } = (yield call(updateUser, user.id, user)).data;
    const userList = (yield select(userListSelector)).map((el) => {
      if (el.id === id) {
        return { ...el, ...user };
      }
      return el;
    });

    yield put(setUsers([...userList]));
  } catch (err) {
    console.log(err);
    yield put(setError(err));
  } finally {
    yield put(setIsUsersLoading(false));
  }
}

function* deleteUserWorker(payload) {
  const { user } = payload;
  try {
    yield put(setIsUsersLoading(true));
    const { id } = (yield call(deleteUser, user.id)).data;
    const userList = yield select(userListSelector);
    yield put(setUsers(userList.filter((el) => el.id !== id)));
  } catch (err) {
    console.log(err);
    yield put(setError(err));
  } finally {
    yield put(setIsUsersLoading(false));
  }
}

export function* getUsersSaga() {
  yield takeEvery(GET_USERS, getUsersWorker);
  yield takeEvery(ADD_USER, addUserWorker);
  yield takeEvery(UPDATE_USER, updateUserWorker);
  yield takeEvery(DELETE_USER, deleteUserWorker);
}

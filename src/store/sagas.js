import { takeEvery, put } from 'redux-saga/effects'
import { INIT_LIST_ACTION } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* getInitList() {
  try {
    const res = yield axios.get('list.json')
    const action = initListAction(res.data)
    yield put(action)
  } catch(e) {
    console.log(e);
  }
}

function* mySaga() {
  yield takeEvery(INIT_LIST_ACTION, getInitList)
}

export default mySaga
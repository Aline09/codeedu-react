import { takeLatest, all } from "redux-saga/effects";
import { searchSaga, searchResults } from "./search";
import { playerActions, startPlayer } from "./player";


function* watchSearchTerm(){
  yield takeLatest("SET_SEARCH_TERM_SAGA", searchSaga);
}

function* watchSearchResults(){
  yield takeLatest("GET_SEARCH_RESULTS_SAGA", searchResults);
}

function* watchStartPlayer(){
  yield takeLatest("START_PLAYER_SAGA", startPlayer)
}

function* watchPlayerActions(){
  yield takeLatest("PLAYER_ACTIONS_SAGA", playerActions)
}

export default function* rootSaga() {
  yield all([watchSearchTerm(), watchSearchResults(), watchStartPlayer(), watchPlayerActions()]);
}

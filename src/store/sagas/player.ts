import { put, select, call, delay } from "redux-saga/effects";

//Saga para setar a música
export function* startPlayer(action: any){
  yield put({type: "PLAYING_SOUNDTRACK", payload: action.payload})
}

//Saga para controlar a execução
export function* playerActions(action: any){
  yield put({type: "PLAYER_ACTIONS", payload: action.payload})
}
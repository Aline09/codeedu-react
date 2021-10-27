import { put, select, call, delay } from "redux-saga/effects";
import http from "../../http";
import { Soundtrack, SoundtrackListResponse, AlbumListResponse  } from "../../../models/types";

export function* searchResults(action: any){
  const { type, payload } = action;

  const searchTerm: string = yield select(({searchReducer}) => searchReducer.searchTerm);

  const { data: albums } : AlbumListResponse = yield call(http, `/albums?search_term=${searchTerm}&page=${payload.page}`);

  let soundtracks: Soundtrack[] = []
    
  for (const i in albums) {
    if (albums) {
      let { data } : SoundtrackListResponse  = yield call(http, `/albums/${albums[i].id}/soundtracks`);
      soundtracks = data.map((soundtrack) => {
        soundtrack.artist = albums[i].artist
        return soundtrack
      })
    }
  }

  yield put({type: "SEARCH_ALBUMS", payload: albums})
  yield put({type: "SEARCH_SOUNDTRACKS", payload: soundtracks})
}

export function* searchSaga(action: any) {
  yield put({ type: "SET_SEARCH_TERM", payload: action.payload});
  
  yield delay(500);

  const searchTerm: string = yield select(({searchReducer}) => searchReducer.searchTerm);
    
  if(searchTerm.length > 0){
    yield call(http, `/search-log?search_term=${searchTerm}`)
    yield put({type: "GET_SEARCH_RESULTS_SAGA", payload: {
      page: 1
    }})
  } 
}

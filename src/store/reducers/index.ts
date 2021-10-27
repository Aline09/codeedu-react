import { combineReducers } from "redux";

import { AlbumList } from '../../../models/types';
import { SoundtrackList } from "../../../models/types";
import  { SearchTerm } from "../../../models/types";
import { PlayingSoundtrack } from "../../../models/types";

import albumsReducer  from "./album";
import soundtracksReducer  from "./soundtracks";
import searchReducer from "./search";
import playingSoundtrackReducer from "./player";

export type Store = {
  albumsReducer: AlbumList
  soundtracksReducer: SoundtrackList
  searchReducer: SearchTerm
  playingSoundtrackReducer: PlayingSoundtrack
};

export default combineReducers<Store>({
  albumsReducer: albumsReducer,
  soundtracksReducer: soundtracksReducer,
  searchReducer: searchReducer,
  playingSoundtrackReducer: playingSoundtrackReducer 
});

import { PlayingSoundtrack } from '../../../models/types';

const initialState: PlayingSoundtrack = {
  albumImage: "",
  soundtrackName: "",
  soundtrackTime: 0,
  artistName: "",
  isPlayingSoundtrack: false
};
  
export default function playingSoundtrackReducer(state = initialState, action: any) {
  switch (action.type) {
    case "PLAYING_SOUNDTRACK":
      return {...state, ...action.payload};
    case "PLAYER_ACTIONS":
      return {...state, isPlayingSoundtrack: action.payload}
    default:
      return state;
  }
}
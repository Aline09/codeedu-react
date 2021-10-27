import { SoundtrackList } from "../../../models/types";

  
  const initialState: SoundtrackList = {
    soundtracks: [],
  };
  
  export default function soundtracksReducer(state = initialState, action: any) {
    switch (action.type) {
      case "SEARCH_SOUNDTRACKS":
        return {...state, soundtracks: action.payload};
      default:
        return state;
    }
  }
import { AlbumList } from '../../../models/types';

const initialState: AlbumList = {
  albums: []
};
  
export default function albumsReducer(state = initialState, action: any) {
  switch (action.type) {
    case "SEARCH_ALBUMS":
      return {...state, albums: action.payload};
    default:
      return state;
  }
}
  
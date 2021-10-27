import { SearchTerm } from '../../../models/types';

const initialState: SearchTerm = {
    searchTerm: ''
}

export default function searchReducer(state = initialState, action: any){
    switch(action.type){
      case "SET_SEARCH_TERM":
        return {...state, searchTerm: action.payload}
      default:
        return state;
    }
}


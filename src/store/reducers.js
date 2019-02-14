// In a production app there would be multiple reducers, combined via combineReducers.
// For simplicity's sake this project uses a single reducer.
import * as actions from "./actions";

const initialState = {
  repos: [],
}

const repos = (state, action) => {
  if ( !state ) {
		return initialState;
	}

  switch (action.type) {
    case actions.SET_REPOS:
      return {...state, repos: action.repos};
    case actions.ADD_REPO:
      return {...state, repos: [...state.repos, action.repo]};
    default:
      return state;
  }
}

export default repos

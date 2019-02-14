
export const SET_REPOS = 'SET_REPOS';
export const ADD_REPO = 'ADD_REPO';

export function setRepos( repos ) {
  return { type: SET_REPOS, repos };
}

export function addRepo( repo ) {
  return { type: ADD_REPO, repo };
}

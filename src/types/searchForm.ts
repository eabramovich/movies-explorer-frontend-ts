export interface SearchFormState {
  searchText: string;
  isFilterEnabled: string;
  errorMessage: string | null;
}

export enum SearchFormActionTypes {
  TOOGLE_FILTER =  "TOOGLE_FILTER",
  SET_SEARCH_TEXT = "SET_SEARCH_TEXT"
}

interface ToggleFilterAction {
  type: SearchFormActionTypes.TOOGLE_FILTER
}

interface SetSearchTextAction {
  type: SearchFormActionTypes.SET_SEARCH_TEXT,
  payload: string;
}

export type SearchFormAction = ToggleFilterAction | SetSearchTextAction;


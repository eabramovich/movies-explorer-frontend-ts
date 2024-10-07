import { SearchFormAction, SearchFormActionTypes } from "../../types/searchForm";

export const toggleFilter = (): SearchFormAction => {
  return { type: SearchFormActionTypes.TOOGLE_FILTER }
}

export const setSearchText = (payload: string): SearchFormAction => {
  return { type: SearchFormActionTypes.SET_SEARCH_TEXT, payload }
}
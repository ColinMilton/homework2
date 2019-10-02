export const HANDLE_SELECT_ACTION = 'HANDLE_SELECT_ACTION';

export function handleSelect(item) {
  return dispatch => {
    dispatch({
      type: HANDLE_SELECT_ACTION,
      payload: item,
    });
  };
}

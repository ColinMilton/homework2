export function handleSelect(item) {
  return (dispatch) => {
    dispatch({
      type: 'HANDLE_SELECT',
      payload: item,
    });
  };
}

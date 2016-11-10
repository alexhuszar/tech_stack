export const selectLibrary = (id) => {
  console.log('xxxxxxxxxxxxxx', id)
  return {
    type: 'SELECTED_LIBRARY',
    payload: id
  }
};

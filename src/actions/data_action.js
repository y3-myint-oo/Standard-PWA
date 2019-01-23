export const ADD_DATA = 'ADD_DATA';
export const REMOVE_DATA = 'REMOVE_DATA';

export function addData(data) {
    const action = {
      type: ADD_DATA,
      data
    }
    return action;
}
  
export function removeData(data) {
    const action = {
      type: REMOVE_DATA,
      data
    }
    return action;
}
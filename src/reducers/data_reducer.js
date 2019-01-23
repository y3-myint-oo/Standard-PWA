
import mock_json from './data_mock.json';
import { ADD_DATA, REMOVE_DATA } from '../actions/data_action';

function datas(state = mock_json, action) {
    switch(action.type) {
      case ADD_DATA:
            console.log("trying to add data",action.data);
            state = state.concat([action.data]); //Query logic may vary
        return state;
      case REMOVE_DATA:
            console.log("trying to remove data",action.data.id) 
            state = state.filter(data => data.id !== action.data.id);
        return state;  
      default: 
        return state;
    }
  }
  
  export default datas;
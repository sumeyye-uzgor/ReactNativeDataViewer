import { createStore, applyMiddleware } from 'redux';
// import { persistStore } from 'redux-persist';
// import rootReducer from './root-reducer';
const INITIAL_STATE = {
  graphData: {},
  tableData: {},
  detailsData: {},
}
const rootReducer = (state = INITIAL_STATE, action) => {
  switch( action.type){
    case 'SET_GRAPH_DATA':
      return ({...state, graphData: action.payload})
    case 'SET_TABLE_DATA':
      return ({...state, tableData: action.payload})
    case 'SET_DETAILS_DATA':
      return ({...state, detailsData: action.payload})
    default:
      return state;
  }
}




const store  = createStore(rootReducer);
export default store



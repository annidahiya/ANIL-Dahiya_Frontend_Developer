// // import {
// //     legacy_createStore as createRedux,
// //   } from "redux";
// import { createStore } from "redux";
// import { reducer } from "./reducer";
// //   export const store = createRedux( reducer);
// // import { currencyReducer } from "./reducers/currencyReducer";

// export const store = createStore(reducer);


import {
    legacy_createStore as createRedux,
    applyMiddleware,
    compose,
    combineReducers,
  } from "redux";
  import thunk from "redux-thunk";
  import { reducer as DataReducer } from "./DataReducer/reducer";
  import {reducer as AuthREducer} from "./Auth/reducer"
  // console.log("reducer",DataReducer)
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const rootReducer = combineReducers({ DataReducer ,AuthREducer});
  
  export const store = createRedux(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  
import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import Auth from "./Auth";
import Mastercustomer from './MasterCustomer';
const reducers = combineReducers({
    routing: routerReducer,
    auth: Auth,
    mastercustomer: Mastercustomer
});
export default reducers;
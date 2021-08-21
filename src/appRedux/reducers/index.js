import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import Auth from "./Auth";
import Mastercustomer from './MasterCustomer';
import Mastercompany from "./MasterCompany";
const reducers = combineReducers({
    routing: routerReducer,
    auth: Auth,
    mastercustomer: Mastercustomer,
    mastercomopany: Mastercompany
});
export default reducers;
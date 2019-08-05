import { combineReducers } from "redux";
import shop from "../../shop";

export default combineReducers({
  [shop.constants.MODOLE_NAME]: shop.reducer
});

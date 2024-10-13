import { ActionType } from '../Constant';

function AuthReducer(init = "SplashScreen", data) {
    if (data.type === ActionType.LOGIN) {
        return data.payload;
    }
    else if (data.type === ActionType.LOGOUT) {
        return null;
    } else {
        return init;
    }
}


export default AuthReducer;

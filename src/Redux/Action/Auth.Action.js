import { ActionType } from '../Constant';


function setLogin(data) {
    return {
        payload: data,
        type: ActionType.LOGIN,
    };
}

function Logout() {

    return {
        type: ActionType.LOGOUT,
    };
}

export { setLogin, Logout };

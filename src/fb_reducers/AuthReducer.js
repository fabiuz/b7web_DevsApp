
const initialState = {
    email: '',
    password: '',
    status: 0,
};

const AuthReducer = (state = initialState, action) => {

    if(action.type === 'changeStatus') {
        alert("Retorno: " + action.payload.status);
        return {...state, status: action.payload.status};
    }

    return state;
};
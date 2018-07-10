import firebase from '../FirebaseConnection';

export const checkLogin = () => {

    return (dispatch) => {
        let user = firebase.auth().currentUser;

        if(user){
            // Usuário está logado.
            dispatch({
                type: 'changeStatus',
                payload: {
                    status:1,
                }

            });
        }else {
            // Usuário não está logado.
            dispatch({
                type: 'changeStatus',
                payload: {
                    status:0,
                }

            });
        }
    }
};
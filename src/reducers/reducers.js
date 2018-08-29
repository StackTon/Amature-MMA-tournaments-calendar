import { registerReducer, loginReducer } from './authReducer';
import { createTournametReducer } from './tournametReducer';

export default {
    register: registerReducer,
    login: loginReducer,
    createTournamet: createTournametReducer
};
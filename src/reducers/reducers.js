import { registerReducer, loginReducer } from './authReducer';
import { tournamentsReducer } from './tournamentsReducer';

export default {
    register: registerReducer,
    login: loginReducer,
    tournaments: tournamentsReducer
};
import { registerReducer, loginReducer } from './authReducer';
import { tournamentsReducer } from './tournamentsReducer';
import { tournamentsForApprovelReducer } from './tournamentsForApprovelReducer';

export default {
    register: registerReducer,
    login: loginReducer,
    tournaments: tournamentsReducer,
    tournamentsForApprovel: tournamentsForApprovelReducer
};
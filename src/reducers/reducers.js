import { registerReducer, loginReducer } from './authReducer';
import { tournamentsReducer, tournamentsForApprovelReducer } from './tournamentsReducer';

export default {
    register: registerReducer,
    login: loginReducer,
    tournaments: tournamentsReducer,
    tournamentsForApprovel: tournamentsForApprovelReducer
};
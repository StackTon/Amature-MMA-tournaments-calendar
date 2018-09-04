import { registerReducer, loginReducer } from './authReducer';
import { tournamentsReducer, detailsTournamentReducer } from './tournamentsReducer';
import { tournamentsForApprovalReducer } from './tournamentsForApprovalReducer';

export default {
    register: registerReducer,
    login: loginReducer,
    tournaments: tournamentsReducer,
    tournamentsForApproval: tournamentsForApprovalReducer,
    detailsTournament: detailsTournamentReducer
};
import {useReducer} from "react";

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQCndo07baSRlt0ApPVJI7vkF7WoJsFPXD4aIDuluaOoyxQuFp3sv3JCU8N0ppoIqJqsc8UOj4vyRlP9JPjwEZFIRbusFS8InGXxgeISbDVQ2vtJYcR5qq3-Rwj52Q2UDcu-gRGuVP2g5bygKuRqtkLf-l4PHebzXMK8q8LyajAtQc6qPnjS',
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
}

export default reducer;
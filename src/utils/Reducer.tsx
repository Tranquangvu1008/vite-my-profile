import { SET_PLAYER_STATE, SET_TOKEN, SET_TOP_ARTISTS, SET_TOP_TRACKS, SET_USER } from "./Constants";

type State = {
    token: string | null;
    userInfo: any;
    playbackState: boolean;
    topArtist: any;
    topTracks: any;
};

export const initialState: State = {
    token: null,
    userInfo: null,
    playbackState: false,
    topArtist: false,
    topTracks: false
};

const reducer = (state: State, action: any) => {

    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        case SET_USER:
            return {
                ...state,
                userInfo: action.userInfo,
            };
        case SET_PLAYER_STATE:
            return {
                ...state,
                playbackState: action.playbackState,
            };
        case SET_TOP_ARTISTS:
            return {
                ...state,
                topArtist: action.topArtist,
            };
        case SET_TOP_TRACKS:
            return {
                ...state,
                topTracks: action.topTracks,
            };
        // case SET_PLAYLIST:
        //     return {
        //         ...state,
        //         selectedPlaylist: action.selectedPlaylist,
        //     };
        // case SET_PLAYLIST_ID:
        //     return {
        //         ...state,
        //         selectedPlaylistId: action.selectedPlaylistId,
        //     };
        default:
            return state;
    }
};

export default reducer;
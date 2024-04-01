import { SET_PLAYER_STATE, SET_PLAYING, SET_PLAYLIST, SET_PLAYLISTS, SET_PLAYLIST_ID, SET_TOKEN, SET_USER } from "./Constants";

type State = {
    token: string | null;
    userInfo: any;
    playlists: any[];
    currentPlaying: any;
    playerState: boolean;
    selectedPlaylist: any;
    selectedPlaylistId: string;
};

export const initialState: State = {
    token: null,
    userInfo: null,
    playlists: [],
    currentPlaying: null,
    playerState: false,
    selectedPlaylist: null,
    selectedPlaylistId: "37i9dQZF1E37jO8SiMT0yN",
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
        case SET_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists,
            };
        case SET_PLAYING:
            return {
                ...state,
                currentPlaying: action.currentPlaying,
            };
        case SET_PLAYER_STATE:
            return {
                ...state,
                playerState: action.playerState,
            };
        case SET_PLAYLIST:
            return {
                ...state,
                selectedPlaylist: action.selectedPlaylist,
            };
        case SET_PLAYLIST_ID:
            return {
                ...state,
                selectedPlaylistId: action.selectedPlaylistId,
            };
        default:
            return state;
    }
};

export default reducer;
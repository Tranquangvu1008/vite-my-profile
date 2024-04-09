import { SET_CURRENT_PLAYING, SET_MY_PLAYLIST, SET_NEW_RELEASE_ALBUM, SET_PLAYER_STATE, SET_TOKEN, SET_TOP_ARTISTS, SET_TOP_TRACKS, SET_USER, SPOTIFY_PLAYER } from "./Constants";

type State = {
    token: string | null;
    userInfo: any;
    playbackState: boolean;
    topArtist: any;
    topTracks: any;
    newReleaseAlbum: any;
    myPlaylist: any;
    playing: any;
    playerSpotify: any;
};

export const initialState: State = {
    token: null,
    userInfo: null,
    playbackState: false,
    topArtist: false,
    topTracks: false,
    newReleaseAlbum: false,
    myPlaylist: false,
    playing: false,
    playerSpotify: false
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
        case SET_NEW_RELEASE_ALBUM:
            return {
                ...state,
                newReleaseAlbum: action.newReleaseAlbum,
            };
        case SET_MY_PLAYLIST:
            return {
                ...state,
                myPlaylist: action.myPlaylist,
            };
        case SET_CURRENT_PLAYING:
            return {
                ...state,
                playing: action.playing,
            };
        case SPOTIFY_PLAYER:
            return {
                ...state,
                playerSpotify: action.playerSpotify,
            };
        default:
            return state;
    }
};

export default reducer;
import ApiService from "../index";

export const loginSpotify = async () => {
    const userInfo = await ApiService.get("/me");
    return userInfo.data;
};

export const getPlayback = async () => {
    const player = await ApiService.get("/me/player");
    return player.data
};

export const getTopItem = async (type: string) => {
    const { data } = await ApiService.get(`/me/top/${type}`, {
        params: {
            limit: 10,
            offset: 0
        }
    });
    return data;
};

export const getNewReleaseAlbum = async () => {
    const { data } = await ApiService.get("/browse/new-releases", {
        params: {
            limit: 10,
            offset: 0
        }
    });
    return data.albums;
};

export const getMyPlaylist = async (limit: number) => {
    const { data } = await ApiService.get("/me/playlists", {
        params: {
            limit: limit,
            offset: 0
        }
    });
    return data;
};

export const playMusicSpotify = async (type: string, uri: any) => {
    const payload: {
        offset: { position: number };
        position_ms: number;
        [key: string]: any;
    } = {
        offset: {
            position: 0
        },
        position_ms: 0
    };

    if (type === 'album') {
        payload.context_uri = uri;
    } else {
        payload.uris = [uri];
    }

    await ApiService.put(`/me/player/play?device_id=${localStorage.getItem('deviceId')}`,
        payload,
    );
};

export const getCurrentPlaying = async () => {
    const { data } = await ApiService.get("/me/player");
    return data;
};

export const setSeekToPosition = async (position: any) => {
    await ApiService.put(`/me/player/seek?position_ms=${position}&device_id=${localStorage.getItem('deviceId')}`);
};

export const setVolumePlayer = async (volume: any) => {
    await ApiService.put(`/me/player/volume?volume_percent=${volume}&device_id=${localStorage.getItem('deviceId')}`);
};

export const startPlayerSpotify = async () => {
    await ApiService.put(`/me/player/play?device_id=${localStorage.getItem('deviceId')}`);
};

export const pausePlayerSpotify = async () => {
    await ApiService.put(`/me/player/pause?device_id=${localStorage.getItem('deviceId')}`);
};

export const nextPlayerSpotify = async () => {
    await ApiService.post(`/me/player/next?device_id=${localStorage.getItem('deviceId')}`);
};

export const previousPlayerSpotify = async () => {
    await ApiService.post(`/me/player/previous?device_id=${localStorage.getItem('deviceId')}`);
};

export const repeatPlayerSpotify = async (state: string) => {
    await ApiService.put(`/me/player/repeat?state=${state}&device_id=${localStorage.getItem('deviceId')}`);
};

export const shufflePlayerSpotify = async (state: boolean) => {
    await ApiService.put(`/me/player/shuffle?state=${state}&device_id=${localStorage.getItem('deviceId')}`);
};
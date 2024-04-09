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

export const getMyPlaylist = async () => {
    const { data } = await ApiService.get("/me/playlists", {
        params: {
            limit: 5,
            offset: 0
        }
    });
    return data;
};

export const playMusicSpotify = async (deviceId: string) => {
    console.log('deviceId', deviceId);
    if (!deviceId) return
    const { data } = await ApiService.put(`/me/player/play?device_id=${deviceId}`,
        JSON.stringify({
            "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
            "offset": {
                "position": 0
            },
            "position_ms": 0
        }),
    );
    return data;
};

import ApiService from "../index";

export const loginSpotify = async () => {
    const userInfo = await ApiService.get("/me",
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem('token'),
            },
        }
    );
    return userInfo.data;
};

export const getPlayback = async () => {
    const player = await ApiService.get("/me/player", {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem('token'),

        },
    });
    return player.data
};

export const getTopItem = async (type: string) => {
    const { data } = await ApiService.get(`/me/top/${type}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem('token'),

        },
        params: {
            limit: 10,
            offset: 0
        }
    });
    return data;
};

export const getNewReleaseAlbum = async () => {
    const { data } = await ApiService.get("/browse/new-releases", {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem('token'),

        },
        params: {
            limit: 10,
            offset: 0
        }
    });
    return data;
};
